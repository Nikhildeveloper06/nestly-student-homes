export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-nestly-red rounded-2xl py-4">
      <div className="flex gap-10 marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-white font-display font-bold text-lg uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-white text-xl">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
