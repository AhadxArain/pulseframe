const ITEMS = [
  "50+ PROJECTS DELIVERED",
  "3+ YEARS IN THE INDUSTRY",
  "100% CUSTOM MADE",
  "AUDIO · VIDEO · 3D · BILLBOARD",
  "US-BASED · AVAILABLE WORLDWIDE",
];

function Track() {
  return (
    <>
      {ITEMS.map((text, i) => (
        <span key={i} className="inline-flex items-center gap-5 flex-shrink-0">
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-white/90 whitespace-nowrap">
            {text}
          </span>
          <span className="text-primary text-[9px] flex-shrink-0">✦</span>
        </span>
      ))}
    </>
  );
}

export default function StatsTickerBar() {
  return (
    <div className="w-full h-[46px] sm:h-[50px] bg-[#111] overflow-hidden flex items-center border-y border-white/[0.05]">
      <div
        className="flex items-center gap-5 w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  );
}
