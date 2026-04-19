"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Marquee() {
  const container = useRef();
  const content = useRef();

  const basePartners = [
    "/partners/Bi_Bi.png", "/partners/Bloomea.png", "/partners/Chuz_Rentals.png",
    "/partners/ET_interiors.png", "/partners/Oma.png", "/partners/nua_nuts.png"
  ];
  const partners = [...basePartners, ...basePartners, ...basePartners];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop/Laptop: Scrub animation driven by scroll position
    mm.add("(min-width: 768px)", () => {
      gsap.to(content.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // smoothen the scrub
        }
      });
    });

    // Mobile: Autonomous continuous infinite loop
    mm.add("(max-width: 767px)", () => {
      gsap.to(content.current, {
        xPercent: -50,
        ease: "none",
        duration: 15, // Smooth infinite scroll pacing
        repeat: -1,
      });
    });

    return () => mm.revert(); // Clean up matchMedia on unmount
  }, { scope: container });

  return (
    <div className="marquee-wrapper" ref={container}>
      <div className="marquee-content" ref={content} style={{ width: "max-content", display: "flex" }}>
        {partners.map((partner, index) => {
          const partnerName = partner.split('/').pop().replace('.png', '').replace('_', ' ');
          return (
            <img 
              key={index} 
              src={partner} 
              alt={`Logo de ${partnerName} - Socio estratégico de BeCom Advisory`} 
              style={{ height: '64px', opacity: 0.7 }} 
            />
          );
        })}
      </div>
    </div>
  );
}
