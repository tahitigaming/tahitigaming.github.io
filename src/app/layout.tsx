import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/components/utils/css-utils";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tahiti Gaming",
    description:
        "Welcome to Tahiti Gaming, a community bringing you great roleplaying experiences on popular platforms like RedM or RAGE Multiplayer",
    applicationName: "Tahiti Web",
    referrer: "origin-when-cross-origin",
    keywords: ["tahiti", "gaming", "redm", "multiplayer", "roleplay"],
    authors: [{ name: "Tim" }],
    creator: "Tim",
    publisher: "Tim",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(`https://tahitigaming.github.io`),
    openGraph: {
        title: "Tahiti Gaming",
        description:
            "Welcome to Tahiti Gaming, a community bringing you great roleplaying experiences on popular platforms like RedM or RAGE Multiplayer",
        //url: 'https://nextjs.org',
        siteName: "Tahiti Gaming",
        images: [
            {
                url: "/static/images/tahiti_banner_hills.jpeg",
                width: 2124,
                height: 1194,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`bg-slate-900 text-gray-100`}>
            <body
                className={cn(
                    inter.className,
                    `max-w-full max-h-full h-[100vh] w-[100vw]`
                )}
            >
                {children}
                <Script
                    crossOrigin="anonymous"
                    src="https://kit.fontawesome.com/d9e4806bf7.js"
                />
            </body>
        </html>
    );
}
