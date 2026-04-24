import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function HeroImage({
  src,
  alt,
  width,
  height,
  className,
}: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
    />
  );
}
