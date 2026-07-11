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

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        <div className="bg-nestly-red rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-center">
          <span className="font-display font-bold text-base md:text-lg whitespace-nowrap">
            Join our newsletter
          </span>
        </div>

        <div className="flex gap-3 md:flex-1">
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
              className="bg-transparent outline-none w-full text-sm placeholder-black/60"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-nestly-black rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <ArrowDiagonal />
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-[300] bg-black/70 flex items-center justify-center p-4">
          <div className="checkmark-pop relative rounded-3xl overflow-hidden max-w-md w-full min-h-[360px] border border-white/20">
            <img
              src="/images/gallery/S9.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="relative z-10 h-full min-h-[360px] flex flex-col items-center justify-center text-center p-8 gap-4">
              <div className="bg-nestly-green rounded-full w-14 h-14 flex items-center justify-center">
                <CheckCircle2 size={28} className="text-black" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl">
                You're on the list!
              </h3>
              <p className="text-white/85 text-sm md:text-base">
                Thanks for signing up with {email}. Keep an eye on your
                inbox for updates from Nestly.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
