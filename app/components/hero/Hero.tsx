'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();

  // 스크롤에 따라 타이틀 위치와 크기 변경
  const titleY = useTransform(scrollY, [0, 300], [0, -400]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.3]);
  const titleOpacity = useTransform(scrollY, [0, 200, 300], [1, 0.5, 0]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 w-full max-w-7xl px-6 py-32">
        <div className="space-y-16">
          {/* Main Title with Scroll Animation */}
          <motion.div
            style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
            className="space-y-8"
          >
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-medium uppercase tracking-widest text-zinc-400 md:text-base"
              >
                Just do it. Here and now.
              </motion.p>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
              >
                디자인 감각으로
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
              >
                사용자 경험을 구현하는
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-light leading-tight tracking-tight text-zinc-300 md:text-6xl lg:text-7xl"
              >
                Creative Frontend Engineer.
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 text-lg text-zinc-300 md:text-xl"
              >
                <p>망설이지 않고 바로 만듭니다.</p>
                <p>지금 가능한 최선의 UX를 선택합니다.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid gap-12 pt-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Name & Role */}
            <div className="space-y-4 border-l-2 border-white pl-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                  Name
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  윤성빈
                </h2>
                <p className="text-lg text-zinc-400">Yun Seongbin</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                  Role
                </p>
                <p className="mt-2 text-lg text-white">
                  Creative Frontend Engineer
                </p>
                <p className="text-sm text-zinc-400">
                  디자인과 개발의 경계에서 가장 편안한 개발자
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 border-l-2 border-white pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Contact
              </p>
              <div className="space-y-3">
                <motion.a
                  href="tel:010.3475.1013"
                  className="group block text-white transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm text-zinc-400">Phone</span>
                  <p className="mt-1 text-lg font-medium group-hover:text-zinc-300">
                    010.3475.1013
                  </p>
                </motion.a>
                <motion.a
                  href="mailto:s30ngb1n@gmail.com"
                  className="group block text-white transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm text-zinc-400">Email</span>
                  <p className="mt-1 text-lg font-medium group-hover:text-zinc-300">
                    s30ngb1n@gmail.com
                  </p>
                </motion.a>
                <motion.a
                  href="https://github.com/seongbiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-white transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm text-zinc-400">GitHub</span>
                  <p className="mt-1 text-lg font-medium group-hover:text-zinc-300">
                    @seongbiny
                  </p>
                </motion.a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4 border-l-2 border-white pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'React Native', 'JavaScript'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              className="group relative overflow-hidden border-2 border-white px-8 py-4 text-lg font-medium text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">프로젝트 보기</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                프로젝트 보기
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="border-2 border-white px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              연락하기
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-400">Scroll</span>
          <div className="h-12 w-[1px] bg-zinc-600" />
        </motion.div>
      </motion.div>

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
