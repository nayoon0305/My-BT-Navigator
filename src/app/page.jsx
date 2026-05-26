import Link from "next/link";
import { ChevronRight, Thermometer, Activity, Search } from "lucide-react";

const symptoms = [
  { id: "breast-pain", title: "Breast Pain", description: "Pain or discomfort in the breast area.", icon: <Activity className="w-6 h-6" /> },
  { id: "breast-lump", title: "Breast Lump", description: "Feeling a hard or soft mass in the breast.", icon: <Search className="w-6 h-6" /> },
  { id: "nipple-discharge", title: "Nipple Discharge", description: "Fluid leaking from the nipple.", icon: <Activity className="w-6 h-6" /> },
  { id: "lactation-lump", title: "Lactation Lump", description: "Lumps occurring during breastfeeding.", icon: <Activity className="w-6 h-6" /> },
  { id: "thyroid-nodule", title: "Thyroid Nodule", description: "A lump in the thyroid gland (neck area).", icon: <Activity className="w-6 h-6" /> },
  { id: "thyroid-medication", title: "Thyroid Medication", description: "Guidance on thyroid hormone therapy.", icon: <Activity className="w-6 h-6" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Navigate Your <span className="text-clinic-600">Breast & Thyroid</span> Health with Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional, evidence-based guidance for medical symptoms. 
              Find out what your symptoms might mean and what steps to take next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-clinic-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-clinic-200 hover:bg-clinic-700 transition-all">
                Start Symptom Checker
              </button>
              <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all">
                Learn About Tests
              </button>
            </div>
          </div>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-clinic-50 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Symptoms Section */}
      <section id="symptoms" className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Select Your Symptom</h2>
            <p className="text-gray-600">Choose the symptom that most closely matches what you&apos;re experiencing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom) => (
              <Link 
                key={symptom.id} 
                href={`/symptoms/${symptom.id}`}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clinic-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-clinic-50 rounded-xl flex items-center justify-center text-clinic-600 mb-6 group-hover:bg-clinic-600 group-hover:text-white transition-colors">
                  {symptom.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{symptom.title}</h3>
                <p className="text-gray-500 mb-6">{symptom.description}</p>
                <div className="flex items-center text-clinic-600 font-semibold text-sm">
                  View Guide <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-clinic-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Consultation?</h2>
          <p className="text-clinic-200 text-lg mb-10 max-w-2xl mx-auto">
            Our specialized clinic provides comprehensive breast and thyroid examinations using the latest medical equipment.
          </p>
          <button className="bg-white text-clinic-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-clinic-50 transition-colors">
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
