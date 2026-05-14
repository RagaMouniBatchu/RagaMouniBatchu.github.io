"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Papers", href: "#papers" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function NavBar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <nav
                className={cn(
                    "flex items-center gap-1 rounded-full border px-2 py-1 transition-all duration-300",
                    isScrolled
                        ? "bg-background/80 border-border/50 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
                        : "bg-transparent border-transparent"
                )}
            >
                <Link href="#" className="mr-4 px-4 font-bold text-lg hidden sm:block">
                    Raga Mouni
                </Link>
                <div className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            size="sm"
                            className="rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/50"
                            asChild
                        >
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                    ))}
                </div>
                <div className="ml-2 pl-2 border-l hidden sm:block">
                    <Button size="sm" className="rounded-full" asChild>
                        <Link href="/Raga%20Mouni%20Batchu%20Resume%20v4.pdf" target="_blank">Resume</Link>
                    </Button>
                </div>
            </nav>
        </motion.header>
    );
}
