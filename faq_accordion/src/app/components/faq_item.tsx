"use client"

import { useState } from "react";
import FaqButton from "./faq_button";
import { fetchOneFaq } from "../lib/fetch_one_faq";

type FaqItemProps = {
    question: string;
    answer: string;
    drawBottomLine: boolean;
    index: number;
};

export default function FaqItem({question, answer, drawBottomLine, index}: FaqItemProps) {
    const [answerStatus, setAnswerStatus] = useState<"hidden" | "show">("hidden");

    return (
        <section className={`w-full flex flex-col gap-6 pb-6 pt-6 ${drawBottomLine ? "border-b" : "border-b-0"}`}>

            <header id={`faq-question-${index}`} className="flex flex-row justify-between">
                <h2 className="text-[var(--purple-950)] hover:text-[var(--violet-600)] font-semi-bold text-lg">
                    {question}
                </h2>
                <FaqButton
                index={index}
                isAnswerShow={answerStatus} 
                showAnswer={() => {
                    setAnswerStatus(answerStatus === "hidden" ? "show" : "hidden");
                }}/>
            </header>

            <p className={`transition-all duration-200 text-[var(--purple-600)] text-sm lg:text-base font-normal
            ${answerStatus === "show" ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2.5"}`}
            role="region"
            id={`faq-question-${index}`}
            aria-hidden={answerStatus !== "show"}
            >
                {answer}
            </p>
        </section>
    );
}
