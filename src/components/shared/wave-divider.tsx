export function WaveTop({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div className="w-full leading-none" style={{ marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-16 w-full sm:h-24 lg:h-28"
      >
        <path
          d="M0,100 C360,0 720,80 1080,20 C1260,0 1380,10 1440,20 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export function WaveBottom({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div className="w-full leading-none" style={{ marginTop: "-1px" }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-16 w-full sm:h-24 lg:h-28"
      >
        <path
          d="M0,0 C360,80 720,0 1080,50 C1260,70 1380,60 1440,50 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
