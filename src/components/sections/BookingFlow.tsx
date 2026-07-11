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

  if (submitted) {
    return (
      <section className="mt-4">
        <div className="bg-nestly-green rounded-3xl p-10 md:p-16 flex flex-col items-center text-center">
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
      </section>
    );
  }

  return (
    <section className="mt-4">
      <div className="bg-white border border-black/10 rounded-3xl overflow-hidden h-[640px] md:h-[680px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] h-full">
          <div className="hidden md:block relative">
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
            <div className={tierColors[selectedTier] + " absolute top-4 left-4 rounded-full px-4 py-2 text-sm font-display font-bold"}>
              {selectedTierData?.name}
            </div>
          </div>

          <div className="flex flex-col h-full p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 shrink-0">
              {steps.map(function (label, i) {
                const isActive = i <= step;
                return (
                  <div key={label} className="flex-1 flex items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-bold transition-colors duration-500 " +
                          (isActive ? "bg-nestly-black text-white" : "bg-black/10 text-black/40")
                        }
                      >
                        {i + 1}
                      </div>
                      <span className="text-[11px] mt-2 text-center hidden sm:block">
                        {label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={
                          "h-0.5 flex-1 -mt-5 transition-colors duration-500 " +
                          (i < step ? "bg-nestly-black" : "bg-black/10")
                        }
                      />
                    )}
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
                            "rounded-2xl p-5 text-left border-2 transition-all duration-300 " +
                            (isSelected
                              ? tierColors[tier.id] + " border-black scale-[1.02]"
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
                        className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
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
                                "rounded-full px-4 py-2 text-sm border transition-colors duration-300 " +
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
                        className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
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
                        className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
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
                        className="w-full border-b border-black/30 focus:border-black outline-none py-2 mt-1 bg-transparent"
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
                className="text-sm font-medium px-6 py-3 rounded-full border border-black/30 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black transition-colors"
              >
                Back
              </button>

              {step < steps.length - 1 ? (
                <button
                  onClick={next}
                  className="bg-nestly-black text-white rounded-full px-8 py-3 font-display font-medium"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleConfirm}
                  className="bg-nestly-green text-black rounded-full px-8 py-3 font-display font-medium"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
