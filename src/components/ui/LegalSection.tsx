import type { ReactNode } from "react";

export default function LegalSection({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-black/10 rounded-3xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className={color + " w-2.5 h-2.5 rounded-full shrink-0"} />
        <h2 className="font-display font-bold text-xl md:text-2xl">
          {title}
        </h2>
      </div>
      <div className="text-sm md:text-base text-black/80 flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}
