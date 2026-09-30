import Image from "next/image";

export function Logo({
  className = "brand-logo",
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      className={className}
      src="/brand/logo.png"
      alt="Rental Cash Flow Lab"
      width={450}
      height={390}
      preload={preload}
    />
  );
}
