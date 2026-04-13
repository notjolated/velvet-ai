import HlsVideo from "./HlsVideo";

const CtaFooter = () => (
  <section className="relative overflow-hidden">
    <HlsVideo
      src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1] pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center px-6 py-32">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground leading-[0.85]">
        Your next website starts here.
      </h2>
      <p className="mt-6 text-white/60 font-body font-light text-sm md:text-base max-w-lg">
        Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-foreground font-body">
          Book a Call
        </button>
        <button className="bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium font-body">
          View Pricing
        </button>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-white/10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white/40 text-xs font-body">© 2026 Studio. All rights reserved.</span>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CtaFooter;
