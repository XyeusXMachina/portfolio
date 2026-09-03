import Hero from "@/components/Hero";
import NavCards from "@/components/NavCards";
import FeaturedProjects from "@/components/FeaturedProjects";
import HomeAboutSplit from "@/components/HomeAboutSplit";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <NavCards />
      <FeaturedProjects />
      <HomeAboutSplit />
      <ContactCTA />
    </>
  );
}
