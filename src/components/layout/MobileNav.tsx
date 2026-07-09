import { useState } from "react";
import WaveButton from "../ui/WaveButton";

const navItems = [
  { number: "01", label: "Student Homes", color: "bg-nestly-blue" },
  { number: "02", label: "Our way of living", color: "bg-nestly-orange" },
  { number: "03", label: "Community", color: "bg-nestly-red" },
  { number: "04", label: "Contact", color: "bg-nestly-green" },
];

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between py-3">
        <h1 className="font-display font-bold text-2xl leading-none">
          nestly.
        </h1>
        <button
          onClick={function () {
            setOpen(true);
          }}
          className="bg-nestly-black text-white rounded-xl p-2.5"
        >
          <HamburgerIcon />
        </button>
      </div>

      <div
        className={
          "fixed inset-0 z-[90] bg-nestly-black text-white transition-transform duration-500 ease-out flex flex-col p-6 gap-3 " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-2xl">nestly.</h2>
          <button
            onClick={function () {
              setOpen(false);
            }}
            className="bg-white/10 rounded-xl p-2.5"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
          {navItems.map(function (item) {
            return (
              
                key={item.number}
                href={"#section-" + item.number}
                onClick={function () {
                  setOpen(false);
                }}
                className={item.color + " rounded-xl p-4 flex flex-col justify-between text-nestly-black font-display font-medium min-h-[80px]"}
              >
                <span className="text-sm font-medium">{item.number}</span>
                <span className="text-lg leading-tight">{item.label}</span>
              </a>
            );
          })}
        </div>

        <WaveButton
          href="#book"
          baseClassName="rounded-xl p-4 text-center font-display font-medium bg-nestly-purple text-sm"
        >
          Book your Unit
        </WaveButton>

        <button className="bg-white/10 text-white rounded-xl p-3 flex items-center justify-between font-medium text-sm">
          <span>English</span>
          <span>EN</span>
        </button>

        <div className="bg-white/10 rounded-xl p-3 flex justify-center gap-4">
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
}
