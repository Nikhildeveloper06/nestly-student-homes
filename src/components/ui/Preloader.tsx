function Dot({ color, delay }: { color: string; delay: string }) {
  return (
    <span
      className={color + " w-3 h-3 rounded-full inline-block float-icon"}
      style={{ animationDelay: delay }}
    />
  );
}

export default function Preloader({ visible }: { visible: boolean }) {
  return (
    <div
      className={
        "fixed inset-0 z-[100] bg-nestly-cream flex flex-col items-center justify-center gap-6 transition-opacity duration-700 " +
        (visible ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      <h1 className="footer-wordmark font-display font-bold text-6xl md:text-8xl">
        nestly.
      </h1>
      <div className="flex gap-3">
        <Dot color="bg-nestly-blue" delay="0s" />
        <Dot color="bg-nestly-orange" delay="0.15s" />
        <Dot color="bg-nestly-red" delay="0.3s" />
        <Dot color="bg-nestly-green" delay="0.45s" />
        <Dot color="bg-nestly-purple" delay="0.6s" />
      </div>
    </div>
  );
}
