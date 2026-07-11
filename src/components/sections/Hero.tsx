import WaveButton from "../ui/WaveButton";

export default function Hero() {
  return (
    <section
      id="section-01"
      className="hero-entrance relative w-full h-[75vh] md:h-[calc(100vh-2rem)] rounded-3xl overflow-hidden"
    >
      <img
        src="/images/hero/lounge-area.webp"
        alt="Nestly student common area"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Home to effortlessly
          <br />
          great living.
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-2xl font-body">
          All-inclusive student housing with everything you need to live,
          study and connect.
        </p>

        <div className="mt-6 md:mt-10">
          <WaveButton
            href="/book-unit"
            baseClassName="bg-nestly-black rounded-full px-6 py-3.5 md:px-8 md:py-4 flex items-center gap-2"
            textClassName="flex items-center gap-2 text-white"
          >
            Book your Unit
            <span>-&gt;</span>
          </WaveButton>
        </div>
      </div>
    </section>
  );
}
