'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: {
    title: string;
    emoji: string;
    period: string;
    team: string;
    overview: string;
    role: string[];
    achievements: string[];
    problems?: string[];
    improvements?: string[];
    tags: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center border-2 border-black bg-white transition-all hover:bg-black hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 flex items-center gap-4"
                  >
                    <span className="text-6xl">{project.emoji}</span>
                    <div>
                      <h2 className="mb-2 text-4xl font-bold text-black md:text-5xl">
                        {project.title}
                      </h2>
                      <p className="text-lg text-zinc-600">{project.team}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-4 border-l-4 border-black pl-6"
                  >
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                        Period
                      </p>
                      <p className="text-lg font-semibold text-black">{project.period}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Overview */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-10"
                >
                  <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-black">
                    <div className="h-px w-12 bg-black" />
                    프로젝트 개요
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    {project.overview}
                  </p>
                </motion.section>

                {/* Role */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-10"
                >
                  <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-black">
                    <div className="h-px w-12 bg-black" />
                    담당 역할
                  </h3>
                  <ul className="space-y-3">
                    {project.role.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg text-zinc-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>

                {/* Achievements */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-10"
                >
                  <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-black">
                    <div className="h-px w-12 bg-black" />
                    주요 기여
                  </h3>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg text-zinc-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>

                {/* Problems (if exists) */}
                {project.problems && project.problems.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-10"
                  >
                    <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-black">
                      <div className="h-px w-12 bg-black" />
                      기존 문제점
                    </h3>
                    <ul className="space-y-3">
                      {project.problems.map((problem, index) => (
                        <li key={index} className="flex items-start gap-3 text-lg text-zinc-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                )}

                {/* Improvements (if exists) */}
                {project.improvements && project.improvements.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mb-10"
                  >
                    <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-black">
                      <div className="h-px w-12 bg-black" />
                      개선 내용
                    </h3>
                    <ul className="space-y-3">
                      {project.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-3 text-lg text-zinc-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                )}

                {/* Tech Stack */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h3 className="mb-4 flex items-center gap-4 text-2xl font-bold text-black">
                    <div className="h-px w-12 bg-black" />
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                        className="border-2 border-black px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.section>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
