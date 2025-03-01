import Experience from "@/components/home/experience";
import Introduction from "@/components/home/introduction";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-24">
      <Introduction />
      <Experience />
    </div>
  );
}
