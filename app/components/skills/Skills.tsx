'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5/CSS3',
      'Tailwind CSS',
      'styled-components',
    ],
  },
  {
    category: 'Animation & Motion',
    items: ['Framer Motion', 'GSAP', 'CSS Animations'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'GitHub', 'Figma', 'Webpack', 'Vite', 'npm/yarn'],
  },
  {
    category: 'Currently Learning',
    items: ['Three.js', 'WebGL', 'Web Performance Optimization'],
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 - Present',
    description: '주요 업무 내용과 성과를 작성해주세요.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Previous Company',
    period: '2021 - 2023',
    description: '이전 경력사항을 작성해주세요.',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-white py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Skills & Experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            제가 사용하는 기술과 경험을 소개합니다.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h4 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {skill.category}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mx-auto mt-24 max-w-7xl">
          <h3 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative border-l-2 border-zinc-200 pl-8 dark:border-zinc-800"
              >
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {exp.title}
                  </h4>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">
                  {exp.company}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
