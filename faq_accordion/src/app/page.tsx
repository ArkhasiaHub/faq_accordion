import Image from "next/image";
import FaqAccordion from "./components/faq_accordion";

export default function Home() {
  return (
    <main className={`flex flex-col justify-center items-center m-0 p-10 min-h-screen bg-[var(--purple-100)] 
    bg-[url('/images/background-pattern-mobile.svg')] lg:bg-[url('/images/background-pattern-desktop.svg')] 
    bg-no-repeat bg-contain`}>
        <FaqAccordion/>
    </main>
  );
}
