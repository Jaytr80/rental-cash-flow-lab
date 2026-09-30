import PDFDocument from "pdfkit";
import fs from "node:fs";
const disclaimer =
  "Educational estimates using your own inputs; illustrative only. Real estate investing involves risk. Jay Adams is not a broker, lender, tax preparer, attorney, or investment adviser.";
function base(path) {
  const doc = new PDFDocument({
    size: "LETTER",
    margin: 42,
    bufferPages: true,
  });
  doc.pipe(fs.createWriteStream(path));
  return doc;
}
function heading(doc, title, sub) {
  doc
    .fillColor("#294336")
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("RENTAL CASH FLOW LAB  /  JAY ADAMS", { characterSpacing: 1 });
  doc
    .moveDown(1.3)
    .font("Helvetica-Bold")
    .fontSize(23)
    .text(title, { characterSpacing: 0 });
  doc
    .moveDown(0.4)
    .font("Helvetica")
    .fontSize(10)
    .fillColor("#59645a")
    .text(sub);
  doc.moveDown(1);
}
function footer(doc, n) {
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor("#59645a")
    .text(disclaimer, 42, 709, { width: 525 });
  doc.text(`rentalcashflowlab.com  |  ${n}`, 42, 737);
}
const free = base("public/downloads/conservative-rental-deal-analyzer.pdf");
heading(
  free,
  "Conservative Rental Deal Analyzer",
  "Property: _________________________________   Date / sources: __________________",
);
free
  .fontSize(9)
  .text(
    "How to use: enter your own documented estimates. Use annual figures unless marked monthly. Write percentages as decimals in calculations. Complete the formulas manually; this is not an automatic calculator.",
  );
free.moveDown(0.7);
const rows = [
  ["Purchase price (P)", "$________________"],
  [
    "Monthly scheduled rent (M) / vacancy & collection loss (V)",
    "$____________ / __________%",
  ],
  ["Annual scheduled rent (S) = M x 12", "$________________"],
  ["Annual effective rental income (E) = S x (1 - V)", "$________________"],
  ["Annual taxes / insurance", "$____________ / $____________"],
  ["Annual owner-paid utilities / management", "$____________ / $____________"],
  [
    "Annual routine repairs / HOA, licensing & other costs",
    "$____________ / $____________",
  ],
  ["Total annual operating expenses (O): sum above", "$________________"],
  ["Annual net operating income (NOI) = E - O", "$________________"],
  ["Annual debt service (D): principal + interest only", "$________________"],
  ["Annual capital replacement reserve (R)", "$________________"],
  [
    "Annual before-tax cash flow after reserves (C) = NOI - D - R",
    "$________________",
  ],
  ["Monthly before-tax cash flow after reserves = C / 12", "$________________"],
  [
    "Initial cash invested (I): down payment + closing + rehab + reserves",
    "$________________",
  ],
  ["Cap rate = NOI / P x 100 (P must be positive)", "________________%"],
  [
    "Cash-on-cash after reserves = C / I x 100 (I must be positive)",
    "________________%",
  ],
  ["Optional DSCR = NOI / D (D must be positive)", "________________ x"],
  [
    "Optional break-even occupancy = (O + D + R) / S x 100",
    "________________%",
  ],
];
for (const [label, value] of rows) {
  let y = free.y;
  free
    .font("Helvetica")
    .fontSize(8.4)
    .fillColor("#253b33")
    .text(label, 42, y, { width: 370 });
  free.text(value, 417, y, { width: 153 });
  free
    .moveTo(42, y + 19)
    .lineTo(570, y + 19)
    .strokeColor("#dedfd4")
    .stroke();
  free.y = y + 26;
}
free
  .moveDown(0.5)
  .fontSize(8)
  .text(
    "NOI excludes debt payments, capital spending/reserves, depreciation, and income taxes. Do not double-count tax/insurance escrow in debt service. Cash flow here is before income tax, after the stated capital reserve. DSCR definitions vary by lender. Break-even occupancy assumes fixed costs and positive scheduled rent; above 100% means full occupancy is insufficient under these assumptions.",
    42,
    free.y,
    { width: 528 },
  );
footer(free, 1);
free.end();
const sections = JSON.parse(
  fs.readFileSync("content/toolkit-sections.json", "utf8"),
);
const pack = base(
  "public/downloads/toolkit/cash-flow-underwriting-portfolio-toolkit.pdf",
);
sections.forEach(([title, sub, items], i) => {
  if (i) pack.addPage();
  heading(pack, title, sub);
  items.forEach((item) => {
    pack
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#33493b")
      .text(item, { width: 528, lineGap: 3 });
    pack.moveDown(0.9);
  });
  footer(pack, i + 1);
});
pack.end();
const index = base("public/downloads/toolkit/pipeline-index.pdf");
heading(index, sections[0][0], sections[0][1]);
sections[0][2].forEach((x) => {
  index.fontSize(11).text(x, { lineGap: 4 });
  index.moveDown();
});
footer(index, 1);
index.end();
