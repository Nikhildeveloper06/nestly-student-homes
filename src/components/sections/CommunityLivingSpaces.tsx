export default function CommunityLivingSpaces() {
  return (
    <section className="mt-4">
      <div className="bg-nestly-blue rounded-3xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl">
              Community Living Spaces
            </h2>
            <p className="text-sm text-white/80 mt-1 max-w-md">
              Private units and total comfort, but never alone. Meet,
              chat, and hang out with your neighbours in shared spaces
              made for connection.
            </p>
          </div>
          <span className="bg-nestly-purple rounded-full px-4 py-2 text-xs font-medium w-fit">
            Nestly Parkside
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-[220px] border border-white/20">
            <img
              src="/images/hero/lounge-area.webp"
              alt="Nestly common area"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[220px] border border-white/20">
            <img
              src="/images/community/V2.jpeg"
              alt="Nestly gym"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
