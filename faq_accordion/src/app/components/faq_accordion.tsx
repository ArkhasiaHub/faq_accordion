import FaqList from "./faq_list";

export default function FaqAccordion() {
    return (
        <section 
        className="rounded-2xl bg-white flex flex-col p-6 gap-6 min-w-80 max-w-80 lg:min-w-xl lg:max-w-xl"
        aria-labelledby="faq_header"
        role="region"
        >
            <section className="flex flex-row items-center gap-6">
                <img src="/images/icon-star.svg" alt=""/>
                <h1 id="faq-accordion-title" className="font-bold text-[var(--purple-950)] text-3xl lg:text-6xl">
                    FAQs
                </h1>
            </section>
            <FaqList/>
        </section>
    );
}
