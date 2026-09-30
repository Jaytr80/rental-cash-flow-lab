export function PageIntro({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{tag}</p>
      <h1>{title}</h1>
      <div className="intro">{children}</div>
    </div>
  );
}
