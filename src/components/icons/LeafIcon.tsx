export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M5 21c9 0 14-7 14-14-7 0-14 5-14 14z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
