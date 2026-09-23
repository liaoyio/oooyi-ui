import { TESTIMONIALS } from "@/lib/testimonials";
import { cn } from "@/lib/cn";
import TestimonialCard from "./testimonial-card";

export default function TestimonialWall({ className }: { className?: string }) {
  return (
    <div className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.handle} testimonial={testimonial} />
      ))}
    </div>
  );
}
