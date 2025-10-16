import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params:{ id: string }}) {
    const id = parseInt(params.id, 10);
    const faq = await prisma.fAQ.findUnique({ where: {id}});

    if (!faq) {
        return NextResponse.json({ error: "FAQ not found "}, {status: 404});
    }
    return NextResponse.json(faq);
}
