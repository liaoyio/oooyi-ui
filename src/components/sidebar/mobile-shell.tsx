"use client";

import { useRouterState } from "@tanstack/react-router";
import { activeComponent } from "@/lib/components";
import { cn } from "@/lib/cn";
import MobileSidebar from "./mobile-sidebar";
import DescriptionContent from "../description/description-content";
import SourceSection from "../description/source-section";

const CARD = "rounded-[32px] bg-card";

export default function MobileShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const item = activeComponent(pathname);

  return (
    <div className="no-scrollbar h-full overflow-y-auto">
      <div className="flex flex-col gap-2 pb-2">
        <div className={cn(CARD, "relative h-[88svh] shrink-0 p-4")}>
          <MobileSidebar />
          {children}
        </div>

        <div className={cn(CARD, "p-6")}>
          <DescriptionContent item={item} showSourceHint={false} />
        </div>

        {item?.registry && (
          <div className={cn(CARD, "p-6")}>
            <SourceSection key={item.registry} registry={item.registry} />
          </div>
        )}
      </div>
    </div>
  );
}
