"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = {
    "Languages": ["Java", "Node.js", "Python", "C++", "Perl", "TypeScript", "SQL", "Solidity"],
    "AI & ML": ["PyTorch", "Hugging Face", "Transformers", "LangChain", "Vertex AI", "RAG", "GraphRAG", "Agentic AI", "Fine-tuning", "LoRA", "LLMs", "Knowledge Graphs"],
    "Cloud & DevOps": ["AWS (S3, EC2, RDS, SQS, SSM)", "CloudWatch", "CloudFront", "Kubernetes", "Docker", "Jenkins", "Grafana", "Prometheus", "Kafka", "Graylog"],
    "Web & Database": ["React", "Next.js", "Spring Boot", "PostgreSQL", "MongoDB", "Neo4j", "GraphQL", "Hasura", "JDBC", "JSP"],
    "Blockchain": ["Ethereum", "Solidity", "Web3", "Smart Contracts"],
};

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Skills</h2>
                <p className="text-muted-foreground">My technical toolkit for building scalable solutions.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="mb-4 text-xl font-semibold text-primary">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <Badge key={skill} variant="secondary" className="font-normal hover:bg-primary/20 transition-colors">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
