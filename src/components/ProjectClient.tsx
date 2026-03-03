"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function ProjectClient({ slug, assets }: { slug: string, assets: string[] }) {
    const { language } = useLanguage();

    return (
        <main className="bg-black min-h-screen text-white font-hauora overflow-hidden">
            <Header />

            {/* Full-width project content */}
            <div className="w-full pt-[150px] md:pt-[213px] pb-20">
                {/* Title section with padding */}
                <div className="w-full px-[20px] md:px-[60px] mb-[60px] md:mb-[100px]">
                    <FadeInUp>
                        <h1 className="text-[10vw] md:text-[96px] font-bold uppercase font-objectSans tracking-tighter mb-4 leading-none">
                            {slug.replace(/-/g, ' ')}
                        </h1>
                        <p className="text-stone-500 text-lg md:text-xl tracking-widest uppercase font-hauora">
                            {language === 'ru' ? 'Режиссерская версия' : "Director's cut"}
                        </p>
                    </FadeInUp>
                </div>

                {/* Full-width images - NO gaps, NO padding */}
                <div className="w-full flex flex-col">
                    {assets.map((file) => (
                        <div key={file} className="w-full">
                            <Image
                                src={`/images/cases/${slug}/${file}`}
                                alt={file}
                                width={1920}
                                height={1080}
                                className="w-full h-auto block"
                                quality={100}
                                unoptimized={file.endsWith('.gif') || file.endsWith('.mp4')}
                            />
                        </div>
                    ))}
                </div>

                {/* Next Project button */}
                <div className="mt-[100px] md:mt-[180px] mb-20 flex justify-center px-[20px]">
                    <FadeInUp delay={0.2}>
                        <Link href="/" className="bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-[85px] font-bold text-xl md:text-2xl hover:scale-105 transition-transform font-objectSans uppercase tracking-tighter">
                            {language === 'ru' ? 'На главную' : 'Back Home'}
                        </Link>
                    </FadeInUp>
                </div>
            </div>

            <Footer />
        </main>
    );
}
