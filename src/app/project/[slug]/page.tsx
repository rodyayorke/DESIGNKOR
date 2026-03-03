import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ProjectClient from "@/components/ProjectClient";

// Generate static params for all projects
export async function generateStaticParams() {
    const projectsDir = path.join(process.cwd(), "public/images/cases");
    try {
        const folders = await fs.promises.readdir(projectsDir);
        const params = [];
        for (const folder of folders) {
            const fullPath = path.join(projectsDir, folder);
            const stat = await fs.promises.stat(fullPath);
            if (stat.isDirectory()) {
                // Encode folder names with spaces for URL compatibility
                params.push({ slug: encodeURIComponent(folder) });
            }
        }
        return params;
    } catch (e) {
        return [];
    }
}

async function getProjectAssets(slug: string) {
    // Decode the slug to get the actual folder name
    const decodedSlug = decodeURIComponent(slug);
    const projectDir = path.join(process.cwd(), "public/images/cases", decodedSlug);
    try {
        const files = await fs.promises.readdir(projectDir);
        return files.filter(file =>
            /\.(jpg|jpeg|png|gif|mp4)$/i.test(file) &&
            !file.toLowerCase().startsWith('thumb')  // Exclude all thumb files
        ).sort((a, b) => {
            // Natural sort for numbered files
            const numA = parseInt(a.match(/\d+/)?.[0] || '0');
            const numB = parseInt(b.match(/\d+/)?.[0] || '0');
            return numA - numB;
        });
    } catch (e) {
        return null;
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const assets = await getProjectAssets(slug);

    if (!assets) {
        notFound();
    }

    // Pass the decoded slug to the client component
    const decodedSlug = decodeURIComponent(slug);
    return <ProjectClient slug={decodedSlug} assets={assets} />;
}
