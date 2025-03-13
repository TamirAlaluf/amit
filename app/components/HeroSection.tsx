import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center items-center py-8">
      <Image
        src="/hero.jpg"
        width={500}
        height={250}
        alt="תמונת גיבור"
        className="rounded-lg shadow-lg"
        priority
      />
    </section>
  );
}
