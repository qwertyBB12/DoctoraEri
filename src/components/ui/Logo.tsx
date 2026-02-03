interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(50, 55)">
        {/* Left petal (darkest) */}
        <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="#6B4B5C" transform="rotate(-25)" />
        {/* Middle petal */}
        <ellipse cx="0" cy="-12" rx="16" ry="32" fill="#8B6B7C" transform="rotate(5)" />
        {/* Right petal (largest, lightest) */}
        <ellipse cx="20" cy="-5" rx="22" ry="35" fill="#A88B9C" transform="rotate(25)" />
      </g>
    </svg>
  )
}
