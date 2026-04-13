import SectionBadge from "./SectionBadge";
import SectionHeading from "./SectionHeading";

const testimonials = [
  { quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.", name: "Sarah Chen", role: "CEO, Luminary" },
  { quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.", name: "Marcus Webb", role: "Head of Growth, Arcline" },
  { quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.", name: "Elena Voss", role: "Brand Director, Helix" },
];

const Testimonials = () => (
  <section className="px-6 md:px-16 py-24">
    <div className="text-center mb-16">
      <SectionBadge>What They Say</SectionBadge>
      <div className="mt-4">
        <SectionHeading>Don't take our word for it.</SectionHeading>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map(({ quote, name, role }) => (
        <div key={name} className="liquid-glass rounded-2xl p-8">
          <p className="text-white/80 font-body font-light text-sm italic mb-6">"{quote}"</p>
          <div className="text-foreground font-body font-medium text-sm">{name}</div>
          <div className="text-white/50 font-body font-light text-xs">{role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
