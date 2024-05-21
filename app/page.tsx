import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="max-w-screen-lg mx-auto">
          <Navbar />
          <Hero />
          <About />
        </div>
      </div>
    </main>
  );
}
