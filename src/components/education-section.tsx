"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const education = [
    {
        school: "West Chester University of Pennsylvania",
        degree: "Master of Science in Computer Science",
        date: "01/2025 – 05/2026",
        gpa: "GPA: 4.0/4.0",
        location: "West Chester, PA"
    },
    {
        school: "Shri Vishnu Engineering College for Women",
        degree: "Bachelor of Technology in Computer Science",
        date: "06/2015 – 05/2019",
        gpa: "CGPA: 9.0/10",
        location: "India"
    }
];

const certifications = [
    "AWS Certified AI Practitioner",
    "Generative AI with Large Language Models (Coursera)",
    "Introduction to Model Context Protocol (Anthropic)",
    "Introduction to Agent Skills (Anthropic)",
    "ConsenSys Certified Ethereum Blockchain Developer",
    "Google AI Agents Intensive Course (2025)",
    "AWS SHE Builds Mentorship Program (2025)",
    "NPTEL C++ Certification"
];

const awards = [
    "Starlight Award (4 consecutive releases) - athenahealth",
    "Winner, ConsenSys India Blockchain Hackathon 2018",
    "University Innovation Fellow - Stanford University",
    "Google Developer Student Clubs Lead"
];

export function EducationSection() {
    return (
        <section id="education" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                            <GraduationCap className="h-8 w-8 text-primary" /> Education
                        </h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <Card key={index} className="bg-card/50 backdrop-blur-sm border-l-4 border-l-primary">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-1">
                                            <CardTitle className="text-xl">{edu.school}</CardTitle>
                                            <Badge variant="outline">{edu.date}</Badge>
                                        </div>
                                        <div className="text-primary font-medium">{edu.degree}</div>
                                        <div className="text-sm text-muted-foreground flex justify-between mt-2">
                                            <span>{edu.location}</span>
                                            <span className="font-semibold">{edu.gpa}</span>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications & Awards Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                            <Award className="h-8 w-8 text-primary" /> Achievements
                        </h2>
                        <Card className="bg-card/50 backdrop-blur-sm">
                            <CardContent className="pt-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-primary">Certifications & Training</h3>
                                    <ul className="space-y-2">
                                        {certifications.map((cert, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {cert}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-primary">Honors & Awards</h3>
                                    <ul className="space-y-2">
                                        {awards.map((award, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {award}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
