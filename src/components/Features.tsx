const features = [
  {
    title: "Conversation Intelligence",
    description: "Automatically analyze sales calls and meetings."
  },
  {
    title: "Performance Tracking",
    description: "Track individual and team sales performance."
  },
  {
    title: "Actionable Insights",
    description: "AI recommendations to improve deal success."
  }
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-10">
          Features
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded shadow"
            >
              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
