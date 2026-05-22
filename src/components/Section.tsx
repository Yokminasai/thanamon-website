import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-light tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-silver leading-relaxed">{subtitle}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
