import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
    try {
        const projectsDir = path.join(process.cwd(), "public", "images", "cases");
        const folders = fs.readdirSync(projectsDir);

        // Filter out hidden files/system files if any
        const projectList = folders.filter(folder =>
            !folder.startsWith('.') &&
            fs.statSync(path.join(projectsDir, folder)).isDirectory()
        );

        return NextResponse.json(projectList);
    } catch (error) {
        console.error("Error reading projects:", error);
        return NextResponse.json([], { status: 500 });
    }
}
