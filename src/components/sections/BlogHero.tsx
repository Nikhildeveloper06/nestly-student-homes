export default function BlogHero() {
  return (
    <section className="page-enter mt-4">
      <div className="bg-nestly-orange rounded-3xl p-6 md:p-10 text-center">
        <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
          The Nestly Blog
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-6 leading-tight">
          Notes on student life,
          <br />
          from people who get it.
        </h1>
        <p className="mt-4 text-black/80 text-sm md:text-base max-w-xl mx-auto">
          Practical guides, honest advice, and stories from the Nestly
          community - on moving out, budgeting, roommates, and everything
          in between.
        </p>
      </div>
    </section>
  );
}
