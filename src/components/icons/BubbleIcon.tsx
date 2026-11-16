export function BubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="10" cy="12" r="6" />
      <circle cx="17" cy="7" r="2" />
    </svg>
  );
}
