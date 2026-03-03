"use client";

import Image from "next/image";

// Static list of client logos (from /public/images/clients/)
const clientLogos = [
    "geneva.png", "skryptonite.png", "sber.png", "bsg.png",
    "awge 1.png", "fonbet.png", "medium.png", "winline.png", "dance.png",
    "kinopoisk.png", "smzv.png", "rds.png", "perque.png"
];

export default function ClientGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center">
            {clientLogos.map((logo, i) => (
                <div key={i} className="h-4 md:h-6 lg:h-12 w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(20%-3.2rem)] relative grayscale brightness-[2] opacity-70 hover:opacity-100 transition-opacity">
                    <Image
                        src={`/images/clients/${logo}`}
                        alt={logo.replace('.png', '')}
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
}
