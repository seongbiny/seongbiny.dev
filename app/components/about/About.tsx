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
            디자인과 개발의 경계에서 가장 편안한 개발자입니다.
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
            {/* What I Care About */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">WHAT I CARE ABOUT</h3>
              </div>
              <div className="space-y-6 text-zinc-300">
                <div className="border-l-2 border-white pl-6">
                  <p className="mb-3 text-lg font-semibold text-white">Pixel-perfect UI</p>
                  <p className="text-base leading-relaxed">Figma 기준과 실제 결과물의 차이를 최소화</p>
                </div>
                <div className="border-l-2 border-white pl-6">
                  <p className="mb-3 text-lg font-semibold text-white">UX 중심 사고</p>
                  <p className="text-base leading-relaxed">"이 기능을 사용자가 왜, 언제, 어떻게 쓸까?"</p>
                </div>
                <div className="border-l-2 border-white pl-6">
                  <p className="mb-3 text-lg font-semibold text-white">실행력</p>
                  <p className="text-base leading-relaxed">아이디어 → 프로토타입 → 개선의 빠른 사이클</p>
                </div>
                <div className="border-l-2 border-white pl-6">
                  <p className="mb-3 text-lg font-semibold text-white">신뢰감 있는 결과물</p>
                  <p className="text-base leading-relaxed">QA, 실단말 테스트까지 책임지는 태도</p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">PHILOSOPHY</h3>
              </div>
              <div className="space-y-6 text-zinc-300">
                <div className="flex items-start gap-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      디자이너의 의도를 "대충 비슷하게" 구현하지 않습니다.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-white">
                      → <strong>최대한 동일하게</strong>, 그리고 <strong>사용자 경험이 더 좋아지도록</strong> 만듭니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      화면을 만드는 개발이 아니라
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-white">
                      <strong>사용자가 실제로 겪는 흐름과 감각</strong>을 설계합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      고민이 길어지면 실행력이 떨어진다고 믿습니다.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-white">
                      그래서 항상 <strong>Here and now</strong>, 지금 만들 수 있는 결과부터 만듭니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Style */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">WORK STYLE</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '망설이기보다 일단 만들고, 빠르게 개선',
                  '디자이너와의 커뮤니케이션을 개발의 일부로 생각',
                  '"이게 사용자 입장에서 편한가?"를 항상 먼저 질문',
                ].map((style, index) => (
                  <motion.li
                    key={style}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3 text-lg text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {style}
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
