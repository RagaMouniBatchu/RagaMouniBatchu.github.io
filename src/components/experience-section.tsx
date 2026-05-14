"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "AI Engineer Intern",
        company: "iPipeline",
        location: "Pennsylvania, United States",
        date: "01/2026 – Current",
        description: "Architected an agentic digitization service using AWS Bedrock and Python to map complex paper-based forms to digital templates via high-dimensional vector similarity matching. Engineered a scalable event-driven stack with Terraform, EventBridge, and SQS for asynchronous document processing with durable storage and automated metadata in DynamoDB. Built high-performance MCP servers to ingest and validate insurance data, turning unstructured inputs into structured representations. Integrated LLM tool-calling with MCP servers to automate form-filling and quote retrieval, bridging natural language instructions and legacy insurance APIs.",
        tags: ["AWS Bedrock", "Terraform", "MCP", "EventBridge", "LLM Tool-Calling"]
    },
    {
        title: "Research Assistant",
        company: "West Chester University of Pennsylvania",
        location: "West Chester, PA",
        date: "04/2025 – Current",
        description: "Conducting research on knowledge graphs and LLM applications. Leading work on GraphRAG for toxicity prediction using Tox21 and PubChem datasets. Investigating Multi-Head Latent Attention and RoPE effects on Telugu language models. Contributing to accessibility research including bidirectional ASL translation and gamified ASL learning tools.",
        tags: ["GraphRAG", "LLM Research", "NLP", "Accessibility"]
    },
    {
        title: "Senior Member of Technical Staff",
        company: "athenahealth",
        location: "Bengaluru, India",
        date: "06/2023 – 08/2024",
        description: "Led the migration of call-related features to microservices, saving $732k annually. Designed monitoring systems for messaging services and improved SMS opt-in rates by 30%. Served as Scrum Master, ensuring consistent system uptime and resolving critical production issues.",
        tags: ["Microservices", "System Design", "Leadership", "Scrum Master"]
    },
    {
        title: "Member of Technical Staff",
        company: "athenahealth",
        location: "Bengaluru, India",
        date: "06/2021 – 05/2023",
        description: "Developed email blacklist features improving KPR. Extended SMS services to support Spanish. Built a Two-Way SMS service handling 100k+ replies daily. Designed vendor driver libraries for traffic migration.",
        tags: ["Java", "SMS/Email Services", "Vendor Integration"]
    },
    {
        title: "Associate Member of Technical Staff",
        company: "athenahealth",
        location: "Bengaluru, India",
        date: "06/2019 – 05/2021",
        description: "Implemented patient appointment reminder systems reducing no-show rates by 18%. Resolved high-priority production bugs and conducted PoCs for user engagement features.",
        tags: ["Production Support", "Feature Dev", "PoC"]
    },
    {
        title: "Software Engineer Intern",
        company: "TiVo",
        location: "Bengaluru, India",
        date: "06/2018 – 07/2019",
        description: "Enhanced TV on-screen guide search and fixed live content display bugs. Developed state preservation features and added dashboard support to Set-Top Box Simulator.",
        tags: ["C++", "Set-Top Box", "UI/UX"]
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Work Experience</h2>
                <p className="text-muted-foreground">
                    Track record of delivering high-impact solutions in agile environments.
                </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors"
                    >
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />

                        <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <Badge variant="secondary" className="w-fit">{exp.date}</Badge>
                        </div>
                        <div className="mb-2 text-primary font-medium">{exp.company} • {exp.location}</div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {exp.tags.map(tag => (
                                <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground border">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
