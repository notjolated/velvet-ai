const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
    {children}
  </h2>
);

export default SectionHeading;
