import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const clientsDir = path.join(process.cwd(), "public/images/clients");
    try {
        const files = await fs.promises.readdir(clientsDir);
        const clients = files.filter(file => /\.(png|jpg|jpeg|svg)$/i.test(file));
        return NextResponse.json(clients);
    } catch (e) {
        return NextResponse.json([], { status: 500 });
    }
}
