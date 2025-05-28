'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/assets/assets';


const Experience = () => {
    return (
        <section
            id="experience"
            className="w-11/12 max-w-4xl mx-auto py-20 flex flex-col gap-10 text-center"
        >
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-Ovo mb-4"
            >
                🧠 My Experience
            </motion.h2>

            {/* Timeline List */}
            <div className="relative border-l border-indigo-400 dark:border-indigo-600 ml-4">
                {experienceData.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="ml-6 mb-10 relative"
                    >
                        {/* Dot */}
                        <span className="absolute left-[-1.1rem] top-2 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900 shadow-md" />

                        {/* Content Box */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                                {exp.role}
                            </h3>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {exp.company}
                            </p>
                            <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-3">
                                {exp.period}
                            </p>
                            <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed">
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
