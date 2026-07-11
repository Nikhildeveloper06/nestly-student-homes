export default function FAQHero() {
  return (
    <section className="page-enter mt-4">
      <div className="bg-nestly-purple rounded-3xl p-6 md:p-10 text-center">
        <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
          FAQs
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-6 leading-tight">
          Got questions?
          <br />
          We've got answers.
        </h1>
        <p className="mt-4 text-black/80 text-sm md:text-base max-w-xl mx-auto">
          Everything you need to know about booking, moving in, pricing
          and life at Nestly - all in one place. Still stuck? Our team is
          a message away.
        </p>
      </div>
    </section>
  );
}
