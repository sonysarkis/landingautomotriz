"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    number: "01",
    title: "Transparencia Total",
    text: "Historial verificado, precios sin sorpresas e inspecciones detalladas en cada vehículo.",
  },
  {
    number: "02",
    title: "Atención Personalizada",
    text: "Un asesor dedicado que entiende tus necesidades y te acompaña en todo el proceso.",
  },
  {
    number: "03",
    title: "Calidad Certificada",
    text: "Inspección rigurosa de 120 puntos. Solo los mejores vehículos llegan a nuestro piso.",
  },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-28 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image / Placeholder */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-surface-raised to-surface border border-border">
              {/* 
                ═══════════════════════════════════════════════
                📸 REEMPLAZA este div con tu imagen:
                <img 
                  src="/about/showroom.jpg" 
                  alt="Nuestro showroom" 
                  className="w-full h-full object-cover" 
                />
                ═══════════════════════════════════════════════
              */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-text-muted/20 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={0.6}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z"
                    />
                  </svg>
                  <p className="text-text-muted/40 text-sm">
                    Imagen del showroom
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-2xl" />
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="inline-block text-accent text-xs font-medium tracking-widest uppercase mb-5">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-8 leading-tight">
                Más de 15 Años{" "}
                <span className="text-gradient">
                  Haciendo Realidad
                </span>{" "}
                Sueños
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-12">
                En AutoHaus Premium nos apasiona conectar a cada persona con el
                vehículo perfecto. Nuestra filosofía se sostiene en tres pilares
                que nos distinguen en el mercado.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-8">
              {values.map((value, i) => (
                <div
                  key={value.number}
                  className="reveal flex gap-6"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <span className="text-accent/30 font-heading font-bold text-3xl leading-none mt-1 select-none">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
