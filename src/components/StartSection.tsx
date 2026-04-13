import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";
import SectionBadge from "./SectionBadge";

const StartSection = () => (
  <section className="relative overflow-hidden" style={{ minHeight: 500 }}>
    <HlsVideo
      src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Top fade */}
    <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1] pointer-events-none" />
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32" style={{ minHeight: 500 }}>
      <SectionBadge>How It Works</SectionBadge>
      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
        You dream it. We ship it.
      </h2>
      <p className="mt-4 text-white/60 font-body font-light text-sm md:text-base max-w-lg">
        Share your vision. Our AI handles the rest—wireframes, design, code,
        launch. All in days, not quarters.
      </p>
      <button className="mt-8 liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-foreground font-body flex items-center gap-2">
        Get Started <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  </section>
);

export default StartSection;
