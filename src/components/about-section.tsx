"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About Me</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Experienced <span className="text-foreground font-semibold">software and AI engineer</span> with <span className="text-foreground font-semibold">5+ years</span> in designing, developing, and maintaining scalable solutions.
                        I bring strong experience in <span className="text-primary font-semibold">cloud technologies</span>, <span className="text-primary font-semibold">backend development</span>,
                        and research applying <span className="text-primary font-semibold">GraphRAG</span> and <span className="text-primary font-semibold">agentic AI</span>, including migrating legacy systems to microservices—reducing cost and improving operational visibility.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I completed my Master&apos;s in Computer Science at West Chester University with a 4.0 GPA (Spring 2026), with thesis work on real-time isolated ASL recognition and multimodal LLM evaluation.
                        Previously, I served as a Scrum Master for 3 years, leading high-impact teams to deliver consistent results.
                        I am passionate about building intelligent systems that optimize performance and solve complex problems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
