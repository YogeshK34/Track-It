export function BackgroundShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top-right shape */}
      <div
        className="absolute -right-[10%] -top-[5%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"
        aria-hidden="true"
      />
      {/* Bottom-left shape */}
      <div
        className="absolute -left-[10%] top-[40%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl"
        aria-hidden="true"
      />
      {/* Additional decorative elements */}
      <div className="absolute inset-x-0 top-0 h-[1000px] grid grid-cols-3 gap-8 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative h-full transform rounded-full bg-gradient-to-br from-primary to-primary/60 blur-3xl"
            style={{
              transform: `rotate(${i * 45}deg)`,
              opacity: 0.1 + i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
