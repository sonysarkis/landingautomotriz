"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="reveal relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent" />
          <div className="absolute inset-0 border border-accent/10 rounded-3xl" />

          <div className="relative px-8 sm:px-16 py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4 leading-tight">
                No Dejes Pasar{" "}
                <span className="text-gradient">Esta Oportunidad</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Nuestro inventario se actualiza constantemente. Solicita tu
                cotización hoy y asegura el vehículo de tus sueños.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary rounded-full px-10 py-4 text-base tracking-wide whitespace-nowrap flex-shrink-0"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
