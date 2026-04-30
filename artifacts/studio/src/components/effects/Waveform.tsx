type WaveformProps = {
  bars?: number;
  className?: string;
  barClassName?: string;
  speed?: number;
};

export default function Waveform({
  bars = 5,
  className = "",
  barClassName = "",
  speed = 1.2,
}: WaveformProps) {
  return (
    <div
      className={`inline-flex items-end gap-[2px] h-3 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`block w-[2px] h-full origin-bottom bg-primary rounded-full ${barClassName}`}
          style={{
            animation: `waveform-bar ${speed}s ease-in-out ${i * 0.12}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
