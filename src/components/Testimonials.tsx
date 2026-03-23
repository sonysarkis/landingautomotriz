"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Empresario",
    rating: 5,
    text: "Encontré mi BMW ideal en menos de una semana. El proceso de financiamiento fue transparente y rápido. La atención personalizada marcó la diferencia.",
  },
  {
    name: "Ana Rodríguez",
    role: "Ejecutiva de Marketing",
    rating: 5,
    text: "Excelente servicio postventa. Llevo dos años con mi Audi y el equipo de mantenimiento siempre me atiende con profesionalismo y rapidez.",
  },
  {
    name: "Miguel Torres",
    role: "Ingeniero",
    rating: 5,
    text: "Compré un seminuevo certificado y está impecable. La inspección de 120 puntos realmente se nota. Totalmente recomendado.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      className="py-12 sm:py-16 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-accent text-xs font-medium tracking-widest uppercase mb-5">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Lo Que Dicen{" "}
            <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestro mejor indicador.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-card rounded-2xl p-8 flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-accent/20 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <p className="text-text-secondary leading-relaxed mb-8 flex-1 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">
                      {t.name}
                    </div>
                    <div className="text-text-muted text-xs">{t.role}</div>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
