import Image from "next/image";
import { Hero, CardSection, Testimonials } from "@/components";
import {
  suggestionList,
  popularDestinationList,
  adventureList,
  X_Posts,
} from "@/constants/constants";
export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Hero />
      <CardSection title="What are you looking for ?" list={suggestionList} />
      <br />
      <CardSection title="Popular destinations" list={popularDestinationList} />
      <br />
      <CardSection title="Adventures near you" list={adventureList} />
      <Testimonials list={X_Posts} />
    </main>
  );
}
