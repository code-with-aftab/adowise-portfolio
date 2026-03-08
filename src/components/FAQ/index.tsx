"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const FAQItem = ({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}) => {
    return (
        <div className="mb-4 rounded-xl border border-gray-200 bg-white shadow-sm transition-all dark:border-white/10 dark:bg-gray-dark">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
                <span className="text-lg font-bold text-black dark:text-white sm:text-xl">
                    {question}
                </span>
                <span
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                >
                    <ChevronDown size={20} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-gray-100 px-6 py-5 text-base leading-relaxed text-body-color dark:border-white/5 sm:text-lg">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = ({ messages }: { messages: any }) => {
    const t = messages?.FAQ || {};
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: t.q1, a: t.a1 },
        { q: t.q2, a: t.a2 },
        { q: t.q3, a: t.a3 },
        { q: t.q4, a: t.a4 },
        { q: t.q5, a: t.a5 },
    ];

    return (
        <section id="faq" className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
            <div className="container">
                <SectionTitle
                    title={t.title || "Frequently Asked Questions"}
                    paragraph={t.subtitle || "Everything you need to know about our services and processes."}
                    center
                />

                <div className="mx-auto mt-12 max-w-[800px]">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>

            {/* Background glow effects to match Hero */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </section>
    );
};

export default FAQ;
