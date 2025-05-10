

const ImpactResults = () => {
  const stats = [
    {
      value: "250+",
      title: "Happy Clients",
      desc: "Businesses served across various industries with tailored digital strategies.",
    },
    {
      value: "500+",
      title: "Campaigns Managed",
      desc: "SEO, Google Ads, and social campaigns delivering measurable ROI.",
    },
    {
      value: "120K+",
      title: "Social Engagements",
      desc: "Likes, comments & shares from optimized Facebook and Instagram posts.",
    },
    {
      value: "60K+",
      title: "Followers Gained",
      desc: "Audience growth via content strategy, paid ads, and engagement boosts.",
    },
    {
      value: "4X",
      title: "Revenue Growth",
      desc: "Clients experienced up to 4X business growth through smart marketing funnels.",
    },
    {
      value: "15K+",
      title: "Leads Generated",
      desc: "High-converting landing pages and funnels delivering real business results.",
    },
    {
      value: "1000+",
      title: "SEO Rankings Improved",
      desc: "Keywords pushed to Google’s first page with proven SEO techniques.",
    },
    {
      value: "95%",
      title: "Client Retention Rate",
      desc: "Long-term partnerships built on trust and consistent performance.",
    },
    {
      value: "200K+",
      title: "Ad Impressions",
      desc: "Managed Meta and Google Ads for massive visibility and conversions.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16" id="impact">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          <span className="text-blue-600">#</span> Impact & Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <h3 className="text-4xl font-bold text-green-500">{stat.value}</h3>
              <p className="mt-2 text-xl font-semibold text-gray-800">{stat.title}</p>
              <p className="mt-1 text-gray-600 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactResults;
