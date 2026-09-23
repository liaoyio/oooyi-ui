import { components } from "@/lib/components";
import type { Pageviews } from "@/lib/databuddy";

// a decimal reads as precision on small counts and as noise past 100 of a unit
function formatCount(value: number) {
  if (value < 1000) return `${value}`;
  const [divisor, unit] =
    value >= 1_000_000 ? ([1_000_000, "M"] as const) : ([1000, "K"] as const);
  const scaled = value / divisor;
  const shown =
    scaled >= 100 ? Math.floor(scaled) : Math.floor(scaled * 10) / 10;
  return `${shown}${unit}+`;
}

export default function SponsorStats({
  stars,
  pageviews,
}: {
  stars: number | null;
  pageviews: Pageviews;
}) {
  const isLive = pageviews.lastMonth != null || pageviews.sinceLaunch != null;

  const STATS = [
    {
      value: stars != null ? formatCount(stars) : "—",
      label: "GitHub stars",
    },
    { value: String(components.length), label: "Components" },
    { value: "Free", label: "To install" },
    ...(pageviews.lastMonth != null
      ? [{ value: formatCount(pageviews.lastMonth), label: "Pageviews last month" }]
      : []),
    ...(pageviews.sinceLaunch != null
      ? [{ value: formatCount(pageviews.sinceLaunch), label: "Pageviews since launch" }]
      : []),
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-20 sm:px-6 md:pt-28">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 rounded-3xl bg-card/60 px-4 py-8 text-center last:col-span-2 dark:bg-muted/60 sm:px-6 sm:py-9 lg:last:col-span-4"
            style={{ cornerShape: "squircle" } as React.CSSProperties}
          >
            <span className="font-runde text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {stat.value}
            </span>
            <span className="text-balance text-xs font-medium text-muted-foreground sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {isLive && (
        <p className="mt-4 text-center text-xs font-medium text-muted-foreground">
          Aggregate pageviews for ooOYi UI. Updated hourly.
        </p>
      )}
    </section>
  );
}
