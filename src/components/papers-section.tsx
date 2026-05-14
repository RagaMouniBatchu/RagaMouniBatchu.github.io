"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Image, BookMarked } from "lucide-react";
import { motion } from "framer-motion";

type Paper = {
    title: string;
    /** Shown when statusBadges is not set */
    status?: string;
    /** Multiple badges, e.g. Thesis + Published */
    statusBadges?: string[];
    description: string;
    tags: string[];
    link: string;
    isPoster?: boolean;
    isReport?: boolean;
    isThesis?: boolean;
};

const papers: Paper[] = [
    {
        title: "A Survey on Data Visualization Techniques for International Trade",
        status: "Published",
        description: "A comprehensive survey exploring various visualization techniques enabling better insights into international trade data.",
        tags: ["Data Viz", "Survey", "Trade Analysis"],
        link: "https://rebicte.org/index.php/rebicte/article/view/217"
    },
    {
        title: "Bidirectional ASL",
        status: "Published",
        description: "Research on bidirectional translation systems for American Sign Language, bridging the communication gap.",
        tags: ["ASL", "NLP", "Accessibility"],
        link: "https://www.mdpi.com/2073-431X/15/1/20"
    },
    {
        title: "Real-Time Isolated ASL Recognition: Evaluating Spatial-Temporal Networks and Multimodal LLMs",
        statusBadges: ["Thesis", "Published"],
        description:
            "Master's thesis (West Chester University, Computer Science; Spring 2026). Published in WCU Digital Commons. This thesis investigates the deployment of high-accuracy Isolated ASL Recognition (ISLR) in resource-constrained edge environments. We train a lightweight Spatio-Temporal Attention Network (SSTAN, ~2.7 M parameters, ~10 MB) on the WLASL-100 benchmark, achieving 75.25% Top-1 and 88.24% Top-5 accuracy with 139 ms CPU-only inference. A systematic comparison against frontier multimodal LLMs (Gemini 3 Flash, Gemini 3.1 Pro, Qwen 3 VL) shows SSTAN outperforms the best LLM baseline by ~1.85× in accuracy while being 22–230× faster and up to 40× cheaper annually. The LLMs' core limitation is a lack of fine-grained temporal perception; they impose English-language semantic priors rather than learning the articulatory distinctions that define ASL signs. To demonstrate practical impact, we integrate the model into a browser-based ASL Word Search Game where users sign words via webcam instead of typing, grounding vocabulary practice in embodied, gesture-driven interaction.",
        tags: ["ASL", "Edge ML", "Thesis", "Digital Commons"],
        link: "https://digitalcommons.wcupa.edu/all_capstones/64/",
        isThesis: true
    },
    {
        title: "KG-RAG for Tox21: Explainable Drug Toxicity Prediction",
        status: "Submitted",
        description: "Developing a knowledge graph-based RAG application for toxicity prediction, integrating Tox21, PubChem, DSSTox, ChemBL, UniProt and Reactome data products.",
        tags: ["GraphRAG", "Neo4j", "Bioinformatics", "LLMs"],
        link: "/Poster.jpeg",
        isPoster: true
    },
    {
        title: "ASL Recognition & Game-Based Learning",
        status: "Published",
        description: "ASL learning game with a custom backtracking-based puzzle generator and a spatial-temporal Transformer for gloss recognition, achieving 89% Top-5 accuracy on the WLASL dataset. Published in Computers (MDPI).",
        tags: ["Gamification", "ASL", "Accessibility", "MDPI"],
        link: "https://www.mdpi.com/2073-431X/15/5/299"
    },
    {
        title: "ChatGPT in Education",
        status: "Research",
        description: "Analyzing the impact, opportunities, and challenges of integrating Large Language Models like ChatGPT in educational settings.",
        tags: ["LLM", "Education", "Ethics"],
        link: "#"
    },
    {
        title: "DSABench: New Benchmark for Evaluating LLMs on DSA Problems",
        status: "Research",
        description: "Proposing a new robust benchmark to evaluate the coding and reasoning capabilities of LLMs on Data Structures and Algorithms.",
        tags: ["LLM", "Benchmarking", "Coding"],
        link: "#"
    },
    {
        title: "Effect of MLA and RoPE on Agglutinative Languages like Telugu",
        status: "Research",
        description: "Investigating the efficacy of Multi-Head Latent Attention and Rotary Positional Embeddings on the storage and retrieval of long-context information in Telugu.",
        tags: ["NLP", "Telugu", "Mechanistic Interpretability"],
        link: "https://github.com/RagaMouniBatchu/Telugu_MLARoPE",
        isReport: true
    }
];

function statusLabels(paper: Paper): string[] {
    if (paper.statusBadges?.length) return paper.statusBadges;
    if (paper.status) return [paper.status];
    return [];
}

function badgeVariant(label: string): "default" | "secondary" | "outline" {
    if (label === "Published") return "default";
    if (label === "Thesis") return "outline";
    if (label === "Submitted") return "secondary";
    return "secondary";
}

const isLinkAvailable = (link: string) => link && link !== "#";

export function PapersSection() {
    return (
        <section id="papers" className="py-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Research & Publications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Exploring the frontiers of Artificial Intelligence, from core NLP research to applied accessible technology.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {papers.map((paper, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full flex flex-col hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex flex-wrap justify-start items-start mb-2 gap-2">
                                    {statusLabels(paper).map((label) => (
                                        <Badge key={label} variant={badgeVariant(label)}>
                                            {label}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-xl leading-snug">{paper.title}</CardTitle>
                                <CardDescription className="mt-2 text-sm">
                                    {paper.tags.map(tag => (
                                        <span key={tag} className="inline-block bg-muted px-2 py-0.5 rounded text-xs mr-2 mb-1">
                                            #{tag}
                                        </span>
                                    ))}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm">
                                    {paper.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                {isLinkAvailable(paper.link) ? (
                                    <Button variant="default" size="sm" className="w-full" asChild>
                                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                            {paper.isThesis ? (
                                                <><BookMarked className="w-4 h-4" /> View Thesis (Digital Commons)</>
                                            ) : paper.isPoster ? (
                                                <><Image className="w-4 h-4" /> Read Poster</>
                                            ) : paper.isReport ? (
                                                <><FileText className="w-4 h-4" /> Read Report</>
                                            ) : (
                                                <><FileText className="w-4 h-4" /> Read Paper</>
                                            )}
                                        </a>
                                    </Button>
                                ) : (
                                    <Button variant="outline" size="sm" className="w-full bg-muted/50 text-muted-foreground cursor-not-allowed" disabled>
                                        <Clock className="w-4 h-4 mr-2" /> In Progress
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
