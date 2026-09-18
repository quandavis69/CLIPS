import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Project Gallery | Clips Lawn Care - Bend, OR",
  description: "Real before-and-after photos of lawn care and landscaping projects by Clips Lawn Care in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
