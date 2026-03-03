"use client";

import Marquee from "@/components/Marquee";
import ClientGrid from "@/components/ClientGrid";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

// Project data with correct thumbnail extensions
const projectThumbs: Record<string, string> = {
    "BIOPRINTING-case-files": "thumb.jpg",
    "KILL OFF": "thumb.jpg",
    "LIGA TANSA": "thumb.gif",
    "ORBITA": "thumb.jpg",
    "SHALUI": "thumb.jpg"
};

export default function Home() {
    const { language } = useLanguage();
    const t = translations[language];
    const [projects, setProjects] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Failed to fetch projects:", err));
    }, []);

    const getThumb = (project: string) => {
        const thumb = projectThumbs[project] || "thumb.jpg";
        return `/images/cases/${project}/${thumb}`;
    };

    return (
        <main className="bg-black text-white min-h-screen font-hauora overflow-hidden">
            <Header />

            {/* Full-width container */}
            <div className="w-full relative px-4 md:px-8 lg:px-12">

                {/* Hero Section */}
                <section className="pt-28 md:pt-32 lg:pt-40 mb-8 md:mb-12">
                    <FadeInUp>
                        {/* Hero heading - PP Object Sans Bold */}
                        <h1 className="text-[7vw] md:text-[5vw] lg:text-[112px] font-bold uppercase leading-[1.1] lg:leading-[1.08] font-objectSans tracking-tight">
                            {t.hero.line1}<br />
                            {t.hero.line2}<br />
                            {t.hero.line3}<br />
                            {t.hero.line4}
                        </h1>
                    </FadeInUp>
                </section>

                {/* Intro / CTA - Inter Medium */}
                <section className="mb-12 md:mb-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
                    <div className="w-full lg:w-[55%] text-[3.5vw] md:text-[1.6vw] lg:text-[31px] font-medium font-inter leading-auto text-neutral-300">
                        {t.hero.description}
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-auto lg:ml-auto">
                        <div className="flex gap-2 lg:gap-4 flex-wrap text-white">
                            {t.hero.tags.map(tag => (
                                <div key={tag} className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-full border border-stone-600 text-[2.5vw] md:text-xs lg:text-[23px] font-semibold font-hauora whitespace-nowrap leading-auto">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <Link href="#contacts" className="w-full lg:w-auto px-6 md:px-8 lg:px-12 py-2.5 md:py-3 lg:py-4 bg-white rounded-full flex items-center justify-center text-black font-semibold font-hauora text-[3vw] md:text-sm lg:text-[23px] hover:bg-neutral-200 transition-colors leading-auto">
                            {t.hero.cta}
                        </Link>
                    </div>
                </section>

                {/* Portfolio Section - PP Object Sans Bold */}
                <section id="portfolio" className="mb-12 md:mb-16">
                    <h2 className="text-lg md:text-xl lg:text-[47px] font-bold font-objectSans mb-6 md:mb-10 leading-auto capitalize">{t.sections.portfolio}</h2>

                    <div className="block lg:hidden overflow-x-auto pb-4">
                        <div className="flex gap-4 w-max">
                            {projects.map((project) => (
                                <Link key={project} href={`/project/${encodeURIComponent(project)}`} target="_blank" className="group flex flex-col shrink-0 w-[280px]">
                                    <div className="w-full aspect-[384/320] bg-zinc-900 overflow-hidden relative mb-3 rounded-[5px]">
                                        <Image
                                            src={getThumb(project)}
                                            alt={project}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            unoptimized={getThumb(project).endsWith('.gif')}
                                        />
                                    </div>
                                    <h3 className="text-white text-base font-semibold font-hauora uppercase leading-auto">
                                        {project.replace(/-/g, ' ')}
                                    </h3>
                                    <div className="text-stone-500 text-sm font-normal mt-1.5 tracking-wide leading-auto">Directors cut</div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-12">
                        {projects.map((project) => (
                            <Link key={project} href={`/project/${encodeURIComponent(project)}`} target="_blank" className="group flex flex-col">
                                <div className="w-full aspect-[384/320] bg-zinc-900 overflow-hidden relative mb-4 rounded-[5px]">
                                    <Image
                                        src={getThumb(project)}
                                        alt={project}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized={getThumb(project).endsWith('.gif')}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <h3 className="text-white text-[31px] font-semibold font-hauora uppercase leading-auto">
                                    {project.replace(/-/g, ' ')}
                                </h3>
                                <div className="text-stone-500 text-[23px] font-normal font-hauora mt-2 tracking-wide leading-auto">Directors cut</div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* About Section - PP Object Sans Bold */}
                <section id="about" className="pt-8 md:pt-12 pb-12 md:pb-16 border-t border-stone-800/50">
                    <h2 className="text-lg md:text-xl lg:text-[47px] font-bold font-objectSans mb-8 md:mb-12 leading-auto capitalize">{t.sections.about}</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                        {/* Mission text - Hauora Semibold */}
                        <div className="text-white text-[3.5vw] md:text-[1.4vw] lg:text-[31px] font-semibold font-hauora leading-normal lg:leading-[1.5]">
                            {t.about.mission}
                        </div>

                        {/* Services - Hauora Normal descriptions as per snippet */}
                        <div className="flex flex-col gap-10 md:gap-12 font-hauora">
                            <div>
                                <h3 className="text-white text-sm md:text-base lg:text-[31px] font-semibold mb-3 leading-auto">{t.about.branding.title}</h3>
                                <p className="text-neutral-500 text-xs md:text-sm lg:text-[23px] font-normal font-hauora leading-normal">{t.about.branding.desc}</p>
                            </div>
                            <div>
                                <h3 className="text-white text-sm md:text-base lg:text-[31px] font-semibold mb-3 leading-auto">{t.about.visual.title}</h3>
                                <p className="text-neutral-500 text-xs md:text-sm lg:text-[23px] font-normal font-hauora leading-normal">{t.about.visual.desc}</p>
                            </div>
                            <div>
                                <h3 className="text-white text-sm md:text-base lg:text-[31px] font-semibold mb-3 leading-auto">{t.about.art.title}</h3>
                                <p className="text-neutral-500 text-xs md:text-sm lg:text-[23px] font-normal font-hauora leading-normal">{t.about.art.desc}</p>
                            </div>
                            <div>
                                <h3 className="text-white text-sm md:text-base lg:text-[31px] font-semibold mb-3 leading-auto">{t.about.motion.title}</h3>
                                <p className="text-neutral-500 text-xs md:text-sm lg:text-[23px] font-normal font-hauora leading-normal">{t.about.motion.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="mt-12 md:mt-16 lg:mt-24">
                <Marquee />
            </section>

            <div className="w-full px-4 md:px-8 lg:px-12">
                <section className="mb-12 md:mb-20">
                    <ClientGrid />
                </section>

                <Footer />
            </div>
        </main>
    );
}
