export function GradientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-32 top-1/4 h-96 w-96 animate-pulse-slow rounded-full bg-glow/20 blur-[120px]" />
      <div className="absolute -right-24 top-1/2 h-80 w-80 animate-float rounded-full bg-accent/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-[90px]" />
    </div>
  );
}
