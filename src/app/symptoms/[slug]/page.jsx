import { notFound } from "next/navigation";
import { symptomsData } from "@/lib/symptoms";
import { ChevronLeft, Info, CheckCircle2, AlertTriangle, MessageSquare } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];
  if (!symptom) return {};

  return {
    title: `${symptom.title} | BT Navigator`,
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
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Mobile Back Button */}
      <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-8">
        <Link href="/" className="inline-flex items-center text-clinic-600 font-medium hover:underline">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-clinic-50/50 py-12 md:py-20 border-y border-clinic-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{symptom.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{symptom.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          
          {/* Risk Summary */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <AlertTriangle className="text-amber-500 w-6 h-6" />
              <h2 className="text-2xl font-bold">Quick Risk Summary</h2>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-amber-700 mr-2">Risk Level:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  symptom.riskLevel === 'Low' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {symptom.riskLevel}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{symptom.riskSummary}</p>
            </div>
          </section>

          {/* Symptom Checker UI */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle2 className="text-clinic-600 w-6 h-6" />
              <h2 className="text-2xl font-bold">Self-Check Guide</h2>
            </div>
            <div className="space-y-4">
              {symptom.checkerQuestions.map((q, i) => (
                <div key={i} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-6 h-6 bg-white border-2 border-clinic-200 rounded-full flex-shrink-0 mt-0.5 mr-4" />
                  <p className="text-gray-700 font-medium">{q}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 italic">
              * This is for informational purposes only and does not replace professional medical advice.
            </p>
          </section>

          {/* Test Explanation */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Info className="text-clinic-600 w-6 h-6" />
              <h2 className="text-2xl font-bold">Recommended Tests</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {symptom.tests.map((test, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-clinic-700">{test.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="text-clinic-600 w-6 h-6" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {symptom.faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Q: {faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Doctor Section & CTA */}
        <div className="space-y-8">
          <div className="bg-clinic-900 text-white p-8 rounded-3xl sticky top-24">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-clinic-100 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                {/* Placeholder for doctor image */}
                <div className="w-full h-full bg-clinic-600 flex items-center justify-center text-white text-2xl font-bold">
                  Dr
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Dr. Park Ji-soo</h3>
                <p className="text-clinic-200 text-sm">Breast & Thyroid Specialist</p>
              </div>
            </div>
            <p className="text-clinic-100 text-sm leading-relaxed mb-8">
              &quot;Understanding your symptoms is the first step to peace of mind. I recommend prompt screening for any persistent changes in breast or thyroid tissue.&quot;
            </p>
            <hr className="border-white/10 mb-8" />
            <h4 className="font-bold mb-4">Book a Consultation</h4>
            <div className="space-y-4">
              <button className="w-full bg-white text-clinic-900 font-bold py-4 rounded-xl hover:bg-clinic-50 transition-colors">
                Quick Reservation
              </button>
              <button className="w-full bg-transparent border border-white/30 text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-colors">
                Call Clinic
              </button>
            </div>
            <p className="mt-6 text-[10px] text-clinic-400 text-center">
              Available: Mon-Fri 09:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
