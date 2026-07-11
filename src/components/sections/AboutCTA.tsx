import { Link } from "react-router-dom";
import NewsletterSignup from "../ui/NewsletterSignup";

export default function AboutCTA() {
  return (
    <section className="mt-4">
      <Link
        to="/student-homes"
        className="bg-nestly-green rounded-full py-5 px-6 md:px-10 flex items-center justify-center gap-2 hover:bg-nestly-green/90 transition-colors"
      >
        <span className="font-display font-bold text-black text-base md:text-lg text-center">
          Curious what living at Nestly is really like? Explore our
          student homes.
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </Link>

      <div className="mt-4">
        <NewsletterSignup />
      </div>
    </section>
  );
}
