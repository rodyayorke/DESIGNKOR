"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const t = translations[language].nav;

    return (
        // FULL-WIDTH HEADER
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white pointer-events-none px-4 md:px-8 lg:px-12">
            {/* Logo */}
            <Link href="/" className="absolute left-4 md:left-8 lg:left-12 top-6 md:top-8 pointer-events-auto block">
                <Image
                    src="/images/logo.png"
                    alt="DESIGNKOR"
                    width={180}
                    height={28}
                    className="h-5 md:h-6 lg:h-7 w-auto object-contain"
                />
            </Link>

            {/* Desktop Menu - Object Sans Bold as per snippet */}
            <nav className="hidden md:flex absolute right-32 lg:right-40 top-6 md:top-8 gap-6 lg:gap-10 items-center pointer-events-auto font-bold text-xs md:text-sm font-objectSans">
                <Link href="#portfolio" className="hover:opacity-70 transition-opacity whitespace-nowrap">{t.portfolio}</Link>
                <Link href="#about" className="hover:opacity-70 transition-opacity whitespace-nowrap">{t.about}</Link>
                <Link href="#contacts" className="hover:opacity-70 transition-opacity whitespace-nowrap">{t.contacts}</Link>
            </nav>

            {/* Language Switcher - smaller, fits properly */}
            <div className="hidden md:flex absolute right-4 md:right-8 lg:right-12 top-5 md:top-7 px-3 py-1.5 items-center justify-center border border-white/50 rounded-full pointer-events-auto text-xs font-inter gap-1">
                <button
                    onClick={() => setLanguage("ru")}
                    className={`transition-colors ${language === 'ru' ? 'text-white' : 'text-neutral-500'}`}
                >
                    RU
                </button>
                <span className="text-white/50">/</span>
                <button
                    onClick={() => setLanguage("en")}
                    className={`transition-colors ${language === 'en' ? 'text-white' : 'text-neutral-500'}`}
                >
                    ENG
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden absolute right-4 top-5 pointer-events-auto z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-6 text-2xl font-bold font-objectSans pointer-events-auto"
                    >
                        <Link href="#portfolio" onClick={() => setIsOpen(false)}>{t.portfolio}</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)}>{t.about}</Link>
                        <Link href="#contacts" onClick={() => setIsOpen(false)}>{t.contacts}</Link>
                        <div className="flex gap-3 text-lg mt-6 font-inter">
                            <button
                                onClick={() => { setLanguage("ru"); setIsOpen(false); }}
                                className={language === 'ru' ? 'text-white' : 'text-neutral-500'}
                            >
                                RU
                            </button>
                            <span className="text-neutral-700">/</span>
                            <button
                                onClick={() => { setLanguage("en"); setIsOpen(false); }}
                                className={language === 'en' ? 'text-white' : 'text-neutral-500'}
                            >
                                ENG
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
