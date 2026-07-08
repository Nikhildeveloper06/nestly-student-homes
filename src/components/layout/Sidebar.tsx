import { Instagram, Facebook } from "lucide-react";

const navItems = [
  { number: "01", label: "Student Homes", color: "bg-nestly-blue" },
  { number: "02", label: "Our way of living", color: "bg-nestly-orange" },
  { number: "03", label: "Community", color: "bg-nestly-red" },
  { number: "04", label: "Contact", color: "bg-nestly-green" },
];

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
        
          key={item.number}
          href={`#section-${item.number}`}
          className={`${item.color} rounded-2xl p-4 h-28 flex flex-col justify-between
            font-display font-bold transition-transform duration-300
            hover:-translate-y-1 hover:shadow-lg`}
        >
          <div className="flex justify-between items-start">
            <span>{item.number}</span>
            <span>↗</span>
          </div>
          <span className="text-lg leading-tight">{item.label}</span>
        </a>
      ))}

      
        href="#book"
        className="bg-nestly-purple rounded-2xl p-4 text-center font-display
          font-bold hover:-translate-y-1 transition-transform duration-300"
      >
        Book your Unit
      </a>

      <button className="bg-nestly-black text-white rounded-2xl p-3
        flex items-center justify-between font-medium mt-2">
        English
        <span>🌐</span>
      </button>

      <div className="bg-nestly-black rounded-2xl p-3 flex justify-center gap-4 mt-auto">
        <Instagram size={18} color="white" />
        <Facebook size={18} color="white" />
      </div>
    </aside>
  );
}
