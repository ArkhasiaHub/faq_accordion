import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const faqList = [
  { question: "How can I track my order?", answer: "You can track your order using the tracking link sent to your email after shipment." },
  { question: "Can I cancel my purchase?", answer: "Yes, as long as the order hasn’t shipped yet. Go to your account and select 'Cancel Order'." },
  { question: "Do you offer international shipping?", answer: "Yes, we deliver to over 50 countries worldwide. Shipping costs vary depending on location." },
  { question: "How can I contact customer service?", answer: "You can reach us through the contact form or via live chat during business hours." },
  { question: "Can I return an item?", answer: "Yes, returns are accepted within 30 days if the product is in its original condition." },
  { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, PayPal, and Apple Pay." },
  { question: "How do I change my password?", answer: "Go to your account settings, select 'Change Password', and follow the instructions." },
];

async function main() {
    for (const faq of faqList) {
        await prisma.fAQ.create({data: faq});
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
