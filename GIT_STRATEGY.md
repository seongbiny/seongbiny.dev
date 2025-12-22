# 🌿 Git 브랜치 전략

## 브랜치 구조
```
main                          # 프로덕션 배포
├── phase/1-setup             # Phase 1: 프로젝트 초기 설정 & 기본 구조
├── phase/2-hero-about        # Phase 2: Hero & About 섹션
├── phase/3-projects          # Phase 3: Projects 섹션
├── phase/4-skills-contact    # Phase 4: Skills & Contact 섹션
├── phase/5-interactions      # Phase 5: 인터랙션 & 애니메이션 개선
├── phase/6-theme             # Phase 6: 다크/라이트 모드 토글
├── phase/7-optimization      # Phase 7: 성능 최적화 & SEO
└── phase/8-deploy            # Phase 8: 배포 & 도메인 설정
```

## 브랜치 작업 흐름

### 새 phase 시작
```bash
git checkout main
git pull origin main
git checkout -b phase/1-setup
```

### 작업 완료 후
```bash
git checkout main
git merge phase/1-setup
git push origin main
```

### Feature 브랜치 (선택사항)
특정 기능이 복잡한 경우 phase 하위에 feature 브랜치 생성 가능
```bash
git checkout phase/2-hero-about
git checkout -b phase/2-hero-about/hero-animation
```

---

# 📝 Git 커밋 규칙 (Gitmoji + 한국어)

## 커밋 메시지 형식
```
<gitmoji> <제목>

<본문 (선택)>
```

## 자주 사용하는 Gitmoji

| Gitmoji | 코드 | 용도 |
|---------|------|------|
| 🎉 | `:tada:` | 프로젝트 시작 |
| ✨ | `:sparkles:` | 새 기능/섹션 추가 |
| 💄 | `:lipstick:` | UI/스타일 수정 |
| ✏️ | `:pencil2:` | 텍스트/콘텐츠 수정 |
| 🎨 | `:art:` | 코드 구조/포맷 개선 |
| ♻️ | `:recycle:` | 코드 리팩토링 |
| ⚡ | `:zap:` | 성능 개선 |
| 🐛 | `:bug:` | 버그 수정 |
| 🔧 | `:wrench:` | 설정 파일 수정 |
| 📝 | `:memo:` | 문서 추가/수정 |
| ➕ | `:heavy_plus_sign:` | 의존성 추가 |
| ➖ | `:heavy_minus_sign:` | 의존성 제거 |
| 🚀 | `:rocket:` | 배포 |
| 🌐 | `:globe_with_meridians:` | 다국어/번역 |
| 🎭 | `:performing_arts:` | 애니메이션 추가/수정 |
| 🔥 | `:fire:` | 코드/파일 삭제 |
| 🚚 | `:truck:` | 파일/경로 이동 |
| 📱 | `:iphone:` | 반응형 디자인 개선 |
| ♿ | `:wheelchair:` | 접근성 개선 |
| 🔀 | `:twisted_rightwards_arrows:` | 브랜치 병합 |

---

## 커밋 메시지 예시

### 프로젝트 설정
```bash
git commit -m "🎉 Next.js 15 프로젝트 초기 설정"
git commit -m "➕ Framer Motion 및 Tailwind CSS 설정"
git commit -m "🔧 TypeScript 및 ESLint 설정"
```

### 섹션 개발
```bash
git commit -m "✨ Hero 섹션 기본 레이아웃 구현"
git commit -m "💄 Hero 섹션 그라데이션 배경 추가"
git commit -m "🎭 Hero 섹션 페이드인 애니메이션 구현"
git commit -m "✨ About 섹션 카드 레이아웃 추가"
git commit -m "✨ Projects 섹션 그리드 구조 구현"
```

### 스타일 및 UI
```bash
git commit -m "💄 전체 색상 팔레트 개선"
git commit -m "📱 모바일 반응형 레이아웃 수정"
git commit -m "💄 버튼 호버 애니메이션 추가"
```

### 인터랙션 및 애니메이션
```bash
git commit -m "🎭 스크롤 트리거 애니메이션 추가"
git commit -m "🎭 프로젝트 카드 호버 인터랙션 구현"
git commit -m "⚡ 애니메이션 성능 최적화"
```

### 콘텐츠 수정
```bash
git commit -m "✏️ About 섹션 자기소개 내용 수정"
git commit -m "✏️ 프로젝트 설명 및 링크 업데이트"
git commit -m "✏️ Skills 목록 업데이트"
```

### 기능 추가
```bash
git commit -m "✨ 다크모드 토글 기능 추가"
git commit -m "✨ 부드러운 스크롤 네비게이션 구현"
git commit -m "✨ Contact 폼 유효성 검사 추가"
```

### 버그 수정
```bash
git commit -m "🐛 다크모드 전환 시 깜빡임 현상 수정"
git commit -m "🐛 모바일에서 네비게이션 메뉴 버그 수정"
git commit -m "🐛 이미지 로딩 오류 수정"
```

### 리팩토링 및 최적화
```bash
git commit -m "♻️ 공통 애니메이션 훅으로 추출"
git commit -m "♻️ 컴포넌트 구조 개선"
git commit -m "⚡ 이미지 최적화 및 lazy loading 적용"
git commit -m "⚡ 번들 크기 최적화"
```

### 접근성 및 SEO
```bash
git commit -m "♿ 키보드 네비게이션 접근성 개선"
git commit -m "♿ alt 텍스트 및 aria-label 추가"
git commit -m "📝 SEO 메타태그 추가"
git commit -m "📝 sitemap 및 robots.txt 생성"
```

### 배포
```bash
git commit -m "🚀 Vercel 배포 설정"
git commit -m "🚀 v1.0.0 프로덕션 배포"
git commit -m "🔧 환경변수 설정"
```

---

## Phase별 첫 커밋 예시

```bash
# Phase 1: 프로젝트 초기 설정
git commit -m "🎉 Phase 1: Next.js 15 프로젝트 초기 설정"

# Phase 2: Hero & About 섹션
git commit -m "✨ Phase 2: Hero 및 About 섹션 개발 시작"

# Phase 3: Projects 섹션
git commit -m "✨ Phase 3: Projects 섹션 구현 시작"

# Phase 4: Skills & Contact 섹션
git commit -m "✨ Phase 4: Skills 및 Contact 섹션 개발 시작"

# Phase 5: 인터랙션 & 애니메이션
git commit -m "🎭 Phase 5: 인터랙션 및 애니메이션 개선 시작"

# Phase 6: 테마 시스템
git commit -m "✨ Phase 6: 다크/라이트 모드 시스템 구현 시작"

# Phase 7: 최적화
git commit -m "⚡ Phase 7: 성능 최적화 및 SEO 개선 시작"

# Phase 8: 배포
git commit -m "🚀 Phase 8: 배포 및 도메인 설정 시작"
```

---

## 커밋 작성 팁

1. **제목은 50자 이내**로 간결하게
2. **현재형 동사** 사용 (추가, 수정, 구현)
3. **무엇을 왜 했는지** 명확하게
4. 관련 없는 변경사항은 **별도 커밋**으로 분리
5. 의미있는 단위로 커밋 (너무 작거나 크지 않게)

## 브랜치 병합 시 커밋 메시지

```bash
git merge phase/1-setup -m "🔀 Phase 1: 프로젝트 초기 설정 완료"
git merge phase/2-hero-about -m "🔀 Phase 2: Hero 및 About 섹션 완료"
```
