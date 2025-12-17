import Link from "next/link";
import Image from "next/image";
import DucorrLogo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Ducorr">
      <Image 
        src={DucorrLogo} 
        alt="Ducorr Cathodic Protection Specialists UAE KSA" 
        width={112} 
        height={27} 
        priority
        className="h-auto w-auto"
        style={{ color: 'transparent' }}
      />
    </Link>
  );
}
