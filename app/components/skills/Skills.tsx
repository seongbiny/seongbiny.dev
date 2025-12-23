'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'MAIN',
    items: ['React', 'TypeScript', 'JavaScript', 'React Native'],
  },
  {
    category: 'EXPERIENCE',
    items: ['React Query', 'Localization / i18n', 'Admin UI', 'Tizen OS (TV App)', 'Firebase / Socket.io', 'PixiJS / Matter.js'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-bold text-black md:text-7xl lg:text-8xl"
            >
              SKILLS
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-zinc-600"
          >
            특정 기술 하나보다 "디자인과 요구사항을 구현하는 능력"에 더 집중합니다.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-px bg-black md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group bg-white p-12 transition-all duration-500 hover:bg-black"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-black transition-colors group-hover:bg-white" />
                <h3 className="text-xl font-bold text-black transition-colors group-hover:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-3 text-lg text-zinc-700 transition-colors group-hover:text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black transition-colors group-hover:bg-white" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
