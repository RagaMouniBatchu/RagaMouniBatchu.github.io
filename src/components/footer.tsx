"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t bg-card/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                <div className="flex justify-center gap-6 mb-8">
                    <a href="mailto:ragamouni2000@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all" title="Email">
                        <Mail className="w-6 h-6" />
                        <span className="sr-only">Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ragamounibatchu/" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all" title="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://github.com/RagaMouniBatchu" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all" title="GitHub">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="tel:4848045006" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all" title="Phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <span className="sr-only">Phone</span>
                    </a>
                </div>
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Raga Mouni Batchu. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
