import HlsVideo from "./HlsVideo";

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

const Stats = () => (
  <section className="relative overflow-hidden py-24">
    <HlsVideo
      src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "saturate(0)" }}
    />
    <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1] pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none" />

    <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="liquid-glass rounded-3xl p-12 md:p-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground">{value}</div>
              <div className="mt-2 text-white/60 font-body font-light text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
