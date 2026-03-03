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
        <div className="w-full overflow-hidden bg-black py-[28px] lg:py-[45px] border-t border-b border-stone-800/50">
            <motion.div
                className="flex gap-10 md:gap-20 lg:gap-28 items-center"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                    repeatType: "loop"
                }}
            >
                {allLogos.map((logo, i) => (
                    <div key={i} className="h-[38px] lg:h-[73px] shrink-0 flex items-center justify-center px-3 md:px-6 lg:px-8">
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
