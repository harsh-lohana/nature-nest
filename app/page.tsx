import Image from "next/image";
import {
  Adventures,
  Hero,
  PopularDestination,
  Suggestions,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suggestions />
      <PopularDestination />
      <Adventures />
      <Testimonials />
    </main>
  );
}
