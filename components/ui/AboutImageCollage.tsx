import Image from "next/image";

export default function AboutImageCollage() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#181c2a] via-[#181c2a] to-[#232946] overflow-hidden flex items-center justify-center">
      {/* Main large image */}
      <div className="absolute left-1/2 top-12 md:top-20 w-72 h-80 md:w-[380px] md:h-[340px] -translate-x-1/2 z-20 rotate-[-4deg] shadow-2xl">
        <Image
          src="/images/about/whywether.jpg"
          alt="Team main"
          fill
          className="object-cover rounded-2xl grayscale"
          style={{ filter: 'grayscale(1)' }}
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      </div>
      {/* Top right image */}
      <div className="absolute right-12 top-4 w-56 h-40 md:w-72 md:h-52 z-30 rotate-[10deg] shadow-xl">
        <Image
          src="/images/about/hero.jpg"
          alt="Team work"
          fill
          className="object-cover rounded-xl grayscale"
          style={{ filter: 'grayscale(1)' }}
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
      </div>
      {/* Bottom left image */}
      <div className="absolute left-8 bottom-8 w-64 h-44 md:w-80 md:h-56 z-10 rotate-[-8deg] shadow-xl">
        <Image
          src="/images/about/whyitmatters.jpeg"
          alt="Team relax"
          fill
          className="object-cover rounded-xl grayscale"
          style={{ filter: 'grayscale(1)' }}
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
      </div>
      {/* Optional: Add a fourth image (e.g., a fun or mascot image) */}
      {/* <div className="absolute right-24 bottom-4 w-40 h-40 z-0 rotate-[3deg] shadow-lg">
        <Image
          src="/images/about/mascot.jpg"
          alt="Mascot"
          fill
          className="object-cover rounded-2xl grayscale"
          style={{ filter: 'grayscale(1)' }}
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      </div> */}
    </div>
  );
} 