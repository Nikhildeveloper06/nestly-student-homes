import { Instagram, Facebook, Linkedin } from "lucide-react";

function TransitDot({ top, left }: { top: string; left: string }) {
  return (
    <div
      className="absolute w-6 h-6 rounded-full bg-white border-2 border-black/60 flex items-center justify-center text-black/60 text-xs font-bold"
      style={{ top, left }}
    >
      T
    </div>
  );
}

function LocationPin() {
  return (
    <div
      className="w-6 h-6 bg-nestly-black shrink-0"
      style={{
        clipPath: "polygon(50% 100%, 0 40%, 0 0, 100% 0, 100% 40%)",
      }}
    />
  );
}

export default function ContactSection() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden bg-white border border-black/10 h-[300px] md:h-[380px]">
            <svg
              className="absolute inset-0 w-full h-full opacity-70"
              viewBox="0 0 400 400"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 H400 M0,140 H400 M0,220 H400 M0,300 H400 M60,0 V400 M140,0 V400 M220,0 V400 M300,0 V400"
                stroke="#111111"
                strokeWidth="1.5"
                strokeOpacity="0.15"
              />
            </svg>
            <TransitDot top="15%" left="25%" />
            <TransitDot top="35%" left="60%" />
            <TransitDot top="65%" left="20%" />
            <TransitDot top="70%" left="70%" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="bg-nestly-orange rounded-full px-4 py-2 text-sm font-bold mb-2 whitespace-nowrap">
                Nestly Parkside
              </span>
              <LocationPin />
            </div>
            <span className="absolute bottom-3 left-4 text-black/40 text-xs font-medium">
              Map preview
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-nestly-green rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
              <div>
                <h2 className="font-display font-bold text-2xl leading-tight">
                  Let's
                  <br />
                  Connect!
                </h2>
              </div>
              <div className="flex gap-4">
                <Instagram size={22} strokeWidth={1.5} />
                <Facebook size={22} strokeWidth={1.5} />
                <Linkedin size={22} strokeWidth={1.5} />
              </div>
            </div>

            <div className="bg-nestly-cream border border-black/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
              <h3 className="font-display font-bold text-3xl">nestly.</h3>
              <div>
                <p className="font-display font-bold text-sm">hello@nestly.example</p>
                <p className="font-display font-bold text-sm mt-1">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/10 rounded-3xl p-6 md:p-8">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
            Contact
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-6 leading-tight">
            Any questions?
            <br />
            We're here to answer!
          </h2>
          <p className="mt-3 text-black/70 text-sm md:text-base">
            Complete the form and our team will contact you shortly.
          </p>

          <form className="mt-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  type="text"
                  className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Surname *</label>
                <input
                  type="text"
                  className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  type="email"
                  className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone *</label>
                <input
                  type="tel"
                  className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                placeholder="Leave your message here"
                rows={5}
                className="w-full border border-black/30 focus:border-black outline-none rounded-2xl p-4 mt-1 bg-transparent resize-none"
              />
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>
                  I have read and accept the Terms of Use and the Privacy
                  Policy of Nestly.
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>
                  I would like to receive news and updates about
                  promotional offers and activities from Nestly.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-nestly-black text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 font-display font-medium w-fit self-end"
            >
              Send
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
