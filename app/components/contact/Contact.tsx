'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactLinks = [
    {
      label: 'Email',
      value: 's30ngb1n@gmail.com',
      href: 'mailto:s30ngb1n@gmail.com',
    },
    {
      label: 'Phone',
      value: '010.3475.1013',
      href: 'tel:010.3475.1013',
    },
    {
      label: 'GitHub',
      value: '@seongbiny',
      href: 'https://github.com/seongbiny',
    },
  ];

  return (
    <section
      id="contact"
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
              CONTACT
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-zinc-400"
          >
            새로운 기회나 협업에 관심이 있으시다면 언제든 연락주세요.
          </motion.p>
        </motion.div>

        {/* Contact Info */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group block border-l-2 border-white pl-8 transition-all duration-300 hover:border-zinc-400"
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
                  {link.label}
                </p>
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-zinc-300">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-white" />
                <h3 className="text-2xl font-bold text-white">LET'S WORK TOGETHER</h3>
              </div>
              <p className="text-lg leading-relaxed text-zinc-300">
                새로운 프로젝트나 기회에 대해 이야기 나누고 싶으시다면,
                이메일이나 전화로 편하게 연락주세요.
              </p>
            </div>

            <motion.a
              href="mailto:s30ngb1n@gmail.com"
              className="group relative inline-flex w-fit items-center gap-4 overflow-hidden border-2 border-white px-8 py-4 text-lg font-medium text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Email</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 z-10 flex items-center justify-start px-8 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Send Email
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 border-t border-white/20 pt-12"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Yun Seongbin. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/seongbiny"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                GitHub
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href="mailto:s30ngb1n@gmail.com"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>
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
