import { createFileRoute } from "@tanstack/react-router";
import FolderIcon from "@/components/ui/folder-component";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/folder-component")({
  head: () => pageHead({ title: "Folder Component", robots: "noindex" }),
  component: FolderComponent,
});

function FolderComponent() {
  return (
    <div className="flex h-screen items-center justify-center">
      <FolderIcon color="black" size="md" />
    </div>
  );
}
