import { saveSession } from "@/lib/session-store";
import { NextResponse } from "next/server";

type CreateSessionBody = {
    title?: string;
    hostName?: string;
};

export async function POST(request: Request) {
    const data = (await request.json()) as CreateSessionBody;
    const title = data.title?.trim();
    const hostName = data.hostName?.trim();
    if (!title || !hostName) {
        return NextResponse.json(
            { error: "Title and hostname are required"},
            { status: 400 }
        );
    }

    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    
    const session = {
        pin,
        title,
        hostName,
        createdAt: new Date().toISOString(),
        status: "active" as const,
    };

    saveSession(session);

    return NextResponse.json({ session }, {status: 201});
    
    
}