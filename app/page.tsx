import { About } from "@/components/About";
import { AIInfra } from "@/components/AIInfra";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-hidden bg-zinc-950">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIInfra />
      </main>
      <Footer />
    </>
  );
}
