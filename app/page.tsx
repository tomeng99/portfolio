import { About } from "@/components/About";
import { AIFindings } from "@/components/AIFindings";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Workshops } from "@/components/Workshops";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-hidden bg-zinc-950">
        <Hero />
        <About />
        <Projects />
        <Workshops />
        <AIFindings />
      </main>
      <Footer />
    </>
  );
}
