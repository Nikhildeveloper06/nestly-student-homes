import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const tiers = [
  { id: "kick", name: "Kick Unit", price: "18,000" },
  { id: "boost", name: "Boost Unit", price: "21,000" },
  { id: "flex", name: "Flex Unit", price: "24,000" },
  { id: "vibe", name: "Vibe Unit", price: "27,000" },
];

const tierColors: Record<string, string> = {
  kick: "bg-nestly-blue",
  boost: "bg-nestly-orange",
  flex: "bg-nestly-red",
  vibe: "bg-nestly-purple",
};

const durations = ["6 months", "9 months", "12 months"];
const steps = ["Choose Unit", "Move-in Details", "Your Info", "Confirm"];

const stepImages = [
  "/images/hero/lounge-area.webp",
  "/images/student-living/V1.jpeg",
  "/images/community/V2.jpeg",
  "/images/community/V3.jpeg",
];

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState("boost");
  const [moveInDate, setMoveInDate] = useState("");
  const [duration, setDuration] = useState(durations[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function next() {
    setStep(function (s) {
      return Math.min(s + 1, steps.length - 1);
    });
  }

  function back() {
    setStep(function (s) {
      return Math.max(s - 1, 0);
    });
  }

  function handleConfirm() {
    setSubmitted(true);
  }

  const selectedTierData = tiers.find(function (t) {
    return t.id === selectedTier;
  });

  const progressPercent = (step / (steps.length - 1)) * 100;

  if (submitted) {
    return (
      <div className="bg-nestly-green rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col items-center justify-center text-center min-h-[500px] lg:flex-1 lg:min-h-0">
        <div className="checkmark-pop bg-nestly-black rounded-full w-16 h-16 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-white" />
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-6">
          You're all set!
        </h2>
        <p className="mt-3 text-black/80 max-w-md">
          Thanks, {name || "there"}. Your {selectedTierData?.name} request
          has been received. Our team will reach out at {email || "your email"} within 48 hours to confirm.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/10 rounded-3xl overflow-hidden min-h-[600px] lg:flex-1 lg:min-h-0">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] h-full">
        <div className="hidden lg:block relative">
          {stepImages.map(function (src, i) {
            return (
              <img
                key={src}
                src={src}
                alt=""
                className={
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 " +
                  (i === step ? "opacity-100" : "opacity-0")
                }
              />
            );
          })}
          <div
            key={selectedTier}
            className={tierColors[selectedTier] + " step-pop absolute top-4 left-4 rounded-full px-4 py-2 text-sm font-display font-bold"}
          >
            {selectedTierData?.name}
          </div>
        </div>

        <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 min-h-0">
          <div className="relative flex items-center justify-between mb-6 shrink-0">
            <div className="absolute left-4 right-4 top-4 h-0.5 bg-black/10 -z-0">
              <div
                className="h-full bg-nestly-black transition-all duration-500 ease-out"
                style={{ width: progressPercent + "%" }}
              />
            </div>
            {steps.map(function (label, i) {
              const isActive = i <= step;
              const isCurrent = i === step;
              return (
                <div key={label} className="relative z-10 flex flex-col items-center flex-1">
                  <div
                    key={isCurrent ? "current-" + i : "idle-" + i}
                    className={
                      (isCurrent ? "step-pop " : "") +
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-bold transition-colors duration-500 " +
                      (isActive ? "bg-nestly-black text-white" : "bg-white border-2 border-black/10 text-black/40")
                    }
                  >
                    {i + 1}
                  </div>
                  <span className="text-[11px] mt-2 text-center hidden sm:block">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <div key={step} className="fade-slide-item flex-1 overflow-y-auto min-h-0 pr-1">
            {step === 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl mb-4">Choose your unit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tiers.map(function (tier) {
                    const isSelected = tier.id === selectedTier;
                    return (
                      <button
                        key={tier.id}
                        onClick={function () {
                          setSelectedTier(tier.id);
                        }}
                        className={
                          "rounded-2xl p-5 text-left border-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] " +
                          (isSelected
                            ? tierColors[tier.id] + " border-black scale-[1.02] shadow-md"
                            : "bg-nestly-cream border-transparent hover:border-black/20")
                        }
                      >
                        <p className="font-display font-bold text-lg">{tier.name}</p>
                        <p className="text-sm mt-1">From Rs {tier.price} / month</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display font-bold text-2xl mb-4">Move-in details</h2>
                <div className="flex flex-col gap-6 max-w-md">
                  <div>
                    <label className="text-sm font-medium">Move-in date</label>
                    <input
                      type="date"
                      value={moveInDate}
                      onChange={function (e) {
                        setMoveInDate(e.target.value);
                      }}
                      className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Stay duration</label>
                    <div className="flex gap-2 mt-2">
                      {durations.map(function (d) {
                        const isSelected = d === duration;
                        return (
                          <button
                            key={d}
                            onClick={function () {
                              setDuration(d);
                            }}
                            className={
                              "rounded-full px-4 py-2 text-sm border transition-all duration-300 hover:-translate-y-0.5 active:scale-95 " +
                              (isSelected
                                ? "bg-nestly-black text-white border-nestly-black"
                                : "border-black/30 hover:border-black")
                            }
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display font-bold text-2xl mb-4">Your information</h2>
                <div className="flex flex-col gap-6 max-w-md">
                  <div>
                    <label className="text-sm font-medium">Full name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={function (e) {
                        setName(e.target.value);
                      }}
                      className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={function (e) {
                        setEmail(e.target.value);
                      }}
                      className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={function (e) {
                        setPhone(e.target.value);
                      }}
                      className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display font-bold text-2xl mb-4">Review your request</h2>
                <div className="bg-nestly-cream rounded-2xl p-6 flex flex-col gap-3 max-w-md">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Unit</span>
                    <span className="font-medium">{selectedTierData?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Price</span>
                    <span className="font-medium">Rs {selectedTierData?.price} / month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Move-in date</span>
                    <span className="font-medium">{moveInDate || "Not set"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Duration</span>
                    <span className="font-medium">{duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Name</span>
                    <span className="font-medium">{name || "Not set"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Contact</span>
                    <span className="font-medium">{email || "Not set"}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-6 mt-4 border-t border-black/10 shrink-0">
            <button
              onClick={back}
              disabled={step === 0}
              className="text-sm font-medium px-6 py-3 rounded-full border border-black/30 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black active:scale-95 transition-all"
            >
              Back
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="bg-nestly-black text-white rounded-full px-8 py-3 font-display font-medium hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleConfirm}
                className="bg-nestly-green text-black rounded-full px-8 py-3 font-display font-medium hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
