import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    category: "Reservation",
    question: "How can I book a unit at Nestly?",
    answer: "You can book directly through our website by choosing your preferred unit and completing the reservation form, or by calling our team.",
  },
  {
    category: "About Units",
    question: "What does all-inclusive rent mean?",
    answer: "Your rent covers electricity, water, high-speed WiFi, heating, cooling and shared expenses - no hidden fees.",
  },
  {
    category: "Reservation",
    question: "Can I cancel my booking before check-in?",
    answer: "Yes, cancellations made before your move-in date follow the terms outlined in your booking confirmation.",
  },
  {
    category: "About Units",
    question: "What documents are needed to confirm a booking?",
    answer: "A valid ID or passport and proof of enrollment at a nearby institution are typically required.",
  },
  {
    category: "Moving & Moving Out",
    question: "What can I do if the deposit isn't returned in time?",
    answer: "Reach out to our support team directly - deposits are processed within a set number of days after checkout.",
  },
  {
    category: "Pricing & What's Included",
    question: "How are rent payments made?",
    answer: "Rent is paid monthly via bank transfer or card, with reminders sent ahead of each due date.",
  },
  {
    category: "Eligibility & Audience",
    question: "Who is Nestly for?",
    answer: "Nestly is designed for university and college students looking for fully furnished, community-focused housing.",
  },
  {
    category: "Safety & Convenience",
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-end gap-1.5">
          <ArrowDown />
          <ArrowDown />
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl">FAQs</h2>
        <div className="flex items-end gap-1.5">
          <ArrowDown />
          <ArrowDown />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {faqs.map(function (faq, i) {
          const isOpen = openIndex === i;
          return (
            <button
              key={faq.question}
              onClick={function () {
                toggle(i);
              }}
              className="text-left bg-white border border-black/10 rounded-2xl p-4 hover:border-black/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] text-black/50 uppercase tracking-wide">
                    {faq.category}
                  </p>
                  <p className="font-display font-semibold text-sm mt-1">
                    {faq.question}
                  </p>
                </div>
                <span className="shrink-0 mt-1">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </div>
              {isOpen && (
                <p className="text-sm text-black/70 mt-3">{faq.answer}</p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
