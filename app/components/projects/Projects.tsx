'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: '에코야 얼스',
    emoji: '♻️',
    description: '재활용품 수거 신청, 기부, 친환경 챌린지 참여, 커뮤니티 활동 등으로 환경 보호에 기여가 가능하며 친환경 관련 콘텐츠 제공하는 매거진 운영 다양한 이벤트 응모 가능 및 사용자들이 쉽게 친환경적인 삶 실천을 지원하는 서비스',
    tags: ['React', 'TypeScript', 'Atomic Design Pattern'],
    period: '2024.04 ~ 2024.07',
    team: 'BE 1명 / FE 2명 (기여도 10%)',
    achievements: [
      '팀내에서 BOS(Back Office System) 개발 담당',
      'custom dropdown 컴포넌트 개발',
      '이용약 단계별 사용을 이용한 filter 컴포넌트 개발',
    ],
    link: '#',
  },
  {
    title: 'KOKKOK Move',
    emoji: '🚕',
    description: '라오스에서 택시 호출부터 화물 운송 의뢰가 가능한 앱. 택시 호출 서비스인 Move, 도심 내 픽 서비스인 KOKKOK, 도심 간 물류 서비스인 Express까지 총 3가지 서비스 제공',
    tags: ['React Native', 'TypeScript', 'Redux'],
    period: '2023.07 ~ 2023.10',
    team: 'BE 2명 / FE 2명 (FE 기여도 40%)',
    achievements: [
      '다양한 역할의 사람들과 소통하며 기획부터 개발, 배포까지 다수의 앱 서비스 경험',
      '카메라, 사진첩, 위치 정보, 활동, 알림 등 앱 주석 투명성 사용 권한 설정 및 로직 구현',
      '기존 화물 운송만 있던 앱에 택시 서비스 추가',
    ],
    link: '#',
  },
  {
    title: 'KOKKOK Hero',
    emoji: '🚖',
    description: 'KOKKOK Move 이용자에게 모빌리티 서비스를 제공하는 택시, 화물 운송 기사 전용 앱',
    tags: ['React Native', 'TypeScript', '채팅서비스', '기사용_앱'],
    period: '2023.07 ~ 2023.10',
    team: 'BE 2명 / FE 2명 (FE 기여도 70%)',
    achievements: [
      '3개월 동안 기획, 디자인, 개발 프로세스를 거쳐 새로운 앱 성공적으로 런칭',
      '서버를 통하지 않고 클라이언트에서 DB(Cloud Firebase)에 접근하는 전반적인 과정을 경험',
      '프론트 기기로 블루투스 통신하여 송장 출력하는 기능 구현',
      '팀 내 CodePush 도입',
      '라이브러리를 이용한 실시간 위치 추적 기능 구현',
      'FCM을 활용한 앱 푸시 알림 기능 구현',
      'Socket 통신으로 실시간 채팅 기능 구현',
    ],
    link: '#',
  },
  {
    title: '트럭닥터',
    emoji: '👨‍🔧',
    description: '승용차 정비가 위주인 타 앱과 달리 트럭/화물차 정비 예약에 집중한 앱',
    tags: ['React Native', 'TypeScript', 'AWS S3', 'Push 알림'],
    period: '2022 ~ 2023',
    team: 'BE2명 / FE 1명 (FE 기여도 100%)',
    achievements: [
      '안드로이드 APK를 추출하여 실기기에서 테스트 및 iOS testFlight로 테스트 및 배포 경험',
      '해당 게시글에 대해 유저 정보를 포함한 앱 주석 투명성 댓글 작성, 본인이 작성한 댓글 삭제 기능 구현',
      '게시글 신고, 유저 신고, 댓글 신고 기능 구현',
      'JavaScript → TypeScript 마이그레이션',
      '커뮤니티 CRUD 기능 리팩토링',
    ],
    link: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-white py-32"
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
                      {String(index + 1).padStart(2, '0')}
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
                    {project.achievements.slice(0, 3).map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
                animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-8 top-1/2 -translate-y-1/2"
              >
                <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
