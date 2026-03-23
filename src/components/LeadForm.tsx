"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function LeadForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setErrorMsg("Por favor, completa todos los campos.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Por favor, ingresa un correo electrónico válido.");
      setStatus("error");
      return;
    }

    const phoneRegex = /^[\d\s\-+()]{7,20}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMsg("Por favor, ingresa un número de teléfono válido.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "" });
    } catch {
      setErrorMsg(
        "Hubo un error al enviar tu información. Por favor, inténtalo de nuevo."
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 relative"
      ref={sectionRef}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] glow-accent opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] glow-accent opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Info */}
          <div className="reveal">
            <span className="inline-block text-accent text-xs font-medium tracking-widest uppercase mb-5">
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-8 leading-tight">
              ¿Listo Para Encontrar{" "}
              <span className="text-gradient">Tu Auto Ideal?</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-12">
              Déjanos tus datos y uno de nuestros asesores se pondrá en contacto
              contigo en menos de 24 horas con opciones personalizadas para ti.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                }
                label="Teléfono"
                value="+1 (555) 123-4567"
              />
              <ContactItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                }
                label="Correo"
                value="info@autohaus.com"
              />
              <ContactItem
                icon={
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </>
                }
                label="Ubicación"
                value="Tu Dirección Aquí, Ciudad"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              {status === "success" ? (
                /* ─── Success State ─────────────────────── */
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/20">
                    <svg
                      className="w-10 h-10 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                    ¡Gracias por tu interés!
                  </h3>
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    Hemos recibido tu información. Un asesor se pondrá en
                    contacto contigo muy pronto.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-accent hover:text-accent-light transition-colors text-sm font-medium"
                  >
                    Enviar otra consulta →
                  </button>
                </div>
              ) : (
                /* ─── Form State ───────────────────────── */
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                      Solicita Tu Cotización
                    </h3>
                    <p className="text-text-muted text-sm">
                      Completa tus datos y te contactaremos con las mejores
                      opciones.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-sm text-text-secondary mb-2"
                      >
                        Nombre completo{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        placeholder="Ej: Juan Pérez"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="form-input w-full rounded-xl px-5 py-3.5 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-sm text-text-secondary mb-2"
                      >
                        Correo electrónico{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        placeholder="Ej: juan@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="form-input w-full rounded-xl px-5 py-3.5 text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="block text-sm text-text-secondary mb-2"
                      >
                        Número de celular{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        required
                        placeholder="Ej: +1 555 123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="form-input w-full rounded-xl px-5 py-3.5 text-sm"
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-xl border border-red-400/10">
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full btn-primary rounded-xl py-4 text-base tracking-wide flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Solicitud
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-text-muted mt-2 leading-relaxed">
                      Al enviar, aceptas que nos comuniquemos contigo para
                      brindarte información sobre nuestros vehículos.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Info Item ──────────────────────────────── */

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center flex-shrink-0">
        <svg
          className="w-5 h-5 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {icon}
        </svg>
      </div>
      <div>
        <div className="text-xs text-text-muted mb-0.5">{label}</div>
        <div className="text-text-primary text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
