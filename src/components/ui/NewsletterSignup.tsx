import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

function ArrowDiagonal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });

  function handleSubmit() {
    if (!isValidEmail(email)) {
      setError(true);
      return;
    }
    setError(false);
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
    setEmail("");
  }

  function handleModalMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setImgOffset({ x: relX * 20, y: relY * 20 });
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        <div className="bg-nestly-red rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-center">
          <span className="font-display font-bold text-base md:text-lg whitespace-nowrap">
            Join our newsletter
          </span>
        </div>

        <div
          className={
            "bg-nestly-orange rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center flex-1 transition-all " +
            (error ? "ring-2 ring-nestly-red" : "")
          }
        >
          <input
            type="email"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value);
              if (error) {
                setError(false);
              }
            }}
            onKeyDown={function (e) {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="Your email here"
            autoComplete="off"
            style={{ backgroundColor: "transparent" }}
            className="newsletter-input bg-transparent outline-none w-full text-sm placeholder-black/60"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-nestly-black rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0 hover:-translate-y-0.5 active:scale-95 transition-all self-end md:self-auto"
        >
          <ArrowDiagonal />
        </button>
      </div>

      {showPopup && (
        <div className="overlay-fade-in fixed inset-0 z-[300] bg-black/70 flex items-center justify-center p-4">
          <div
            onMouseMove={handleModalMouseMove}
            className="modal-bounce-in relative rounded-3xl overflow-hidden max-w-md w-full min-h-[380px] border border-white/20"
          >
            <img
              src="/images/gallery/S9.webp"
              alt=""
              style={{
                transform:
                  "scale(1.15) translate(" + imgOffset.x + "px, " + imgOffset.y + "px)",
                transition: "transform 0.2s ease-out",
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 h-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 gap-4 pointer-events-none">
              <div className="badge-pulse bg-nestly-green rounded-full w-14 h-14 flex items-center justify-center">
                <CheckCircle2 size={28} className="text-black" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl">
                You're on the list!
              </h3>
              <p className="text-white/85 text-sm md:text-base">
                Thanks for signing up with {email}. Keep an eye on your
                inbox for updates from Nestly.
              </p>

              <button
                onClick={closePopup}
                className="pointer-events-auto bg-white text-black rounded-full px-6 py-2.5 font-display font-medium text-sm hover:scale-105 active:scale-95 transition-transform mt-2"
              >
                Got it
              </button>
            </div>

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 hover:rotate-90 rounded-full w-10 h-10 flex items-center justify-center transition-all z-20"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
