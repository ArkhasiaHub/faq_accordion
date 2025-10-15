import FaqItem from "./faq_item";
import faqList from "@/data/data.json"

export default function FaqList() {
    return (
        <fieldset
        role="list"
        aria-labelledby="faq-list"
        >
            <ul>
                {
                    faqList.faq.map((f, index) => (
                        <li key={index}>
                            <FaqItem
                            question={f.question}
                            answer={f.answer} 
                            drawBottomLine={index < faqList.faq.length - 1 ? true : false}
                            index={index}/>
                        </li>
                    ))
                }
            </ul>
        </fieldset>
    );
}
