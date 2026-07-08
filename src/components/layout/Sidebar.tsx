const navItems = [
  { number: "01", label: "Student Homes", color: "bg-nestly-blue" },
  { number: "02", label: "Our way of living", color: "bg-nestly-orange" },
  { number: "03", label: "Community", color: "bg-nestly-red" },
  { number: "04", label: "Contact", color: "bg-nestly-green" },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 2a10 10 0 0 0 -8.6 15l-1.1 4 4.2 -1.1a10 10 0 1 0 5.5 -17.9zm0 1.8a8.2 8.2 0 0 1 6.9 12.6a8.1 8.1 0 0 1 -6.9 3.9a8.2 8.2 0 0 1 -4.2 -1.1l-0.3 -0.2 -2.5 0.7 0.7 -2.4 -0.2 -0.3a8.2 8.2 0 0 1 6.5 -13.2z" />
      <path d="M9 7.5c-0.2 0 -0.5 0 -0.7 0.3c-0.3 0.3 -1 1 -1 2.3c0 1.4 1 2.7 1.1 2.9c0.1 0.2 2 3 4.8 4.2c0.7 0.3 1.2 0.4 1.6 0.6c0.7 0.2 1.3 0.2 1.8 0.1c0.5 -0.1 1.6 -0.7 1.9 -1.3c0.2 -0.6 0.2 -1.1 0.2 -1.2c0 -0.1 -0.2 -0.2 -0.4 -0.3c-0.2 -0.1 -1.6 -0.8 -1.8 -0.9c-0.2 -0.1 -0.4 -0.1 -0.6 0.1c-0.2 0.3 -0.6 0.9 -0.8 1c-0.1 0.2 -0.3 0.2 -0.5 0.1c-0.2 -0.1 -1 -0.4 -2 -1.2c-0.7 -0.7 -1.2 -1.5 -1.4 -1.7c-0.1 -0.2 0 -0.4 0.1 -0.5c0.1 -0.1 0.3 -0.3 0.4 -0.5c0.1 -0.2 0.2 -0.3 0.3 -0.5c0.1 -0.2 0 -0.4 0 -0.5c0 -0.2 -0.6 -1.6 -0.9 -2.1c-0.2 -0.5 -0.4 -0.4 -0.6 -0.4z" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-56 shrink-0 flex flex-col gap-3 p-4">
      <div className="mb-4">
        <h1 className="font-display font-bold text-3xl leading-none">
          nestly.
        </h1>
        <p className="text-[10px] tracking-widest uppercase mt-1">
          Unique Student Homes
        </p>
      </div>

      {navItems.map((item) => (
        <a
          key={item.number}
          href={"#section-" + item.number}
          className={item.color + " rounded-2xl p-4 h-28 flex flex-col justify-between font-display font-medium transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"}
        >
          <div className="flex justify-between items-start">
            <span className="font-medium">{item.number}</span>
            <ArrowIcon />
          </div>
          <span className="text-lg leading-tight font-medium">{item.label}</span>
        </a>
      ))}

      <a
        href="#book"
        className="bg-nestly-purple rounded-2xl p-4 text-center font-display font-medium hover:-translate-y-1 transition-transform duration-300"
      >
        Book your Unit
      </a>

      <button className="bg-nestly-black text-white rounded-2xl p-3 flex items-center justify-between font-medium mt-2">
        <span>English</span>
        <span>EN</span>
      </button>

      <div className="bg-nestly-black rounded-2xl p-3 flex justify-center gap-4 mt-auto">
        <InstagramIcon />
        <FacebookIcon />
        <WhatsAppIcon />
      </div>
    </aside>
  );
}
