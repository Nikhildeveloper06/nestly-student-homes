import { Link } from "react-router-dom";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M13.5 21v-7.5h2.5l0.5 -3h-3v-1.9c0 -0.9 0.3 -1.6 1.6 -1.6h1.6v-2.7c-0.3 0 -1.3 -0.1 -2.4 -0.1c-2.4 0 -4 1.5 -4 4.1v2.2h-2.7v3h2.7v7.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M6.5 8.5h-3v11h3v-11z" />
      <circle cx="5" cy="5" r="2" />
      <path d="M11.5 8.5h-3v11h3v-5.5c0 -1.5 0.8 -2.5 2.2 -2.5c1.3 0 1.8 0.9 1.8 2.5v5.5h3v-6c0 -3 -1.6 -4.5 -3.9 -4.5c-1.8 0 -2.6 1 -3.1 1.7v-1.2z" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </svg>
  );
}

const exploreLinks = [
  { label: "Student Homes", to: "/student-homes" },
  { label: "Our way of living", to: "/our-way-of-living" },
  { label: "Community", to: "/community" },
  { label: "Contact", to: "/contact" },
];

const companyLinks = [
  { label: "About us", to: "/about-us" },
  { label: "Careers", to: null },
  { label: "Blog", to: null },
  { label: "Press", to: null },
];

const socials = [
  { Icon: InstagramIcon, color: "hover:bg-nestly-purple" },
  { Icon: FacebookIcon, color: "hover:bg-nestly-blue" },
  { Icon: LinkedinIcon, color: "hover:bg-nestly-green" },
];

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="bg-nestly-black text-white rounded-3xl p-6 sm:p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display font-bold text-2xl">nestly.</h3>
            <p className="text-white/60 text-sm mt-2 max-w-[220px]">
              Unique student homes, designed for how you actually live.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(function (item, i) {
                const Icon = item.Icon;
                return (
                  <div
                    key={i}
                    className={"bg-white/10 rounded-md p-2 transition-colors duration-300 cursor-pointer " + item.color}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-display font-semibold text-nestly-orange text-xs sm:text-sm uppercase tracking-wide">Explore</p>
            <ul className="mt-4 flex flex-col gap-3">
              {exploreLinks.map(function (link) {
                return (
                  <li key={link.label}>
                    <Link to={link.to} className="footer-link text-sm text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-nestly-green text-xs sm:text-sm uppercase tracking-wide">Company</p>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map(function (link) {
                if (link.to) {
                  return (
                    <li key={link.label}>
                      <Link to={link.to} className="footer-link text-sm text-white/80 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <span className="text-sm text-white/40 cursor-default">
                      {link.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="font-display font-semibold text-nestly-blue text-xs sm:text-sm uppercase tracking-wide">Get in touch</p>
            <div className="mt-4 flex flex-col sm:flex-row md:flex-col gap-1 sm:gap-6 md:gap-1">
              <p className="text-sm text-white/80">hello@nestly.example</p>
              <p className="text-sm text-white/80">+91 98765 43210</p>
            </div>
            <Link
              to="/book-unit"
              className="mt-4 inline-block bg-nestly-purple text-black rounded-full px-6 py-3.5 text-sm font-display font-medium whitespace-nowrap transition-all duration-300 hover:bg-white hover:scale-105"
            >
              Book a tour
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center overflow-hidden">
          <h2 className="font-display font-bold text-white text-[15vw] sm:text-[13vw] md:text-[9vw] leading-none whitespace-nowrap">
            nestly.
          </h2>
          <div className="footer-underline h-1.5 w-32 sm:w-40 md:w-56 mx-auto mt-4 rounded-full" />
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            (c) 2026 Nestly Student Homes. Built as a design portfolio project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button className="border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-white/80 hover:bg-white/10 transition-colors">FAQs</button>
            <button className="border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-white/80 hover:bg-white/10 transition-colors">Privacy Policy</button>
            <button className="border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-white/80 hover:bg-white/10 transition-colors">Cookies Policy</button>
            <a href="#top" className="bg-white/10 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-nestly-blue hover:-translate-y-1 transition-all duration-300">
              <ArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
