import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: { id: string } }) {
    const id = parseInt(context.params.id, 10);
    const faq = await prisma.fAQ.findUnique({where: {id}, select: {answer: true}});
    if (!faq) {
        return NextResponse.json({error: "Answer not found"});
    }
    return NextResponse.json(faq);
}