const mentions = [
  {
    publication: "The Campus Times",
    quote: "Nestly is quietly rethinking what student housing can feel like - less transactional, more like an actual home.",
  },
  {
    publication: "Housing Weekly",
    quote: "An all-inclusive model that removes the usual friction points of renting as a student.",
  },
  {
    publication: "Urban Living Report",
    quote: "One of the more thoughtfully designed community-first housing operators we've come across this year.",
  },
];

export default function PressMentions() {
  return (
    <section className="mt-4">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-4">
        As featured in
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mentions.map(function (mention) {
          return (
            <div
              key={mention.publication}
              className="bg-nestly-cream border border-black/10 rounded-3xl p-6 flex flex-col justify-between gap-4 min-h-[200px]"
            >
              <p className="text-sm text-black/80 leading-relaxed">
                "{mention.quote}"
              </p>
              <p className="font-display font-bold text-sm">
                {mention.publication}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
