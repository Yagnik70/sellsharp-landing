import React from "react";
import {
  Bot,
  User,
  Sliders,
  Zap,
  BarChart3,
  Star
} from "lucide-react";

type Offer = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const offers: Offer[] = [
  {
    title: "AI Email Generator",
    description:
      "Create persuasive emails instantly with trained AI that mimics top sales performers.",
    icon: <Bot className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Smart Personalization",
    description:
      "Auto-inserts for names, roles, industries, and intents help boost relevance and reply rates.",
    icon: <User className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Tone & Style Control",
    description:
      "Choose between friendly, persuasive, or direct tones for each stage of your sales funnel.",
    icon: <Sliders className="w-8 h-8 text-blue-600" />
  },
  {
    title: "1-Click Campaigns",
    description:
      "Launch entire sequences with one click—great for product announcements or follow-ups.",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Performance Analytics",
    description:
      "Track opens, clicks, and conversions to continuously improve what works.",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Lead Scoring AI",
    description:
      "Identify hot prospects with AI that scores leads based on behavior and engagement history.",
    icon: <Star className="w-8 h-8 text-blue-600" />
  }
];

const Offers = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-3">
          What We Offer
        </h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Supercharge your sales outreach with AI-crafted emails,
          predictive targeting, and intelligent automation.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                {offer.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {offer.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
