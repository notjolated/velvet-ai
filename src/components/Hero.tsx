import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import BlurText from "./BlurText";

const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

const Hero = () => (
  <section className="relative overflow-visible" style={{ height: 1000 }}>
    {/* Background video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute left-0 w-full h-auto object-contain z-0"
      style={{ top: "20%" }}
      poster="/images/hero_bg.jpeg"
    >
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        type="video/mp4"
      />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/5 z-0" />

    {/* Bottom gradient */}
    <div
      className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
      style={{
        height: 300,
        background: "linear-gradient(to bottom, transparent, black)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center" style={{ paddingTop: 150 }}>
      {/* Badge */}
      <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8">
        <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold font-body">
          New
        </span>
        <span className="text-foreground text-xs font-body pr-3">
          Introducing AI-powered web design.
        </span>
      </div>

      {/* Heading */}
      <BlurText
        text="The Website Your Brand Deserves"
        className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px]"
        delay={100}
      />

      {/* Subtext */}
      <motion.p
        className="mt-6 text-sm md:text-base text-foreground font-body font-light leading-tight max-w-md"
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Stunning design. Blazing performance. Built by AI, refined by experts.
        This is web design, wildly reimagined.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex items-center gap-4"
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-foreground font-body flex items-center gap-2">
          Get Started <ArrowUpRight className="h-4 w-4" />
        </button>
        <button className="text-sm font-medium text-foreground font-body flex items-center gap-2">
          <Play className="h-4 w-4 fill-current" /> Watch the Film
        </button>
      </motion.div>

      {/* Partners */}
      <div className="mt-auto pt-16 pb-8 flex flex-col items-center gap-6">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body">
          Trusted by the teams behind
        </div>
        <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
          {partners.map((name) => (
            <span
              key={name}
              className="text-2xl md:text-3xl font-heading italic text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
