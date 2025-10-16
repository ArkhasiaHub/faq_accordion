import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const faqs = await prisma.fAQ.findMany({ select: {id:true, question: true}});
    return NextResponse.json(faqs);
}