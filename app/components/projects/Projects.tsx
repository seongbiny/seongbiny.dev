'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Project One',
    description: '프로젝트 설명을 여기에 작성해주세요. 어떤 기술을 사용했고, 어떤 문제를 해결했는지 설명합니다.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    image: '/project1.jpg',
  },
  {
    title: 'Project Two',
    description: '프로젝트 설명을 여기에 작성해주세요. 사용자 경험 개선이나 성능 최적화 등의 성과를 강조합니다.',
    tags: ['React', 'Framer Motion', 'Node.js'],
    link: '#',
    image: '/project2.jpg',
  },
  {
    title: 'Project Three',
    description: '프로젝트 설명을 여기에 작성해주세요. 팀 협업이나 개인적인 기여도를 언급할 수 있습니다.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    link: '#',
    image: '/project3.jpg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            제가 작업한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-950"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white opacity-50">
                  {project.title}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <span className="font-medium">View Project</span>
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
