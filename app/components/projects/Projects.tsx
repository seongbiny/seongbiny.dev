"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Amorepacific MakeOn TV",
    emoji: "📺",
    description:
      "아모레퍼시픽의 스마트 TV 전용 뷰티 서비스 MakeOn TV 앱 개발 프로젝트입니다. Tizen OS 환경에서 동작하는 TV 앱으로, 리모컨 조작, 포커스 네비게이션, 디바이스 제약을 고려한 UX 설계가 핵심이었습니다.",
    tags: [
      "React",
      "TypeScript",
      "React Query",
      "Tizen OS",
      "HashRouter",
      "Localization",
    ],
    period: "2025.08 - 2025.10",
    team: "Frontend Developer @ Genesisnest",
    achievements: [
      "전체 기능 중 60% 이상 화면 및 로직 직접 구현",
      "스플래시 → 업데이트/점검 → 로그인 → 디바이스 선택 → 홈/리포트/마이/상품 상세까지 전체 사용자 진입 플로우 설계·구현",
      "TV 리모컨 기반 포커스 네비게이션 시스템 구현",
      "HashRouter 전환, 파일 스킴·위젯 구조 등 Tizen OS 제약 대응",
      "구버전 Tizen 에뮬레이터 및 실단말 QA 수행",
    ],
    link: "#",
  },
  {
    title: "Hyundai / Kia / Genesis Service Admin & App",
    emoji: "🚗",
    description:
      "현대·기아·제네시스 서비스 운영을 위한 Admin(BO)과 사용자 대상 App(FO)을 동시에 개발·운영한 실서비스 프로젝트입니다.",
    tags: ["React", "TypeScript", "React Query", "Admin UI"],
    period: "2025.05 - 2025.08 / 2025.10 - 현재",
    team: "Frontend Developer @ Genesisnest",
    achievements: [
      "Admin 배너·팝업·SNS 관리, 앱 이용 가이드, 브랜드 스토리 관리",
      "운영자 UX 개선 - 검색·필터·전시 상태 유지 로직 개선",
      "현대 앱 쿠폰함 카테고리 통합",
      "기아 일렉링크 QR 포맷 변경 대응 (FE 적용 + 실단말 테스트)",
    ],
    link: "#",
  },
  {
    title: "KOKKOK Move",
    emoji: "🚕",
    description:
      "라오스 기반 모빌리티 플랫폼으로, 택시 호출·퀵 서비스·물류(Express) 3개 서비스를 통합한 승객용 앱입니다.",
    tags: ["React Native", "TypeScript", "Redux", "CodePush", "FCM"],
    period: "2022.07 - 2023.10",
    team: "Frontend Developer @ Coconutsilo",
    achievements: [
      "카메라·사진첩·위치·알림 등 권한 및 추적 플로우 설계",
      "Redux 기반 전역 상태 관리",
      "CodePush 도입으로 긴급 배포 대응",
      "광고 배너 캐러셀 리팩토링으로 운영 편의성 개선",
    ],
    link: "#",
  },
  {
    title: "KOKKOK Hero",
    emoji: "🚖",
    description:
      "택시/화물 기사 전용 앱으로, 실시간 위치 추적과 채팅을 중심으로 한 기사 업무 지원 서비스입니다.",
    tags: ["React Native", "TypeScript", "Firebase", "Socket.io", "i18n"],
    period: "2022.07 - 2023.10",
    team: "Lead Frontend Developer @ Coconutsilo (기여도 약 70%)",
    achievements: [
      "Cloud Firebase DB에 클라이언트 직접 접근 구조 경험",
      "실시간 위치 추적 기능 구현",
      "Socket.io 기반 채팅 기능 구현",
      "다국어 자동 번역 및 프롬프트 처리",
      "블루투스 송장 출력 기능 개발",
    ],
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="relative bg-white py-32">
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
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-bold text-black md:text-7xl lg:text-8xl"
            >
              PROJECTS
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-zinc-600"
          >
            제가 작업한 프로젝트들을 소개합니다.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative cursor-pointer border-b border-black transition-all duration-500"
            >
              <div className="grid gap-8 py-12 md:grid-cols-12">
                {/* Left - Number & Title */}
                <div className="md:col-span-5">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-bold text-zinc-300 transition-all duration-500 group-hover:text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-4">
                        <motion.span
                          animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-4xl"
                        >
                          {project.emoji}
                        </motion.span>
                        <h3 className="text-3xl font-bold text-black">
                          {project.title}
                        </h3>
                      </div>
                      <div className="space-y-2 text-sm text-zinc-600">
                        <p>{project.period}</p>
                        <p>{project.team}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Description */}
                <div className="md:col-span-7">
                  <p className="mb-6 text-lg leading-relaxed text-zinc-700">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6 space-y-2">
                    {project.achievements
                      .slice(0, 3)
                      .map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            hoveredIndex === index
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-zinc-600"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-black" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black px-3 py-1 text-xs font-medium text-black transition-colors group-hover:bg-black group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Background */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 -z-10 origin-left bg-zinc-50"
              />

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  x: hoveredIndex === index ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className="absolute right-8 top-1/2 -translate-y-1/2"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
