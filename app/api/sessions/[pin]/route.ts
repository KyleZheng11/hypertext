import { NextResponse } from "next/server";
import { getSession } from "@/lib/session-store";

export async function GET(request: Request, {params}: {params: Promise<{pin: string}>}) {
    const paramsData = await params;
    const pin = paramsData.pin;
    const session = getSession(pin);
    if (!session) {
        return NextResponse.json(
            { error: "PIN has no session" },
            { status: 404 },
        );
    }
    return NextResponse.json(
        { session: session },
        { status: 200 },
    );
}