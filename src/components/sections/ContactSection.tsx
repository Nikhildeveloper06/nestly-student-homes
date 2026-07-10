function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="black" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
      <path d="M13.5 21v-7.5h2.5l0.5 -3h-3v-1.9c0 -0.9 0.3 -1.6 1.6 -1.6h1.6v-2.7c-0.3 0 -1.3 -0.1 -2.4 -0.1c-2.4 0 -4 1.5 -4 4.1v2.2h-2.7v3h2.7v7.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
      <path d="M6.5 8.5h-3v11h3v-11z" />
      <circle cx="5" cy="5" r="2" />
      <path d="M11.5 8.5h-3v11h3v-5.5c0 -1.5 0.8 -2.5 2.2 -2.5c1.3 0 1.8 0.9 1.8 2.5v5.5h3v-6c0 -3 -1.6 -4.5 -3.9 -4.5c-1.8 0 -2.6 1 -3.1 1.7v-1.2z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="page-enter mt-4">
      <div className="bg-[#07aa3c] rounded-3xl p-4 md:p-6 md:h-[calc(100vh-6.5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="flex flex-col gap-4 h-full">
            <div
              className="stagger-in relative rounded-3xl overflow-hidden flex-1 min-h-[200px] border border-black/10"
              style={{ animationDelay: "0s" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112203.86966298782!2d77.43359437927084!3d28.498485821727773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1783705404196!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
              <span className="absolute top-4 left-4 bg-nestly-orange rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap pointer-events-none">
                Nestly Parkside
              </span>
            </div>

            <div
              className="stagger-in relative bg-[#1ce248] rounded-3xl overflow-hidden flex-1 min-h-[180px] border border-black/10"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="h-full flex flex-col justify-between p-5 pr-[38%] md:pr-[35%]">
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-black">
                  Let's
                  <br />
                  Connect!
                </h2>
                <div className="flex gap-3">
                  <InstagramIcon />
                  <FacebookIcon />
                  <LinkedinIcon />
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-[38%] md:w-[35%] bg-nestly-cream border-l border-black/10 rounded-3xl p-5 flex flex-col justify-between">
                <h3 className="font-display font-bold text-xl md:text-2xl">nestly.</h3>
                <div>
                  <p className="font-display font-bold text-[11px] md:text-xs">hello@nestly.example</p>
                  <p className="font-display font-bold text-[11px] md:text-xs mt-1">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="stagger-in bg-white border border-black/10 rounded-3xl p-5 md:p-6 h-full flex flex-col overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="border border-black rounded-full px-3 py-1.5 w-fit text-xs font-medium inline-block">
              Contact
            </span>

            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-4 leading-tight">
              Any questions?
              <br />
              We're here to answer!
            </h2>
            <p className="mt-2 text-black/70 text-xs md:text-sm">
              Complete the form and our team will contact you shortly.
            </p>

            <form className="mt-4 flex flex-col gap-3 flex-1 min-h-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium">Name *</label>
                  <input
                    type="text"
                    className="w-full border-b border-black/30 focus:border-black outline-none py-1.5 mt-0.5 bg-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Surname *</label>
                  <input
                    type="text"
                    className="w-full border-b border-black/30 focus:border-black outline-none py-1.5 mt-0.5 bg-transparent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium">Email *</label>
                  <input
                    type="email"
                    className="w-full border-b border-black/30 focus:border-black outline-none py-1.5 mt-0.5 bg-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Phone *</label>
                  <input
                    type="tel"
                    className="w-full border-b border-black/30 focus:border-black outline-none py-1.5 mt-0.5 bg-transparent text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 min-h-0 flex flex-col">
                <label className="text-xs font-medium">Message *</label>
                <textarea
                  placeholder="Leave your message here"
                  className="w-full flex-1 border border-black/30 focus:border-black outline-none rounded-xl p-3 mt-0.5 bg-transparent resize-none text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-xs">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-0.5" />
                  <span>
                    I have read and accept the Terms of Use and the
                    Privacy Policy of Nestly.
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-0.5" />
                  <span>
                    I would like to receive news and updates about
                    promotional offers from Nestly.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="bg-nestly-black text-white rounded-full px-6 py-2.5 flex items-center justify-center gap-2 font-display font-medium w-fit self-end text-sm"
              >
                Send
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
