import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abelai.kr"),
  title: {
    default: "ABEL AI | AEO·GEO·SEO 통합 최적화 에이전시",
    template: "%s | ABEL AI",
  },
  description:
    "ChatGPT 답변에 없으면 매출도 없습니다. ABEL AI가 AEO·GEO·SEO로 신뢰·정확·전환을 만듭니다.",
  keywords: [
    "AEO",
    "GEO",
    "SEO",
    "AEO 최적화",
    "GEO 최적화",
    "ChatGPT 답변 최적화",
    "AI 검색 노출",
    "AI 에이전시",
    "답변 최적화",
    "생성형 AI 최적화",
    "답변엔진 최적화",
    "AI 검색 마케팅",
    "구글 AI Overview",
    "제로클릭 검색",
    "ABEL AI",
  ],
  openGraph: {
    title: "ABEL AI | AEO·GEO·SEO 통합 최적화 에이전시",
    description:
      "ChatGPT 답변에 없으면 매출도 없습니다. ABEL AI가 AEO·GEO·SEO로 신뢰·정확·전환을 만듭니다.",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary",
    title: "ABEL AI | AEO·GEO·SEO 통합 최적화 에이전시",
    description:
      "ChatGPT 답변에 없으면 매출도 없습니다. ABEL AI가 AEO·GEO·SEO로 신뢰·정확·전환을 만듭니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
