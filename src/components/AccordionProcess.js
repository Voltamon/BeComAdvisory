"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function AccordionProcess({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverImage, setHoverImage] = useState(false);

  // We assign a distinct background gradient to simulate unique images per step
  const images = [
    "linear-gradient(135deg, #082640, #2251FF)",
    "linear-gradient(135deg, #051C2C, #3860BE)",
    "linear-gradient(135deg, #071f33, #00A9F4)",
    "linear-gradient(135deg, #082640, #AAE6F0)",
  ];

  return (
    <div className="accordion-wrapper">
      
      {/* Left side - Accordions */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                backgroundColor: 'transparent',
                padding: '1.5rem 0',
                cursor: 'pointer',
                borderBottom: '1px solid var(--divider)',
                borderTop: index === 0 ? '1px solid var(--divider)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', // Synced H3 font 
                  margin: 0, 
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                   {step.title}
                </h3>
                {isActive ? <Minus size={18} color="var(--text-secondary)"/> : <Plus size={18} color="var(--text-secondary)"/>}
              </div>
              
              {/* CSS Grid Accordion Transition */}
              <div style={{
                display: 'grid',
                gridTemplateRows: isActive ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    paddingTop: '1rem',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}>
                    {/* Inline Image only visible on Mobile */}
                    <div 
                      className="accordion-mobile-image"
                      style={{ background: images[index] }}
                    />
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Right side - Desktop External Image Component */}
      <div className="accordion-desktop-image">
        <div 
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
          style={{
            width: '100%',
            maxWidth: '450px',
            aspectRatio: '1/1', // Clean fixed square aspect
            background: images[activeIndex],
            borderRadius: hoverImage ? '50%' : '16px',
            transition: 'border-radius 0.6s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            cursor: 'cell'
          }}
        >
          {/* Visualizer Image */}
        </div>
      </div>

    </div>
  );
}
