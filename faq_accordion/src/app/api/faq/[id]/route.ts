import { NextResponse } from "next/server";

const faqList = [
    { id: 1, question: "How can I track my order?", answer: "You can track your order using the tracking link sent to your email after shipment." },
    { id: 2, question: "Can I cancel my purchase?", answer: "Yes, as long as the order hasn’t shipped yet. Go to your account and select 'Cancel Order'." },
    { id: 3, question: "Do you offer international shipping?", answer: "Yes, we deliver to over 50 countries worldwide. Shipping costs vary depending on location." },
    { id: 4, question: "How can I contact customer service?", answer: "You can reach us through the contact form or via live chat during business hours." },
    { id: 5, question: "Can I return an item?", answer: "Yes, returns are accepted within 30 days if the product is in its original condition." },
    { id: 6, question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, PayPal, and Apple Pay." },
    { id: 7, question: "How do I change my password?", answer: "Go to your account settings, select 'Change Password', and follow the instructions." },
];

export async function GET(request: Request, {params}: {params:{ id: string }}) {
    const id = parseInt(params.id, 10);
    const faq = faqList.find((f) => f.id === id);
    if (!faq) {
        return NextResponse.json({ error: "FAQ not found "}, {status: 404});
    }
    return NextResponse.json(faq);
}
