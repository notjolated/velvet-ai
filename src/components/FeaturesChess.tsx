import SectionBadge from "./SectionBadge";
import SectionHeading from "./SectionHeading";
import feature1 from "@/assets/feature-1.gif";
import feature2 from "@/assets/feature-2.gif";

const rows = [
  {
    title: "Designed to convert. Built to perform.",
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.",
    cta: "Learn more",
    gif: feature1,
    reverse: false,
  },
  {
    title: "It gets smarter. Automatically.",
    body: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.",
    cta: "See how it works",
    gif: feature2,
    reverse: true,
  },
];

const FeaturesChess = () => (
  <section className="px-6 md:px-16 py-24">
    <div className="text-center mb-16">
      <SectionBadge>Capabilities</SectionBadge>
      <div className="mt-4">
        <SectionHeading>Pro features. Zero complexity.</SectionHeading>
      </div>
    </div>

    <div className="space-y-24 max-w-6xl mx-auto">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center gap-12 ${row.reverse ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl md:text-3xl font-heading italic text-foreground leading-tight">
              {row.title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base">
              {row.body}
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-foreground font-body">
              {row.cta}
            </button>
          </div>
          <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
            <img src={row.gif} alt={row.title} className="w-full h-auto" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesChess;
