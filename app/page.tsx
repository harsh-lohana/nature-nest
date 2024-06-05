import Image from "next/image";
import { Hero, CardSection, Testimonials } from "@/components";
import {
  suggestionList,
  popularDestinationList,
  adventureList,
} from "@/constants/constants";
export default function Home() {
  return (
    <main>
      <Hero />
      <CardSection title="What are you looking for ?" list={suggestionList} />
      <br />
      <CardSection title="Popular destinations" list={popularDestinationList} />
      <br />
      <CardSection title="Adventures near you" list={adventureList} />
      <Testimonials />
    </main>
  );
}
