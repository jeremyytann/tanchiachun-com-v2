import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Introduction from "@/components/home/introduction";
import Footer from "@/components/home/footer";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <div className="page-shell mx-auto min-h-screen max-w-5xl px-5 pt-14 pb-8 md:px-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
