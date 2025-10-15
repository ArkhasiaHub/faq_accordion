import Image from "next/image";
import FaqAccordion from "./components/faq_accordion";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center m-0 p-10 min-h-screen bg-[var(--purple-100)]">
      <FaqAccordion/>
    </main>
  );
}
