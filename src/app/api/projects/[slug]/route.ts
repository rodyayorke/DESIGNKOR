import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const projectDir = path.join(process.cwd(), "public/images/cases", slug);
    try {
        const files = await fs.promises.readdir(projectDir);
        const assets = files.filter(file =>
            /\.(jpg|jpeg|png|gif)$/i.test(file) &&
            file.toLowerCase() !== 'thumb.jpg'
        ).sort();
        return NextResponse.json(assets);
    } catch (e) {
        return NextResponse.json(null, { status: 404 });
    }
}
