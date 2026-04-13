import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import SectionBadge from "./SectionBadge";
import SectionHeading from "./SectionHeading";

const features = [
  { icon: Zap, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy." },
  { icon: Palette, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable." },
  { icon: BarChart3, title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance. Results you can measure." },
  { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included." },
];

const FeaturesGrid = () => (
  <section className="px-6 md:px-16 py-24">
    <div className="text-center mb-16">
      <SectionBadge>Why Us</SectionBadge>
      <div className="mt-4">
        <SectionHeading>The difference is everything.</SectionHeading>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {features.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="liquid-glass rounded-2xl p-6">
          <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <Icon className="h-5 w-5 text-foreground" />
          </div>
          <h3 className="text-foreground font-body font-semibold text-sm mb-2">{title}</h3>
          <p className="text-white/60 font-body font-light text-sm">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesGrid;
