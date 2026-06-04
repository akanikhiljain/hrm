type IconProps = {
  className?: string;
};

export function LogoIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="#F5E6D8" strokeWidth="1.8" />
      <path
        d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7"
        stroke="#F5E6D8"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="19" cy="8" r="2.5" stroke="#4A7A68" strokeWidth="1.5" />
      <path
        d="M22 18c0-2.761-1.343-5-3-5"
        stroke="#4A7A68"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ServiceIcon({
  index,
  className = "h-6 w-6",
}: IconProps & { index: number }) {
  const stroke = index % 2 === 0 ? "#2C4A3E" : "#C97D4E";
  const common = {
    className,
    fill: "none",
    stroke,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const icons = [
    <svg key="employee" {...common}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>,
    <svg key="payroll" {...common}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M7 15h2M13 15h4" strokeLinecap="round" />
    </svg>,
    <svg key="attendance" {...common}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1" fill={stroke} />
      <circle cx="12" cy="15" r="1" fill={stroke} />
      <circle cx="16" cy="15" r="1" fill={stroke} />
    </svg>,
    <svg key="performance" {...common}>
      <path d="M3 19V8l9-5 9 5v11" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="13" width="6" height="6" rx="1" />
    </svg>,
    <svg key="recruitment" {...common}>
      <path
        d="M21 13V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6m18 0v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m18 0H3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 12v4m-2-2h4" strokeLinecap="round" />
    </svg>,
    <svg key="learning" {...common}>
      <path d="M12 2 2 7l10 5 10-5-10-5z" strokeLinejoin="round" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}
