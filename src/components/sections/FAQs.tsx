import { useState } from "react";
import { Plus, X } from "lucide-react";

function ArrowDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B6FE0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

const faqs = [
  {
    category: "Practicalities",
    question: "How can I book a unit at Nestly?",
    answer: "Simply fill out the interest form on our website and our team will contact you as soon as possible. Alternatively, you can call us at +91 98765 43210.",
  },
  {
    category: "About Units",
    question: "What does all-inclusive living mean at Nestly?",
    answer: "Your rent covers electricity, water, high-speed WiFi, heating, cooling and shared expenses - no hidden fees.",
  },
  {
    category: "Practicalities",
    question: "Can I schedule a tour before booking?",
    answer: "Yes, you can book an in-person or virtual tour directly through our website before confirming your unit.",
  },
  {
    category: "Practicalities",
    question: "What documents are required to proceed with a booking?",
    answer: "A valid ID or passport and proof of enrollment at a nearby institution are typically required.",
  },
  {
    category: "Practicalities",
    question: "Who signs the contract and how?",
    answer: "The contract can be signed digitally by the tenant or their guardian, depending on age and local requirements.",
  },
  {
    category: "Practicalities",
    question: "How are rent payments made?",
    answer: "Rent is paid monthly via bank transfer or card, with reminders sent ahead of each due date.",
  },
  {
    category: "Moving In & Moving Out",
    question: "When and how is the deposit returned after move-out?",
    answer: "Deposits are processed and returned within a set number of days after your final move-out inspection.",
  },
  {
    category: "Pricing & What's Included",
    question: "Is Nestly more expensive than a regular apartment?",
    answer: "Nestly is priced to match the market while including furnishing, utilities and community spaces that would normally cost extra elsewhere.",
  },
  {
    category: "Eligibility & Audience",
    question: "Who is Nestly for?",
    answer: "Nestly is designed for university and college students looking for fully furnished, community-focused housing.",
  },
  {
    category: "Safety & Operations",
    question: "What security measures are in place?",
    answer: "24/7 CCTV surveillance, night patrol, and smart access control keep every unit secure around the clock.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(function (prev) {
      return prev === i ? null : i;
    });
  }

  return (
    <section className="mt-4">
      <div className="bg-white rounded-3xl py-6 px-6 md:px-10 flex items-center justify-between mb-4">
        <div className="flex items-end gap-1.5">
          <ArrowDown />
          <ArrowDown />
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl">FAQs</h2>
        <div className="flex items-end gap-1.5">
          <ArrowDown />
          <ArrowDown />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {faqs.map(function (faq, i) {
          const isOpen = openIndex === i;
          return (
            <button
              key={faq.question}
              onClick={function () {
                toggle(i);
              }}
              className={
                "text-left border border-black rounded-3xl p-6 transition-colors duration-300 " +
                (isOpen ? "bg-white" : "bg-transparent hover:bg-white/50")
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-nestly-blue">
                    {faq.category}
                  </p>
                  <p className="font-display font-bold text-lg mt-1">
                    {faq.question}
                  </p>
                </div>
                <span className="shrink-0 mt-1">
                  {isOpen ? <X size={26} strokeWidth={2.5} /> : <Plus size={26} strokeWidth={2.5} />}
                </span>
              </div>

              {isOpen && (
                <p className="text-base text-black/80 mt-6">{faq.answer}</p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
