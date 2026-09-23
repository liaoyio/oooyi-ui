"use client";

import { type ComponentItem, PANEL_INFO } from "@/lib/components";
import { cn } from "@/lib/cn";
import PanelCode from "./panel-code";
import InstallCommand from "./install-command";
import DependencyPill from "./dependency-pill";
import PropsTable from "./props-table";

type DescriptionContentProps = {
  item?: ComponentItem;
  showSourceHint?: boolean;
  className?: string;
};

function SectionLabel({
  as: Tag = "p",
  children,
}: {
  as?: "p" | "h1" | "h2";
  children: React.ReactNode;
}) {
  return (
    <Tag className="text-xs font-medium uppercase tracking-normal text-foreground/40">
      {children}
    </Tag>
  );
}

export default function DescriptionContent({
  item,
  showSourceHint = true,
  className,
}: DescriptionContentProps) {
  return (
    <div className={cn("flex flex-col gap-12 text-left", className)}>
      <div className="flex flex-col gap-4">
        <SectionLabel as="h1">{item?.name ?? "Component"}</SectionLabel>
        <p className="text-2xl font-semibold leading-relaxed font-sans text-foreground/90">
          {item?.description ?? "This component is not available yet."}
        </p>
      </div>

      {item?.dependencies && item.dependencies.length > 0 && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">Dependencies</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {item.dependencies.map((dep) => (
              <DependencyPill key={dep.name} name={dep.name} icon={dep.icon} />
            ))}
          </div>
        </div>
      )}

      {item?.interaction && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">Interaction Type</SectionLabel>
          <p className="text-sm leading-relaxed text-foreground/70">
            {item.interaction}
          </p>
        </div>
      )}

      {item?.props && item.props.length > 0 && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">Props</SectionLabel>
          <p className="-mt-1 text-sm leading-relaxed text-foreground/70">
            Options you can pass to customize this component.
          </p>
          <PropsTable props={item.props} />
        </div>
      )}

      {item?.registry && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">Installation</SectionLabel>
          <InstallCommand item={item} />
        </div>
      )}

      {item?.usage && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">How to use</SectionLabel>
          <PanelCode code={item.usage} className="rounded-lg p-4" />
        </div>
      )}

      {item?.registry && showSourceHint && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">Source Code</SectionLabel>
          <p className="text-sm leading-relaxed text-foreground/70">
            {PANEL_INFO.sourceHint}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <SectionLabel as="h2">Keep in mind</SectionLabel>
        <p className="text-sm leading-relaxed text-foreground/70">
          {PANEL_INFO.keepInMind}
        </p>
      </div>

      {item?.credits && item.credits.length > 0 && (
        <div className="flex flex-col gap-3">
          <SectionLabel as="h2">Credits</SectionLabel>

          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/70">
            {item.credits.map((credit) => (
              <li key={credit} className="flex gap-2">
                <span className="text-foreground/40">•</span>
                <span>{credit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <SectionLabel as="h2">Contact</SectionLabel>
        <p className="text-sm leading-relaxed text-foreground/70">
          {PANEL_INFO.contactNote}
        </p>
        <a
          href={PANEL_INFO.contactUrl}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-sm text-foreground underline underline-offset-4"
        >
          Open GitHub issues
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <SectionLabel as="h2">License &amp; Usage</SectionLabel>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/70">
          {PANEL_INFO.license.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-foreground/40">•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
