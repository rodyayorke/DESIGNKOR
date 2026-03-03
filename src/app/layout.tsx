import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

const hauora = localFont({
    src: [
        {
            path: "../../public/fonts/Hauora-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Hauora-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-hauora",
});

const objectSans = localFont({
    src: [
        {
            path: "../../public/fonts/PPObjectSans-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-object-sans",
});

export const metadata: Metadata = {
    title: "DESIGNKOR",
    description: "Creative Design Portfolio",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${hauora.variable} ${objectSans.variable} ${inter.variable} antialiased font-hauora`}
            >
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
