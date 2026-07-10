function ArrowDiagonal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function MoreAnswers() {
  return (
    <section className="mt-4">
      <a href="#" className="bg-nestly-blue rounded-full py-5 px-6 md:px-10 flex items-center justify-center gap-2 hover:bg-nestly-blue/90 transition-colors">
        <span className="font-display font-bold text-white text-base md:text-lg text-center">
          Still have questions? There's a lot more we can help with.
        </span>
        <ArrowDiagonal />
      </a>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-4">
        <div className="bg-nestly-red rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-center">
          <span className="font-display font-bold text-base md:text-lg whitespace-nowrap">
            Join our newsletter
          </span>
        </div>

        <div className="flex gap-3 md:flex-1">
          <div className="bg-nestly-orange rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center flex-1">
            <span className="text-sm">Your email here</span>
          </div>
          <button className="bg-nestly-black rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
            <ArrowDiagonal />
          </button>
        </div>
      </div>
    </section>
  );
}
