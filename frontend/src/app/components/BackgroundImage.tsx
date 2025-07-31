import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/tarott-bg.png"
        alt="Tarott Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
} 