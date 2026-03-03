"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Static list of title logos (from /public/images/titles/)
const titleLogos = [
    "THOM.png", "fisher.png", "egor krid.png", "kuruch.png",
    "billyraccs.png", "mirele.png", "lilpump.png"
];

export default function Marquee() {
    // Triple logos for perfect seamless loop without clipping
    const allLogos = [...titleLogos, ...titleLogos, ...titleLogos];

    return (
        <div className="w-full overflow-hidden bg-black py-6 md:py-12 lg:py-20 border-t border-b border-stone-800/50">
            <motion.div
                className="flex gap-10 md:gap-24 lg:gap-32 items-center"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                    repeatType: "loop"
                }}
            >
                {allLogos.map((logo, i) => (
                    <div key={i} className="h-7 md:h-16 lg:h-28 shrink-0 flex items-center justify-center px-3 md:px-8 lg:px-10">
                        <Image
                            src={`/images/titles/${logo}`}
                            alt={logo.replace('.png', '')}
                            width={300}
                            height={120}
                            className="object-contain h-full w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
