export default function Logo({ size = 36, showText = true }) {
  const id = `ltGrad-${size}`;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6c63ff" />
            <stop offset="100%" stopColor="#ff6584" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect width="40" height="40" rx="10" fill={`url(#${id})`} />

        {/* L — vertical bar */}
        <rect x="9" y="9" width="5" height="22" rx="1.5" fill="white" />
        {/* L — horizontal foot */}
        <rect x="9" y="26" width="12" height="5" rx="1.5" fill="white" />

        {/* T — horizontal bar */}
        <rect x="17" y="9" width="14" height="5" rx="1.5" fill="white" />
        {/* T — vertical stem */}
        <rect x="21.5" y="14" width="5" height="17" rx="1.5" fill="white" />
      </svg>

      {showText && (
        <span style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.48,
          color: 'white',
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}>
          LT Studio
        </span>
      )}
    </span>
  );
}
