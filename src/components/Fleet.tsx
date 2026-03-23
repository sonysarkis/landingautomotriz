"use client";

import { useEffect, useRef } from "react";

const vehicles = [
  {
    name: "Mercedes-Benz C300",
    year: "2024",
    price: "$52,900",
    tag: "Nuevo",
    image: null,
  },
  {
    name: "BMW Serie 3",
    year: "2024",
    price: "$48,500",
    tag: "Nuevo",
    image: null,
  },
  {
    name: "Audi A4",
    year: "2023",
    price: "$44,200",
    tag: "Seminuevo",
    image: null,
  },
  {
    name: "Porsche Cayenne",
    year: "2023",
    price: "$89,900",
    tag: "Seminuevo",
    image: null,
  },
  {
    name: "Range Rover Sport",
    year: "2024",
    price: "$95,000",
    tag: "Nuevo",
    image: null,
  },
  {
    name: "Tesla Model 3",
    year: "2024",
    price: "$42,800",
    tag: "Nuevo",
    image: null,
  },
];

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="fleet" ref={sectionRef} className="py-12 sm:py-16 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] glow-accent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-block text-accent text-xs font-medium tracking-widest uppercase mb-5">
              Nuestra Flota
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
              Vehículos{" "}
              <span className="text-gradient">Seleccionados</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-outline rounded-full px-6 py-2.5 text-sm whitespace-nowrap self-start sm:self-auto"
          >
            Ver Todos →
          </a>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, i) => (
            <div
              key={vehicle.name}
              className="reveal glass-card rounded-2xl overflow-hidden group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-surface-raised to-surface overflow-hidden">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-text-muted/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={0.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.121l-1.689-1.69a4.5 4.5 0 00-3.182-1.318H9.75a1.5 1.5 0 00-1.5 1.5v8.25m10.5-1.5H18"
                      />
                    </svg>
                  </div>
                )}
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-wide bg-accent/90 text-background rounded-full">
                  {vehicle.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary text-lg">
                      {vehicle.name}
                    </h3>
                    <span className="text-text-muted text-sm">
                      {vehicle.year}
                    </span>
                  </div>
                  <span className="text-accent font-heading font-bold text-lg whitespace-nowrap">
                    {vehicle.price}
                  </span>
                </div>
                <div className="h-px bg-border my-4" />
                <a
                  href="#contact"
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  Solicitar Info
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note for user */}
        {/* 
          ═══════════════════════════════════════════════════════════════
          📸 PARA AGREGAR TUS IMÁGENES:
          
          1. Coloca tus fotos en: public/vehicles/
          2. En este archivo, cambia "image: null" por la ruta:
             image: "/vehicles/nombre-del-archivo.jpg"
          
          Ejemplo:
            image: "/vehicles/mercedes-c300.jpg"
          ═══════════════════════════════════════════════════════════════
        */}
      </div>
    </section>
  );
}
