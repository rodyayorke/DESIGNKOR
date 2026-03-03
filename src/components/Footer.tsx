"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer id="contacts" className="relative w-full bg-black text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12">

            {/* Divider line before contacts as in snippet */}
            <div className="w-full h-px bg-stone-500/50 mb-12 md:mb-16"></div>

            {/* Main content area */}
            <div className="flex flex-col gap-8 lg:gap-0">

                {/* Title - Object Sans Bold as per snippet */}
                <h2 className="text-[24px] lg:text-[36px] font-bold font-objectSans mb-6 lg:mb-8 leading-[30px] tracking-[-0.0048em] lg:tracking-[-0.0072em] capitalize">
                    {t.nav.contacts}
                </h2>

                {/* Desktop: Two-column contacts + Team photos row */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between">

                    {/* Left side: Two-column contacts - Hauora Semibold */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 shrink-0">
                        {/* Column 1: Связаться с нами */}
                        <div className="text-[16px] lg:text-[17px] font-semibold font-hauora leading-auto">
                            <div className="text-white mb-1">{t.footer.connect}</div>
                            <a href="mailto:designkor@gmail.com" className="text-white hover:underline">designkor@gmail.com</a>
                        </div>

                        {/* Column 2: Операционный директор */}
                        <div className="text-[16px] lg:text-[17px] font-semibold font-hauora leading-auto">
                            <div className="text-white mb-1">{t.footer.ops}</div>
                            <div>Арсен Ш.</div>
                            <a href="mailto:arsen@design.kor" className="text-white hover:underline">arsen@design.kor</a>
                        </div>
                    </div>

                    {/* Team: Mobile slider */}
                    <div className="block lg:hidden overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mt-2">
                        <div className="flex gap-4 w-max">
                            {t.team.map((member, i) => (
                                <div key={i} className="flex flex-col gap-3 shrink-0 w-[110px]">
                                    <div className="w-full aspect-[140/176] bg-neutral-800 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 hover:invert transition-all duration-500">
                                        {member.image && (
                                            <Image src={`/images/team/${member.image}`} alt={member.name} fill className="object-cover" />
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-zinc-600 text-xs font-normal font-hauora leading-auto">{member.name}</span>
                                        <span className="text-zinc-600 text-[9px] font-normal font-hauora uppercase tracking-wider leading-auto">{member.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team: Desktop */}
                    <div className="hidden lg:flex gap-8 w-auto justify-end">
                        {t.team.map((member, i) => (
                            <div key={i} className="flex flex-col gap-3 shrink-0 w-[240px]">
                                <div className="w-full aspect-[140/176] bg-neutral-800 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 hover:invert transition-all duration-500">
                                    {member.image && (
                                        <Image src={`/images/team/${member.image}`} alt={member.name} fill className="object-cover" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-zinc-600 text-[17px] font-normal font-hauora leading-auto">{member.name}</span>
                                    <span className="text-zinc-600 text-[17px] font-normal font-hauora uppercase tracking-wider leading-auto">{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Links - Hauora Semibold */}
            <div className="w-full mt-12 md:mt-16 lg:mt-24 mb-8 md:mb-10 flex flex-wrap justify-between items-center gap-4 lg:gap-6">
                {t.socials.map((social) => (
                    <Link key={social} href="#" className="text-white text-[16px] lg:text-[24px] font-semibold font-hauora hover:opacity-70 transition-opacity leading-auto">
                        {social}
                    </Link>
                ))}
            </div>

            {/* Massive Logo - Stretching to full width */}
            <div className="w-full mt-12 lg:mt-20 flex items-center justify-center">
                <div className="w-full lg:w-[100%] relative" style={{ height: 'clamp(80px, 25vw, 400px)' }}>
                    <Image
                        src="/images/logo.png"
                        alt="DESIGNKOR"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="text-center text-[10px] md:text-xs text-stone-600 mt-6 lg:mt-8 font-hauora uppercase tracking-widest leading-auto">
                © {new Date().getFullYear()} DESIGNKOR. Art of Identity.
            </div>
        </footer>
    );
}
