export default function Hero() {
  return (
    <section
      id="section-01"
      className="relative w-full h-[calc(100vh-2rem)] rounded-3xl overflow-hidden"
    >
      <img
        src="/images/hero/hero.jpg"
        alt="Nestly student common area"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Home to effortlessly
          <br />
          great living.
        </h1>

        <p className="text-white text-lg md:text-xl mt-6 max-w-2xl font-body">
          All-inclusive student housing with everything you need to live,
          study and connect.
        </p>

        <a
          href="#book"
          className="mt-10 bg-nestly-black text-white font-display font-medium
            rounded-full px-8 py-4 flex items-center gap-2
            hover:bg-white hover:text-nestly-black transition-colors duration-300"
        >
          Book your Unit
          <span>-&gt;</span>
        </a>
      </div>
    </section>
  );
}
