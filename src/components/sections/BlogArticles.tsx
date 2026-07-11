import { useState } from "react";
import { Plus, X } from "lucide-react";

export type Article = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    category: "Moving Out",
    date: "March 2026",
    title: "Moving away from home for the first time? Here's what actually helps.",
    excerpt: "The checklist nobody gives you before your first semester away.",
    content: [
      "Leaving home for the first time is equal parts exciting and disorienting. The biggest adjustment isn't logistical - it's learning to make small decisions for yourself, every single day, without someone else's input.",
      "Start with routines, not rules. A fixed wake-up time and a weekly grocery run do more for your sense of stability than any productivity app.",
      "Don't wait to build community. The friendships that carry you through the semester usually start in the first two weeks - say yes to the awkward common-room hangout.",
    ],
  },
  {
    category: "Budgeting",
    date: "February 2026",
    title: "A realistic student budget that doesn't involve eating instant noodles every night.",
    excerpt: "How to actually track money as a student, without a finance degree.",
    content: [
      "Most student budgets fail because they're built around discipline instead of defaults. All-inclusive rent removes one of the biggest variable costs - electricity, WiFi and water bills - from the equation entirely.",
      "Split your remaining budget into three simple buckets: essentials, social, and savings. Even a small automatic transfer to savings each month builds a habit that compounds.",
      "Track spending weekly, not daily. Daily tracking burns out fast; a five-minute Sunday review is sustainable long-term.",
    ],
  },
  {
    category: "Comparisons",
    date: "January 2026",
    title: "PG vs hostel vs student housing: what's actually different?",
    excerpt: "Breaking down the real trade-offs between the three most common options.",
    content: [
      "A traditional PG usually means shared rules set by a landlord who lives elsewhere - flexible on price, less flexible on lifestyle.",
      "Hostels attached to institutions offer proximity and structure, but often with strict timings and limited privacy.",
      "Purpose-built student housing like Nestly sits between the two: private units, all-inclusive pricing, and community spaces designed specifically for how students actually live - without giving up independence.",
    ],
  },
  {
    category: "Wellbeing",
    date: "December 2025",
    title: "Mental health in college: small habits that make a real difference.",
    excerpt: "You don't need a complete life overhaul - just a few consistent anchors.",
    content: [
      "Sleep and sunlight are the two most underrated mental health tools available to any student, and both are free.",
      "Build one recurring social anchor into your week - a class, a workout, a shared meal - so connection doesn't depend on motivation.",
      "Know the difference between a bad week and a pattern. If low mood persists beyond two weeks, talk to someone - a friend, a counsellor, or your institution's support services.",
    ],
  },
  {
    category: "Community",
    date: "November 2025",
    title: "How to actually get along with roommates you didn't choose.",
    excerpt: "Practical ground rules that prevent 90% of roommate conflict.",
    content: [
      "Most roommate conflict comes from unspoken expectations, not incompatible personalities. A five-minute conversation in week one about guests, noise and cleaning saves months of friction.",
      "Address small issues immediately and calmly - resentment that builds silently is far harder to resolve than a minor disagreement addressed early.",
      "Shared spaces work best with shared, written expectations - even something as simple as a whiteboard chore list removes ambiguity.",
    ],
  },
  {
    category: "Sustainability",
    date: "October 2025",
    title: "Small sustainable habits that fit into student life.",
    excerpt: "Practical, low-effort changes that actually stick.",
    content: [
      "Sustainability as a student doesn't require a lifestyle overhaul - it's mostly about defaults. Reusable bottles and bags remove single-use waste without any extra thought once the habit forms.",
      "Shared laundry and common spaces already reduce per-person resource use significantly compared to individual apartments.",
      "Buy less, choose well. A smaller, well-chosen wardrobe and kitchen setup is both more sustainable and easier to move at the end of the year.",
    ],
  },
];

export default function BlogArticles() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(function (prev) {
      return prev === i ? null : i;
    });
  }

  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {articles.map(function (article, i) {
          const isOpen = openIndex === i;
          return (
            <button
              key={article.title}
              onClick={function () {
                toggle(i);
              }}
              className={
                "text-left border rounded-3xl p-6 transition-colors duration-300 " +
                (isOpen ? "bg-nestly-cream border-black" : "border-black/20 hover:border-black")
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-black/50 font-medium">
                    <span className="text-nestly-orange font-semibold">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <p className="font-display font-bold text-lg mt-2 leading-snug">
                    {article.title}
                  </p>
                  {!isOpen && (
                    <p className="text-sm text-black/60 mt-2">{article.excerpt}</p>
                  )}
                </div>
                <span className="shrink-0 mt-1 transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
                  {isOpen ? <X size={24} strokeWidth={2.5} /> : <Plus size={24} strokeWidth={2.5} />}
                </span>
              </div>

              <div
                className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 mt-4 border-t border-black/10 flex flex-col gap-3">
                    {article.content.map(function (paragraph, pi) {
                      return (
                        <p key={pi} className="text-sm text-black/80">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
