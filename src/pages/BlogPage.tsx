import { Link } from "react-router-dom";
import BlogHero from "../components/sections/BlogHero";
import BlogArticles from "../components/sections/BlogArticles";
import NewsletterSignup from "../components/ui/NewsletterSignup";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function BlogPage() {
  return (
    <>
      <BlogHero />

      <ScrollReveal>
        <BlogArticles />
      </ScrollReveal>

      <ScrollReveal>
        <section className="mt-4">
          <Link
            to="/student-homes"
            className="bg-nestly-black rounded-full py-5 px-6 md:px-10 flex items-center justify-center gap-2 hover:bg-nestly-black/90 transition-colors"
          >
            <span className="font-display font-bold text-white text-base md:text-lg text-center">
              Ready to see what all-inclusive student living looks like?
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
