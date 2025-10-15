"use client"

import { useEffect, useState } from "react";
import FaqItem from "./faq_item";

type FaqItem = {
    question: string;
    answer: string;
}

export default function FaqList() {
    const [faqList, setFaqList] = useState<FaqItem[]>([]);

    useEffect(() => {
        fetch("/api/faq")
        .then((res) => res.json())
        .then((data) => setFaqList(data))
        .catch((err) => console.error("Error fetching FAQ: ", err));
    }, []);

    return (
        <fieldset
        role="list"
        aria-labelledby="faq-list"
        >
            <ul>
                {
                    faqList.map((f, index) => (
                        <li key={index}>
                            <FaqItem
                            question={f.question}
                            answer={f.answer} 
                            drawBottomLine={index < faqList.length - 1 ? true : false}
                            index={index}/>
                        </li>
                    ))
                }
            </ul>
        </fieldset>
    );
}
