'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frontend
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-12 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            인터랙티브하고 아름다운 웹 경험을 만드는 프론트엔드 개발자입니다.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900"
            >
              <span className="relative z-10">프로젝트 보기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-zinc-900 px-8 py-4 font-medium text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
            >
              연락하기
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Scroll</span>
            <svg
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
}
