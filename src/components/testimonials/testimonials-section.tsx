import { Link } from "@tanstack/react-router";
import TestimonialMarquee from "./testimonial-marquee";

export default function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-6 md:pb-32">
      <header className="flex flex-col items-center gap-3 text-center">
        <h2 className="max-w-2xl text-balance font-runde text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Feedback on the original Rare UI project
        </h2>
        <p className="max-w-lg text-balance text-sm font-medium text-muted-foreground sm:text-base">
          These comments were written about Rare UI before this migration. They
          are preserved here with their original wording and attribution.
        </p>
      </header>

      <TestimonialMarquee className="mt-12" />

      <div className="mt-8 flex justify-center">
        <Link
          to="/testimonials"
          className="font-runde text-sm font-semibold text-muted-foreground underline underline-offset-4 transition-colors duration-150 ease-out hover:text-foreground"
        >
          View the original feedback &rarr;
        </Link>
      </div>
    </section>
  );
}
