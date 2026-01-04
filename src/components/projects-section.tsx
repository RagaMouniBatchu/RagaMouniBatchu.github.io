"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Zap, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Novel Generator (LLM Agentic Framework)",
        description: "Designed a tool using LLM Agents and RAG pipeline to generate novel chapters, extracting metadata for vector storage to maintain context.",
        tech: ["LLM Agents", "RAG", "Vector DB", "Python"],
        link: "https://webnovellm.vercel.app/",
        github: "#"
    },
    {
        title: "Fine-Tuning Flan-T5 for Entity Extraction",
        description: "Fine-tuned Flan-T5 using LoRA on a custom entity extraction dataset, achieving 25% accuracy improvement over the baseline.",
        tech: ["Flan-T5", "LoRA", "Fine-tuning", "NLP"],
        link: "#",
        github: "https://github.com/RagaMouniBatchu/custom-entity-extraction-flan-t5"
    },
    {
        title: "WordAnimator",
        description: "A creative tool that brings words to life through dynamic animations using SVG manipulation and React.",
        tech: ["React", "SVG", "Animation"],
        link: "https://wordanimator.com/",
        github: "#"
    },
    {
        title: "PaperReplicator",
        description: "An AI-powered application that helps researchers understand and replicate scientific papers by generating structured Jupyter notebooks.",
        tech: ["Next.js", "Gemini API", "Python"],
        link: "#",
        github: "#"
    },
    {
        title: "Microservices Migration Platform",
        description: "Led the migration of call-related features from legacy system to microservices at athenahealth, saving $732k annually and reducing manual workloads.",
        tech: ["Java", "Spring Boot", "Kubernetes", "AWS"],
        link: "#",
        github: "#"
    },
    {
        title: "Two-Way SMS Service",
        description: "Built a high-throughput SMS service handling 100,000+ patient replies daily for appointment confirmations, cancellations, and rescheduling.",
        tech: ["Java", "Kafka", "SMS APIs", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        title: "Patient Appointment Reminder System",
        description: "Implemented a last-minute reminder system that reduced patient no-show rates by 18%, improving clinic efficiency and patient engagement.",
        tech: ["Java", "SMS Integration", "Scheduling"],
        link: "#",
        github: "#"
    },
    {
        title: "TV On-Screen Guide Search",
        description: "Enhanced the TV guide search experience at TiVo, improving usability and content discoverability with state preservation features.",
        tech: ["C++", "Visual C++", "Set-Top Box"],
        link: "#",
        github: "#"
    },
    {
        title: "Organ Donor & Recipient Matching DApp",
        description: "Developed a decentralized application using Ethereum Solidity and Web 3.0 to match organ donors with recipients securely.",
        tech: ["Solidity", "Ethereum", "Web3", "Blockchain"],
        link: "#",
        github: "#"
    },
    {
        title: "Master Mind Word Game",
        description: "Created an interactive word game in Python where users guess words based on computer-generated clues.",
        tech: ["Python", "Game Dev"],
        link: "#",
        github: "#"
    },
    {
        title: "Online Examination Portal",
        description: "Built a web-based examination portal for managing tests and results securely.",
        tech: ["Java", "JSP", "Servlets", "Bootstrap"],
        link: "#",
        github: "#"
    }
];

const isLinkAvailable = (link: string) => link && link !== "#";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Practical applications of my research and creative coding endeavors.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden border-primary/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <Zap className="h-12 w-12 text-primary/40" />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="flex gap-2 flex-wrap mt-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </CardContent>
                                <CardFooter className="flex flex-col gap-2">
                                    {isLinkAvailable(project.link) && (
                                        <Button variant="default" size="sm" className="w-full" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" /> Link</a>
                                        </Button>
                                    )}
                                    {isLinkAvailable(project.github) && (
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> Code</a>
                                        </Button>
                                    )}
                                    {!isLinkAvailable(project.link) && !isLinkAvailable(project.github) && (
                                        <Button variant="outline" size="sm" className="w-full bg-muted/50 text-muted-foreground cursor-not-allowed" disabled>
                                            <Clock className="w-4 h-4 mr-2" /> In Progress
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
