"use client";

import React from "react";

const HabitatSection = () => {
  const steps = [
    {
      title: "Bewuchs entfernen",
      description:
        "Nach gemeinsamer Planung und Standortfestlegung wird die Fläche vorbereitet. Dazu wird der Bewuchs entfernt und möglichst abtransportiert oder an anderer Stelle zwischengelagert."
    },
    {
      title: "Graben und Füllen",
      description:
        "An der gewünschten Stelle wird auf einer Fläche von etwa einem Quadratmeter der Boden bis zu einer Tiefe von 70 cm ausgehoben. Drainageschicht aus kleineren Steinen, wasserdurchlässiges Vlies, Lehm-Sand schichtweise verdichten."
    },
    {
      title: "Steilwand aufbauen",
      description:
        "Hügel am nördlichsten Punkt mit Südausrichtung bauen. Steilwand modellieren. Hügel und Grube überschneiden sich. Keine Wasseransammlungen, natürlicher Charakter mit Steinen/Wurzeln."
    },
    {
      title: "Bodentypen schaffen",
      description:
        "Nährstoffarme Flächen (Steine + Erde), durchlässige Flächen (Erde + Sand) für unterschiedliche Bienenarten und Grabwespen."
    },
    {
      title: "Bepflanzung & Dekoration",
      description:
        "Größere Steine zur Einfassung, Totholz, heimische Pflanzen einpflanzen. Ein Steingarten ist kein Schottergarten!"
    }
  ];

  return (
    <section className="habitat-section">
      <div className="habitat-container">
        <h2 className="habitat-title">Wildbieneninsel bauen</h2>
        <p className="habitat-subtitle">
          Schritt-für-Schritt Anleitung für ein InNature-Projekt
        </p>

        <div className="habitat-steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="habitat-step-card">
              <div className="habitat-step-number">{index + 1}</div>
              <h3 className="habitat-step-title">{step.title}</h3>
              <p className="habitat-step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="habitat-tips">
          <h4 className="habitat-tips-title">💡 Wichtige Hinweise</h4>
          <ul className="habitat-tips-list">
            <li>Sonnig, trocken, nach Süden ausgerichtet</li>
            <li>Offene Bodenflächen für Nistlöcher lassen</li>
            <li>Kein Schottergarten – natürlicher Charakter</li>
            <li>Erste Bewohner ziehen oft schon im Folgejahr ein</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HabitatSection;
