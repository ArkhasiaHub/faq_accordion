import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, context: {params: Promise<{ id: string }>}) {
    const params = await context.params;
    const id = parseInt(params.id, 10);
    const faq = await prisma.fAQ.findUnique({ where: {id}});

    if (!faq) {
        return NextResponse.json({ error: "FAQ not found "}, {status: 404});
    }
    return NextResponse.json(faq);
}
