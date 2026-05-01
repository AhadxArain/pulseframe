const CLIENTS = [
  "NEXUS MEDIA",
  "BLACKOUT FILMS",
  "VERTX AGENCY",
  "ECHO BRANDS",
  "PULSE CREATIVE",
  "IRONWAVE CO",
];

function Track() {
  return (
    <>
      {CLIENTS.map((name, i) => (
        <span key={i} className="inline-flex items-center gap-6 flex-shrink-0">
          <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.22em] text-white/60 hover:text-white/100 transition-colors duration-300 cursor-default select-none uppercase">
            {name}
          </span>
          <span className="text-primary text-[8px] flex-shrink-0">◆</span>
        </span>
      ))}
    </>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-10 sm:py-12 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 mb-8">
        <p className="text-[10px] tracking-[0.22em] uppercase text-primary font-semibold">
          Trusted By
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div
          className="flex items-center gap-6 w-max"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          <Track />
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
