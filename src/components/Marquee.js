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

  const partners = [
    "LOGONAME", "Acme Corp", "TechFlow", "VenturePartners", "InnovateX", "NextGen",
    "LOGONAME", "Acme Corp", "TechFlow", "VenturePartners", "InnovateX", "NextGen",
  ];

  useGSAP(() => {
    // Basic continuous scrolling based on viewport scrub
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
  }, { scope: container });

  return (
    <div className="marquee-wrapper" ref={container}>
      <div className="marquee-content" ref={content} style={{ width: "max-content", display: "flex" }}>
        {partners.map((partner, index) => (
          <h4 key={index}>{partner}</h4>
        ))}
      </div>
    </div>
  );
}
