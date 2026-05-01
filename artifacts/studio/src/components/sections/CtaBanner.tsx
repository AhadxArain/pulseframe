import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-12 sm:py-14">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-xl font-display">
            Ready to Make Some Noise?
          </h2>
          <Link href="/contact">
            <span className="group inline-flex items-center gap-3 bg-black text-white font-display font-semibold uppercase tracking-widest text-[13px] px-7 py-4 min-h-[52px] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer whitespace-nowrap shrink-0">
              Get a Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
