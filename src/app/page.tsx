import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Introduction from "@/components/home/introduction";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-24">
      <Introduction />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
