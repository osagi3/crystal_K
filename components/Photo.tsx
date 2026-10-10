import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-stone ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 cubic-bezier(0.25,1,0.5,1) group-hover:scale-105 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:translate-y-0"
        style={{ objectPosition }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-soil/30 via-transparent to-paper/20 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
    </div>
  );
}
