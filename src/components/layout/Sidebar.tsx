const navItems = [
  { number: "01", label: "Student Homes", color: "bg-nestly-blue" },
  { number: "02", label: "Our way of living", color: "bg-nestly-orange" },
  { number: "03", label: "Community", color: "bg-nestly-red" },
  { number: "04", label: "Contact", color: "bg-nestly-green" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 flex flex-col gap-3 p-4">
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
          className={item.color + " rounded-2xl p-4 h-28 flex flex-col justify-between font-display font-bold transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"}
        >
          <div className="flex justify-between items-start">
            <span>{item.number}</span>
            <span>-&gt;</span>
          </div>
          <span className="text-lg leading-tight">{item.label}</span>
        </a>
      ))}

      <a
        href="#book"
        className="bg-nestly-purple rounded-2xl p-4 text-center font-display font-bold hover:-translate-y-1 transition-transform duration-300"
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
      </div>
    </aside>
  );
}
