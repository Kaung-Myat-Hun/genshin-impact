import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import HeroContent from "@/components/HeroContent/HeroContent";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <HeroContent></HeroContent>
    </main>
  );
}
