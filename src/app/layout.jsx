import "@/styles/globals.css";
import { Inter, Noto_Sans_KR } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto" });

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "My BT Navigator | 유방 & 갑상선 증상 네비게이터",
  description: "유방 및 갑상선 증상에 대한 전문적이고 신뢰할 수 있는 정보를 제공합니다.",
  keywords: ["유방통증", "유방멍울", "갑상선결절", "증상체크"],
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics Placeholder */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Microsoft Clarity Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${noto.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-clinic-700 tracking-tight">BT Navigator</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-clinic-600 transition-colors">홈</Link>
              <Link href="/#symptoms" className="text-sm font-medium hover:text-clinic-600 transition-colors">증상 가이드</Link>
              <Link href="/#about" className="text-sm font-medium hover:text-clinic-600 transition-colors">병원 안내</Link>
            </nav>
            <button className="bg-clinic-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-clinic-700 transition-colors">
              예약하기
            </button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">© 2026 My BT Navigator. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
