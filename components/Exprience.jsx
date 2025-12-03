'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/assets/assets';

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-11/12 max-w-5xl mx-auto py-24 flex flex-col gap-16"
        >
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-semibold text-center tracking-tight"
            >
                🧠 Professional Experience
            </motion.h2>

            {/* Timeline */}
            <div className="relative ml-4 border-l border-indigo-400/40 dark:border-indigo-600/40">

                {experienceData.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="ml-8 mb-12 relative group"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute left-[-2.05rem] top-4 w-5 h-5 bg-indigo-500/90 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-110 transition-transform" />

                        {/* Card */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-7 rounded-xl shadow-lg border border-gray-200/60 dark:border-gray-700/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            
                            {/* Role */}
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {exp.role}
                            </h3>

                            {/* Company */}
                            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                                {exp.company}
                            </p>

                            {/* Period */}
                            <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide mt-1 mb-3">
                                {exp.period}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-[15px]">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
