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
      className="relative bg-white py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                What I Do
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                모던 웹 기술을 활용하여 반응형이고 성능이 뛰어난 웹 애플리케이션을 개발합니다.
                React, Next.js를 주로 사용하며, 사용자 인터랙션에 중점을 둔 UI/UX 구현을
                즐깁니다.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                My Approach
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                깔끔하고 유지보수 가능한 코드를 작성하는 것을 지향합니다.
                성능 최적화와 접근성을 고려하며, 최신 웹 표준을 따르는 개발을 추구합니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Interests
              </h3>
              <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">▸</span>
                  인터랙티브 웹 애니메이션
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">▸</span>
                  성능 최적화
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">▸</span>
                  웹 접근성
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">▸</span>
                  타입 안정성
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Currently Learning
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                최신 프론트엔드 트렌드를 학습하고, 더 나은 개발자가 되기 위해
                지속적으로 성장하고 있습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
