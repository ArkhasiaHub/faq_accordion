import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
    const params = await context.params;
    const id = parseInt(params.id, 10);
    const faq = await prisma.fAQ.findUnique({where: {id}, select: {answer: true}});
    if (!faq) {
        return NextResponse.json({error: "Answer not found"});
    }
    return NextResponse.json(faq);
}