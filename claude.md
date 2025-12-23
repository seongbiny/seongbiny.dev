# 윤성빈 포트폴리오 웹사이트

## 프로젝트 개요

프론트엔드 개발자 윤성빈의 개인 포트폴리오 웹사이트입니다. Black & White 컬러 톤의 미니멀하고 세련된 디자인과 풍부한 인터랙션 및 스크롤 애니메이션을 특징으로 합니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Font**: Geist Sans, Geist Mono

## 프로젝트 구조

```
seongbiny.dev/
├── app/
│   ├── components/
│   │   ├── hero/
│   │   │   └── Hero.tsx          # 메인 히어로 섹션
│   │   ├── about/
│   │   │   └── About.tsx         # About Me 섹션
│   │   ├── projects/
│   │   │   └── Projects.tsx      # 프로젝트 섹션
│   │   ├── skills/
│   │   │   └── Skills.tsx        # 기술 스택 섹션
│   │   ├── contact/
│   │   │   └── Contact.tsx       # 연락처 섹션
│   │   └── navbar/
│   │       └── Navbar.tsx        # 내비게이션 바
│   ├── layout.tsx                # 루트 레이아웃
│   ├── page.tsx                  # 메인 페이지
│   └── globals.css               # 전역 스타일
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

## 주요 기능

### 1. Hero 섹션
- 인상적인 타이포그래피
- "Just do it. Here and now." 모토
- 스크롤에 반응하는 타이틀 애니메이션
- 연락처 및 기술 스택 미리보기

### 2. About 섹션
- 경력 타임라인 (제네시스네스트, 코코넛사일로)
- 학력 정보 (SSAFY, 서울과학기술대학교)
- What I Care About (Pixel-perfect UI, UX 중심 사고, 실행력, 신뢰감)
- Philosophy (디자인 구현 철학)
- Work Style (업무 방식)

### 3. Projects 섹션
- 4개의 주요 프로젝트 소개
  - **Amorepacific MakeOn TV**: Tizen OS 기반 스마트 TV 앱
  - **Hyundai/Kia/Genesis Service**: Admin & App 개발
  - **KOKKOK Move**: 라오스 모빌리티 플랫폼
  - **KOKKOK Hero**: 기사 전용 앱
- 인터랙티브 카드 UI (호버 효과)
- 각 프로젝트별 상세 정보 (기간, 역할, 주요 기여, 기술 스택)

### 4. Skills 섹션
- Main: React, TypeScript, JavaScript, React Native
- Experience: React Query, Localization/i18n, Admin UI, Tizen OS, Firebase/Socket.io, PixiJS/Matter.js
- 호버 시 배경 색상 전환 효과

### 5. Contact 섹션
- 이메일, 전화, GitHub 링크
- CTA 버튼
- Footer

## 디자인 컨셉

### 컬러 팔레트
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Gray Scale**:
  - zinc-100 ~ zinc-900 (다양한 회색 톤)

### 타이포그래피
- **Heading**: Geist Sans (Bold, 크고 임팩트 있는 사이즈)
- **Body**: Geist Sans (Light, Medium)
- **Code**: Geist Mono

### 애니메이션 원칙
- **부드러운 전환**: ease-in-out, cubic-bezier 활용
- **스크롤 기반 애니메이션**: Framer Motion의 useScroll, useTransform
- **시차 효과**: 요소별 delay를 다르게 설정
- **호버 효과**: scale, color 변화

## 반응형 디자인

- **Mobile**: 기본 (< 768px)
- **Tablet**: md (768px ~)
- **Desktop**: lg (1024px ~)

모든 섹션은 모바일 우선 디자인으로 제작되었으며, Tailwind의 반응형 클래스를 활용합니다.

## 성능 최적화

- Next.js 15의 최적화된 이미지 처리
- Framer Motion의 레이아웃 애니메이션
- useInView를 통한 뷰포트 기반 애니메이션 (once: true로 중복 실행 방지)

## 개발 가이드

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인 가능

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 배포

Vercel을 통한 배포를 권장합니다.

```bash
vercel
```

## 주요 개발 철학

이 포트폴리오는 개발자 윤성빈의 개발 철학을 반영합니다:

1. **Pixel-perfect UI**: Figma 디자인과 실제 구현의 차이 최소화
2. **UX 중심 사고**: 사용자 관점에서 기능 설계
3. **실행력**: 빠른 프로토타이핑과 개선 사이클
4. **신뢰감**: QA 및 테스트까지 책임

## 연락처

- **Email**: s30ngb1n@gmail.com
- **GitHub**: [@seongbiny](https://github.com/seongbiny)
- **Phone**: 010-3475-1013

---

**Just do it. Here and now.**

© 2025 Yun Seongbin. All rights reserved.
