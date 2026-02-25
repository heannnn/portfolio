# 안하은 | Frontend Developer Portfolio

5년간 금융 시스템 환경에서 실무를 경험한 프론트엔드 개발자의 포트폴리오 사이트입니다.

**Live →** https://heannnn-frontend.vercel.app

---

## Pages

| 페이지 | 설명 |
|--------|------|
| **Home** | 소개 · 핵심 역량 · 경력 요약 |
| **About** | 기술 스택 · 커리어 타임라인 |
| **Projects** | 프로젝트 목록 · 카테고리 필터 · 상세 모달 |
| **Contact** | 연락처 · 링크 모음 |

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** (다크모드)
- **Lucide React**

---

## Design

- 다크모드 지원 (`next-themes` + CSS 변수 기반 시멘틱 컬러 토큰)
- 반응형 레이아웃 (모바일 / 태블릿 / 데스크탑)
- 시멘틱 컬러 토큰: `text-fg` · `bg-base` · `bg-surface` · `border-line` 등

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── about/            # About
│   ├── projects/         # Projects
│   ├── contact/          # Contact
│   ├── layout.tsx
│   └── globals.css       # 시멘틱 컬러 토큰 정의
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ProjectModal.tsx
│   ├── ThemeToggle.tsx
│   └── ThemeProvider.tsx
├── lib/
│   ├── config.ts         # 연락처 상수 (CONTACT)
│   ├── projects.ts       # 프로젝트 목록
│   └── data/             # 프로젝트별 상세 데이터 (9개)
└── types/
    └── index.ts
```

---

## Getting Started

```bash
npm install
npm run dev
```

빌드:

```bash
npm run build
npm start
```

---

## Contact

**안하은** · Frontend Developer
jse033101@gmail.com · [github.com/heannnn](https://github.com/heannnn)
