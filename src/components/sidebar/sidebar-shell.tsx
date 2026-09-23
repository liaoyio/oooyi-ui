"use client";

import { useIsMobile } from "@/lib/use-media-query";
import DesktopShell from "./desktop-shell";
import MobileShell from "./mobile-shell";
import { PreviewControlsProvider } from "../preview/preview-controls";

export default function SidebarShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <PreviewControlsProvider>
      {isMobile ? (
        <MobileShell>{children}</MobileShell>
      ) : (
        <DesktopShell>{children}</DesktopShell>
      )}
    </PreviewControlsProvider>
  );
}
