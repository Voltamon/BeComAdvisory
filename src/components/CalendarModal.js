"use client";

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ryDRUSi_aKFRVGN93D_cvY4KKGf4V7M05E3_p7RLjuCVHCclYrNzsM_gA5jHC5NjiIXvvS06X?hl=es";

export default function CalendarModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  // Open animation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(panelRef.current,
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.05 }
      );
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(panelRef.current, { y: 20, opacity: 0, scale: 0.97, duration: 0.25, ease: 'power2.in' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: onClose });
  };

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Agenda tu Diagnóstico"
    >
      <div ref={panelRef} className="modal-panel">
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Agenda tu Diagnóstico Gratuito</h2>
            <p className="modal-subtitle">Selecciona la fecha y hora que mejor te funcione.</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Embedded Calendar */}
        <div className="modal-iframe-wrapper">
          <iframe
            src={CALENDAR_URL}
            style={{ border: 0, colorScheme: 'light' }}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Agenda tu cita con BeCom Advisory"
          />
        </div>
      </div>
    </div>
  );
}
