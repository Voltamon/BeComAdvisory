"use client";

import { useRef, useState } from 'react';

export default function ServiceCard({ icon, title, whatWeDo, value }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Smooth magnetic tilt
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div 
      className="card service-card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform, 
        transition: transform === 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' 
          ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease' 
          : 'box-shadow 0.2s ease',
        willChange: 'transform',
        boxShadow: transform !== 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' 
          ? '0 20px 40px rgba(0,0,0,0.4)' 
          : 'none'
      }}
    >
      <div className="service-icon" style={{ pointerEvents: 'none' }}>
        {icon}
      </div>
      <h3 className="service-title" style={{ pointerEvents: 'none' }}>{title}</h3>
      
      {/* Blank gradient image placeholder to be populated later */}
      <div style={{ 
        width: '100%', 
        aspectRatio: '3 / 2', 
        background: 'linear-gradient(135deg, rgba(34,81,255,0.08), rgba(34,81,255,0.02))',
        borderRadius: '12px',
        border: '1px solid rgba(34,81,255,0.08)',
        marginBottom: '1.5rem',
        pointerEvents: 'none'
      }}></div>

      <div style={{ marginBottom: '1.5rem', pointerEvents: 'none' }}>
        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>¿Qué hacemos?</h4>
        <p className="service-p">{whatWeDo}</p>
      </div>
      <div style={{ pointerEvents: 'none' }}>
        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Nuestro valor</h4>
        <p className="service-p">{value}</p>
      </div>
    </div>
  );
}
