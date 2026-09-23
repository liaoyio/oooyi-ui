import { Outlet, createFileRoute } from "@tanstack/react-router";
import SidebarShell from "@/components/Sidebar/SidebarShell";

export const Route = createFileRoute("/components/_docs")({
  component: ComponentsLayout,
});

function ComponentsLayout() {
  return (
    <div className="h-screen overflow-hidden bg-background p-2">
      <SidebarShell>
        <Outlet />
      </SidebarShell>
    </div>
  );
}
