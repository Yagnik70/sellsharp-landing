import React from "react";
import {
  Laptop,
  Users,
  Briefcase,
  ShoppingCart,
  User,
  Building2
} from "lucide-react";

type WorkItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const workItems: WorkItem[] = [
  {
    title: "For SaaS Products",
    description:
      "Deliver onboarding, updates, and retention flows automatically with seamless AI-powered workflows.",
    icon: <Laptop className="w-10 h-10 text-blue-600" />
  },
  {
    title: "For Sales Teams",
    description:
      "Accelerate outreach with AI-generated, context-aware emails at scale.",
    icon: <Users className="w-10 h-10 text-blue-600" />
  },
  {
    title: "For Agencies",
    description:
      "Automate content workflows for multiple clients without compromising personalization.",
    icon: <Briefcase className="w-10 h-10 text-blue-600" />
  },
  {
    title: "For E-Commerce",
    description:
      "Recover carts, upsell, and reactivate customers on autopilot.",
    icon: <ShoppingCart className="w-10 h-10 text-blue-600" />
  },
  {
    title: "For Freelancers",
    description:
      "Land more gigs with polished outreach and consistent follow-ups.",
    icon: <User className="w-10 h-10 text-blue-600" />
  },
  {
    title: "For Enterprise Ops",
    description:
      "Ensure compliance, localization, and brand consistency at global scale.",
    icon: <Building2 className="w-10 h-10 text-blue-600" />
  }
];

const OurWork = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase mb-2">
            Our Work
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold mb-3">
            Solutions Designed to Deliver Results
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SellSharp adapts to every business model — see how it fits yours.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {workItems.map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 flex gap-4 hover:shadow-md transition"
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
