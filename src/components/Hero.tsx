"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "2,500+", label: "Vehículos Vendidos" },
  { value: "15+", label: "Años de Experiencia" },
  { value: "98%", label: "Clientes Satisfechos" },
];

export default function Hero() {
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
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -right-32 w-[600px] h-[600px] glow-accent opacity-60"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="reveal mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-muted border border-accent/10 text-accent text-xs font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Concesionario Premium
            </span>
          </div>

          {/* Headline */}
          <h1
            className="reveal text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-text-primary leading-[1.1] mb-8"
            style={{ transitionDelay: "100ms" }}
          >
            Tu Próximo Vehículo
            <br />
            <span className="text-gradient">Te Está Esperando</span>
          </h1>

          {/* Subtitle */}
          <p
            className="reveal text-text-secondary text-lg sm:text-xl leading-relaxed mb-12 max-w-xl"
            style={{ transitionDelay: "200ms" }}
          >
            Explora nuestra colección exclusiva de vehículos premium y
            seminuevos certificados. Financiamiento personalizado y atención
            de primer nivel.
          </p>

          {/* CTAs */}
          <div
            className="reveal flex flex-col sm:flex-row gap-4 mb-20"
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="#contact"
              className="btn-primary rounded-full px-10 py-4 text-base tracking-wide text-center"
            >
              Solicitar Cotización
            </a>
            <a
              href="#fleet"
              className="btn-outline rounded-full px-10 py-4 text-base tracking-wide text-center"
            >
              Ver Inventario
            </a>
          </div>

          {/* Stats */}
          <div
            className="reveal flex flex-wrap gap-12 sm:gap-16"
            style={{ transitionDelay: "400ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
