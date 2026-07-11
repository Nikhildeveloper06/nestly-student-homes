import { useState } from "react";
import { MapPin, Clock, Plus, X } from "lucide-react";

export type Role = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
};

export const roles: Role[] = [
  {
    title: "Property Field Staff (PF Boys)",
    department: "Operations",
    location: "On-site, multiple properties",
    type: "Full-time",
    description:
      "The day-to-day backbone of our properties - handling deliveries, move-in support, and general on-ground assistance for residents.",
    responsibilities: [
      "Support resident move-ins and move-outs",
      "Assist with parcel handling and basic errands",
      "Report maintenance issues to the property team",
      "Keep common areas presentable throughout the day",
    ],
  },
  {
    title: "Property Manager",
    department: "Operations",
    location: "On-site, per property",
    type: "Full-time",
    description:
      "Owns the day-to-day running of a Nestly property - from occupancy and vendor coordination to resident satisfaction.",
    responsibilities: [
      "Manage occupancy, renewals and unit turnover",
      "Coordinate with maintenance and housekeeping teams",
      "Handle resident escalations with empathy and speed",
      "Report on property performance to operations lead",
    ],
  },
  {
    title: "Community Manager",
    department: "Community",
    location: "On-site, per property",
    type: "Full-time",
    description:
      "Designs and runs the events, rituals and small moments that turn a building full of strangers into an actual community.",
    responsibilities: [
      "Plan and host monthly social and wellness events",
      "Build relationships with residents from move-in day",
      "Gather resident feedback and share with operations",
      "Manage community social media presence locally",
    ],
  },
  {
    title: "Housekeeping Staff",
    department: "Operations",
    location: "On-site, multiple properties",
    type: "Full-time / Part-time",
    description:
      "Keeps shared spaces spotless and units move-in ready, quietly making every property feel cared for.",
    responsibilities: [
      "Clean and maintain common areas daily",
      "Prepare units for new resident move-ins",
      "Report supply shortages and equipment issues",
      "Follow safety and hygiene protocols consistently",
    ],
  },
  {
    title: "Maintenance Technician",
    department: "Operations",
    location: "On-site, multiple properties",
    type: "Full-time",
    description:
      "Handles everything from a leaking tap to a flickering light - keeping units and shared spaces fully functional.",
    responsibilities: [
      "Respond to maintenance tickets within SLA",
      "Perform routine inspections and preventive upkeep",
      "Coordinate with external vendors when needed",
      "Maintain accurate repair and inventory logs",
    ],
  },
  {
    title: "Security Staff",
    department: "Operations",
    location: "On-site, multiple properties",
    type: "Full-time, shift-based",
    description:
      "Keeps residents safe around the clock through access control, patrols, and calm, professional presence.",
    responsibilities: [
      "Monitor entry points and verify visitor access",
      "Conduct scheduled night patrols",
      "Respond to incidents and escalate appropriately",
      "Maintain accurate shift and incident logs",
    ],
  },
  {
    title: "Sales & Leasing Executive",
    department: "Sales",
    location: "Hybrid",
    type: "Full-time",
    description:
      "The first real conversation most students have with Nestly - guiding them from inquiry to signed lease.",
    responsibilities: [
      "Handle inbound inquiries and property tours",
      "Convert leads into confirmed bookings",
      "Maintain accurate CRM records of every lead",
      "Hit monthly leasing and occupancy targets",
    ],
  },
  {
    title: "Customer Support Specialist",
    department: "Support",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "The calm, helpful voice residents reach out to for anything from billing questions to move-in logistics.",
    responsibilities: [
      "Respond to resident queries across chat, email and phone",
      "Resolve billing and account issues promptly",
      "Escalate operational issues to the right team",
      "Maintain a high resident satisfaction score",
    ],
  },
  {
    title: "Marketing Associate",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Tells the Nestly story across digital channels and helps students discover us in the first place.",
    responsibilities: [
      "Plan and execute social media content calendars",
      "Support performance marketing and lead campaigns",
      "Coordinate photo and video shoots at properties",
      "Track campaign performance and report insights",
    ],
  },
  {
    title: "Operations Associate",
    department: "Operations",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Works across properties to streamline processes, solve operational bottlenecks, and support scaling.",
    responsibilities: [
      "Support onboarding of new properties and staff",
      "Identify and fix recurring operational issues",
      "Build and maintain internal process documentation",
      "Coordinate cross-functionally with all departments",
    ],
  },
];

const departments = ["All", "Operations", "Community", "Sales", "Support", "Marketing"];

export default function CareersOpenRoles() {
  const [activeDept, setActiveDept] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredRoles = roles.filter(function (role) {
    return activeDept === "All" || role.department === activeDept;
  });

  function toggle(i: number) {
    setOpenIndex(function (prev) {
      return prev === i ? null : i;
    });
  }

  return (
    <section className="mt-4">
      <div className="text-center mb-4">
        <h2 className="font-display font-bold text-2xl md:text-4xl">
          Open roles
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {departments.map(function (dept) {
          const isActive = dept === activeDept;
          return (
            <button
              key={dept}
              onClick={function () {
                setActiveDept(dept);
                setOpenIndex(null);
              }}
              className={
                "rounded-full px-4 py-2 text-sm font-medium border transition-all duration-300 " +
                (isActive
                  ? "bg-nestly-black text-white border-nestly-black"
                  : "border-black/20 hover:border-black")
              }
            >
              {dept}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {filteredRoles.map(function (role, i) {
          const isOpen = openIndex === i;
          return (
            <button
              key={role.title}
              onClick={function () {
                toggle(i);
              }}
              className={
                "text-left border rounded-3xl p-5 md:p-6 transition-colors duration-300 " +
                (isOpen ? "bg-nestly-cream border-black" : "border-black/20 hover:border-black")
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-nestly-blue uppercase tracking-wide">
                    {role.department}
                  </p>
                  <p className="font-display font-bold text-lg md:text-xl mt-1">
                    {role.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-black/60">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {role.type}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 mt-1 transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
                  {isOpen ? <X size={24} strokeWidth={2.5} /> : <Plus size={24} strokeWidth={2.5} />}
                </span>
              </div>

              <div
                className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 mt-4 border-t border-black/10">
                    <p className="text-sm text-black/80">{role.description}</p>
                    <p className="font-display font-semibold text-sm mt-4">
                      What you'll do
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {role.responsibilities.map(function (item) {
                        return (
                          <li key={item} className="text-sm text-black/70 flex items-start gap-2">
                            <span className="text-nestly-blue mt-1">•</span>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
