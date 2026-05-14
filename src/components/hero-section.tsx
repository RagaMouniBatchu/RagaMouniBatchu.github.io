"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 text-center">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[80px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
                >
                    Open for Research & Development Roles
                </motion.div>

                <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
                    Raga Mouni Batchu
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    AI Researcher & Engineer specializing in Large Language Models, Generative AI, and Full Stack Development.
                    Building the future of intelligent agents and inclusive technology.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                        <Link href="#projects">
                            View My Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base" asChild>
                        <Link href="/Raga%20Mouni%20Batchu%20Resume%20v4.pdf" target="_blank">
                            <FileText className="mr-2 h-4 w-4" /> Resume
                        </Link>
                    </Button>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
            >
                <div className="h-6 w-4 rounded-full border border-muted-foreground p-1">
                    <div className="h-1 w-full rounded-full bg-muted-foreground" />
                </div>
            </motion.div>
        </section>
    );
}
