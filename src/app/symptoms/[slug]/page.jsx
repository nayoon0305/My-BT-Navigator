import { notFound } from "next/navigation";
import { symptomsData } from "@/lib/symptoms";
import { ChevronLeft, Info, CheckCircle2, AlertTriangle, MessageSquare, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];
  if (!symptom) return {};

  return {
    title: `${symptom.title} | BT 네비게이터`,
    description: symptom.description,
    openGraph: {
      title: symptom.title,
      description: symptom.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(symptomsData).map((slug) => ({
    slug,
  }));
}

export default async function SymptomPage({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];

  if (!symptom) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": symptom.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen font-noto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumbs / Back */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-clinic-600 font-medium hover:underline">
          <ChevronLeft className="w-4 h-4 mr-1" /> 홈으로 돌아가기
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-clinic-50/30 py-16 md:py-24 border-y border-clinic-100/50 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-clinic-100 text-clinic-700 text-xs font-bold rounded-full mb-6 tracking-wider uppercase">Symptom Guide</div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{symptom.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">{symptom.description}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-clinic-200/20 rounded-full blur-3xl" />
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-20">
          
          {/* Quick Risk Summary Card */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">의료진 요약 가이드</h2>
            </div>
            <div className="bg-white border-2 border-amber-50 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center mb-6">
                <span className="text-sm font-bold text-gray-400 mr-4">위험도 수준</span>
                <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                  symptom.riskLevel === 'Low' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {symptom.riskLevel === 'Low' ? '낮음' : '보통'}
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">{symptom.riskSummary}</p>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600 leading-relaxed italic">
                &quot;{symptom.doctorNote}&quot;
              </div>
            </div>
          </section>

          {/* Interactive Symptom Checker UI Placeholder */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-clinic-100 rounded-xl flex items-center justify-center text-clinic-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">자가 증상 체크리스트</h2>
            </div>
            <div className="space-y-4">
              {symptom.checkerQuestions.map((q, i) => (
                <label key={i} className="flex items-start p-6 bg-white border border-gray-100 rounded-2xl cursor-pointer hover:border-clinic-200 hover:bg-clinic-50/20 transition-all group">
                  <input type="checkbox" className="mt-1.5 w-5 h-5 rounded-md border-gray-300 text-clinic-600 focus:ring-clinic-500 mr-4" />
                  <span className="text-gray-800 font-medium group-hover:text-clinic-700">{q}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Doctor Explanation Video Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                <Play className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">전문의 영상 설명</h2>
            </div>
            <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
              {/* YouTube Embed Placeholder */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${symptom.videoId}`}
                title="Doctor Explanation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Test Explanation Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-clinic-100 rounded-xl flex items-center justify-center text-clinic-600">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">추천 정밀 검사</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {symptom.tests.map((test, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-3xl bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-clinic-700">{test.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{test.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-clinic-100 rounded-xl flex items-center justify-center text-clinic-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">자주 묻는 질문</h2>
            </div>
            <div className="space-y-4">
              {symptom.faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-2xl bg-white overflow-hidden" open={i === 0}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg hover:bg-gray-50 transition-colors list-none">
                    <span className="flex-1 pr-4">Q. {faq.q}</span>
                    <span className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                      <ChevronLeft className="w-4 h-4 -rotate-90" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    A. {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Symptoms */}
          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-xl font-bold mb-8 text-gray-400">연관된 증상 가이드</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symptom.relatedSymptoms.map((relSlug) => {
                const rel = symptomsData[relSlug];
                if (!rel) return null;
                return (
                  <Link key={relSlug} href={`/symptoms/${relSlug}`} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-clinic-50 transition-colors group">
                    <span className="font-bold text-gray-700 group-hover:text-clinic-700">{rel.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-clinic-600" />
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sticky Reservation CTA Sidebar */}
        <div className="space-y-8">
          <div className="bg-clinic-900 text-white p-10 rounded-[2.5rem] sticky top-24 shadow-2xl shadow-clinic-900/20 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">상담 예약하기</h3>
              <p className="text-clinic-300 text-sm mb-10 leading-relaxed">
                전문적인 유방·갑상선 검진으로<br />걱정을 덜어드립니다.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_reservation', {
                        'event_category': 'engagement',
                        'event_label': symptom.title
                      });
                    }
                    alert('예약 페이지로 이동합니다.');
                  }}
                  className="w-full bg-white text-clinic-900 font-bold py-5 rounded-2xl hover:bg-clinic-50 transition-all active:scale-[0.98] shadow-lg shadow-white/5"
                >
                  간편 온라인 예약
                </button>
                <a href="tel:02-123-4567" className="w-full bg-clinic-800 text-white font-bold py-5 rounded-2xl flex items-center justify-center hover:bg-clinic-700 transition-all">
                  전화 문의하기
                </a>
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-clinic-700 rounded-full flex items-center justify-center text-xl font-bold">P</div>
                  <div>
                    <div className="font-bold text-sm">박지수 대표원장</div>
                    <div className="text-xs text-clinic-400">유방·갑상선 분과 전문의</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-clinic-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
