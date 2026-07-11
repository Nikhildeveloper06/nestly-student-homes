import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-4 flex items-center gap-2 text-sm text-black/60 flex-wrap"
    >
      {items.map(function (item, i) {
        const isLast = i === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={14} />}
            {isLast ? (
              <span className="text-black font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-black transition-colors">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
