import React from "react";

interface FAQItemProps {
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => (
  <div className="flex items-center justify-between p-5 bg-[#f8f9fa] rounded-xl border border-gray-200 hover:border-blue-300 transition cursor-pointer group">
    <p className="text-[#093364] font-medium text-base sm:text-lg pr-4">
      {question}
    </p>
    <span className="text-amber-500 text-2xl font-bold group-hover:scale-125 transition-transform">
      +
    </span>
  </div>
);

export default function Client() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Marketing Director",
      img: "/sarah image.webp",
      stars: "★★★★☆",
      text: "They understood our business logic and delivered a scalable solution.",
    },
    {
      name: "Louis jabeth",
      role: "Customer service agent",
      img: "/louis image.webp",
      stars: "★★★★★",
      text: "Our website became faster and conversions increased by 40%.",
    },
    {
      name: "Robin S.",
      role: "Developer",
      img: "/robin image.webp",
      stars: "★★★★★",
      text: "They identified security gaps early and saved us hosting costs.",
    },
  ];

  const faqs = [
    "What types of IT services does CodebeeLab specialize in?",
    "What makes CodebeeLab training different?",
    "How do we start a new IT project?",
    "Which technologies are covered?",
    "How is software quality ensured?",
    "Is placement assistance provided?",
  ];

  return (
    <section className="bg-white font-sans">
      {/* ===== TESTIMONIALS ===== */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-center text-[#093364] text-3xl sm:text-4xl font-bold mb-16">
          Our clients say <span className="text-amber-400">about us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border shadow hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  className="w-14 h-14 rounded-full object-cover"
                  alt={t.name}
                />
                <div>
                  <h5 className="text-[#093364] font-bold">{t.name}</h5>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-500 italic mb-4">"{t.text}"</p>
              <div className="text-amber-400">{t.stars}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#093364] text-3xl sm:text-4xl font-bold mb-14">
            Get answers to common questions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((q, i) => (
              <FAQItem key={i} question={q} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== CALL TO ACTION ===== */}
      <div className="relative bg-[#093364] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Ready To Join… ???
          </h2>

          <p className="text-gray-200 mt-4 max-w-2xl">
            Organize your school’s records with our free registration forms.
            Customize easily and get started in seconds.
          </p>

          <button className="mt-8 px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
