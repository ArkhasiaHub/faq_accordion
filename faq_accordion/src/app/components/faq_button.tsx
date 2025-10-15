type  FaqButtonProps = {
    index: number;
    isAnswerShow: "hidden" | "show";
    showAnswer: () => void;
};

export default function FaqButton({index, isAnswerShow, showAnswer}: FaqButtonProps) {
    return (
        <button 
        className="rounded-full w-7 h-7" 
        onClick={showAnswer}
        aria-expanded={isAnswerShow === "show"}
        aria-controls={`faq-answer-${index}`}
        >
            <img 
            src={isAnswerShow === "hidden" ? "/images/icon-plus.svg" : "/images/icon-minus.svg"} 
            alt="" 
            className="object-cover"/>
        </button>
    );
}
