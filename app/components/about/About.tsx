'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black py-32"
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
              className="text-6xl font-bold text-white md:text-7xl lg:text-8xl"
            >
              ABOUT ME
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-zinc-400"
          >
            사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
          </motion.p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Career & Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-16"
          >
            {/* Career */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">CAREER</h3>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group relative border-l-2 border-white pl-8 transition-all duration-300 hover:border-zinc-400"
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-white bg-black transition-all duration-300 group-hover:scale-125" />
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
                    2024.10 - Present
                  </p>
                  <h4 className="mb-2 text-2xl font-bold text-white">
                    제네시스네스트
                  </h4>
                  <p className="mb-4 text-lg text-zinc-300">
                    프론트엔드 개발자
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-white px-3 py-1 text-xs text-white">React</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="group relative border-l-2 border-zinc-700 pl-8 transition-all duration-300 hover:border-zinc-400"
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-zinc-700 bg-black transition-all duration-300 group-hover:scale-125" />
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
                    2022.07 - 2023.11
                  </p>
                  <h4 className="mb-2 text-2xl font-bold text-white">
                    코코넛사일로
                  </h4>
                  <p className="mb-2 text-lg text-zinc-300">
                    프론트엔드 개발자
                  </p>
                  <p className="mb-4 text-sm text-zinc-500">
                    자사 서비스 앱 개발
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-zinc-700 px-3 py-1 text-xs text-zinc-400">React Native</span>
                    <span className="border border-zinc-700 px-3 py-1 text-xs text-zinc-400">TypeScript</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">EDUCATION</h3>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-1"
                >
                  <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                    2021.07 - 2022.07
                  </p>
                  <h4 className="text-xl font-bold text-white">
                    SSAFY 6기 수료
                  </h4>
                  <p className="text-zinc-400">삼성 청년 SW 아카데미</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="space-y-1"
                >
                  <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                    2019 - 2021.07
                  </p>
                  <h4 className="text-xl font-bold text-white">
                    서울과학기술대학교
                  </h4>
                  <p className="text-zinc-400">전자IT미디어공학과 학사 졸업</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills & Goals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-16"
          >
            {/* What I Do */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">WHAT I DO</h3>
              </div>
              <p className="text-lg leading-relaxed text-zinc-300">
                React와 React Native를 활용하여 웹과 모바일 애플리케이션을 개발합니다.
                사용자 경험을 최우선으로 생각하며, 인터랙티브하고 성능이 뛰어난
                UI/UX 구현에 집중합니다.
              </p>
            </div>

            {/* Skills */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">SKILLS</h3>
              </div>
              <div className="space-y-6">
                {[
                  { category: 'Frontend', skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript'] },
                  { category: 'State Management', skills: ['Redux', 'Context API'] },
                  { category: 'Styling', skills: ['Tailwind CSS', 'CSS-in-JS'] },
                  { category: 'Tools', skills: ['Git', 'AWS S3', 'Firebase'] },
                ].map((group, index) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-white px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">GOALS</h3>
              </div>
              <p className="text-lg leading-relaxed text-zinc-300">
                프론트엔드에서 시작하여 <span className="font-bold text-white">풀스택 개발자로 성장</span>하는 것이 목표입니다.
                백엔드 기술을 학습하며, 전체 시스템을 이해하고 구축할 수 있는
                개발자가 되기 위해 노력하고 있습니다.
              </p>
            </div>

            {/* Interests */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">INTERESTS</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '인터랙티브 웹 애니메이션',
                  '성능 최적화',
                  '크로스 플랫폼 개발',
                  '타입 안정성',
                ].map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3 text-lg text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}
