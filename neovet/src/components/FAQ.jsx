import { useState } from "react";

/**
 * Componente FAQ - Acordeón simple y accesible
 * Props opcionales:
 *  - items: array de { question, answer } (si no se pasa, se usan las preguntas de ejemplo)
 */
export default function FAQ({ items }) {
  const defaultItems = [
    {
      question: "¿Cómo agendo una consulta a domicilio?",
      answer:
        "Podés agendar enviando un mensaje por WhatsApp o usando el formulario de contacto. Indicá nombre, mascota, raza y síntomas brevemente.",
    },
    {
      question: "¿Atienden urgencias oncológicas?",
      answer:
        "Realizamos evaluaciones y derivaciones urgentes cuando el caso lo requiere. Contactanos para que podamos indicarte el mejor procedimiento.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos efectivo y transferencias. Pronto habilitaremos otras opciones digitales. Consultanos el día de la cita si necesitás factura.",
    },
    {
      question: "¿Hacen seguimiento post-tratamiento?",
      answer:
        "Sí: ofrecemos controles de seguimiento y asesoramiento para manejar efectos secundarios, controles periódicos y recomendaciones veterinarias.",
    },
  ];

  const faqItems = items && items.length ? items : defaultItems;

  // index del item abierto; null si ninguno
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(idx) {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }

  return (
    <section className="faq" aria-label="Preguntas frecuentes">
      <div className="faq__inner">
        <h2 className="faq__title">Preguntas frecuentes</h2>

        <ul className="faq__list" role="list">
          {faqItems.map((it, idx) => {
            const isOpen = openIndex === idx;
            return (
              <li className="faq__item" key={idx}>
                <h3>
                  <button
                    type="button"
                    className={`faq__trigger ${isOpen ? "is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-trigger-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => {
                      // soporte Enter / Space
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(idx);
                      }
                    }}
                  >
                    <span className="faq__question">{it.question}</span>

                    <span
                      className="faq__icon"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className={`faq__panel ${isOpen ? "is-open" : ""}`}
                >
                  <p className="faq__answer">{it.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
