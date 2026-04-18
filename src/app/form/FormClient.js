"use client";

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import { Check, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function FormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    investment: '',
    date: null,
    time: null
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const container = useRef();

  useGSAP(() => {
    gsap.from('.form-section', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = [];
    
    // Add day labels
    ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].forEach(d => {
      days.push(<div key={`label-${d}`} className="calendar-day-label">{d}</div>);
    });

    // Add empty slots for first week
    const firstDay = firstDayOfMonth(year, month);
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day disabled"></div>);
    }

    // Add actual days
    const totalDays = daysInMonth(year, month);
    const today = new Date();
    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(year, month, d);
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isActive = formData.date?.toDateString() === date.toDateString();
      const isToday = date.toDateString() === today.toDateString();

      days.push(
        <div 
          key={d} 
          className={`calendar-day ${isPast ? 'disabled' : ''} ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => !isPast && setFormData({ ...formData, date })}
        >
          {d}
        </div>
      );
    }

    return days;
  };

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  return (
    <main ref={container} style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Header />
      
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
        <Link href="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
        
        <div className="form-container">
          <header className="form-section" style={{ marginBottom: '4rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Agenda tu Diagnóstico Estratégico</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
              Ayúdanos a entender tu situación actual para que nuestra reunión sea lo más productiva posible.
            </p>
          </header>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-section">
              <h2 className="form-label">Información Básica</h2>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Nombre Completo" 
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Correo Electrónico" 
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Nombre de tu Empresa / Emprendimiento" 
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="form-section" style={{ marginTop: '4rem' }}>
              <h2 className="form-label">Desafíos y Objetivos</h2>
              <div className="form-group">
                <textarea 
                  placeholder="¿Cuál es el principal desafío que tu negocio enfrenta hoy?" 
                  className="form-textarea"
                  rows={2}
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                />
              </div>
            </div>

            <div className="form-section" style={{ marginTop: '4rem' }}>
              <h2 className="form-label">Selecciona una Fecha y Hora</h2>
              
              <div className="scheduling-wrapper">
                {/* Calendar Column */}
                <div className="calendar-container" style={{ margin: 0 }}>
                  <div className="calendar-header">
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                      {currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
                    </span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button onClick={handlePrevMonth} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        <ChevronLeft size={20} />
                      </button>
                      <button onClick={handleNextMonth} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="calendar-grid">
                    {renderCalendar()}
                  </div>
                </div>

                {/* Times Column */}
                <div className="times-section">
                  <h3 className="form-label" style={{ fontSize: '0.8rem', opacity: formData.date ? 1 : 0.5 }}>
                    {formData.date ? `Horarios para el ${formData.date.toLocaleDateString('es-ES')}` : 'Selecciona una fecha primero'}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginTop: '1rem' }}>
                    {timeSlots.map(time => {
                      const isDisabled = !formData.date;
                      const isSelected = formData.time === time;
                      
                      return (
                        <button 
                          key={time}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => setFormData({ ...formData, time })}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            border: '1px solid var(--divider)',
                            background: isSelected ? 'var(--accent)' : 'transparent',
                            color: isSelected ? '#000' : 'var(--text-secondary)',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            opacity: isDisabled ? 0.3 : 1,
                            transition: 'all 0.2s',
                            fontSize: '0.9rem',
                            textAlign: 'center'
                          }}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {!formData.date && (
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                      Los horarios se habilitarán al elegir un día.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="form-section" style={{ marginTop: '4rem' }}>
              <h2 className="form-label">Inversión y Compromiso</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                ¿Están en una posición de considerar una inversión en consultoría para resolver este desafío?
              </p>
              <div className="radio-group">
                {['Sí, estamos listos', 'Tal vez, depende de la propuesta', 'Por ahora solo buscamos información'].map(option => (
                  <label key={option} className="radio-option">
                    <input 
                      type="radio" 
                      name="investment" 
                      value={option}
                      checked={formData.investment === option}
                      onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                    />
                    <span className="radio-dot"></span>
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-section" style={{ marginTop: '6rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }}
                disabled={!formData.name || !formData.date || !formData.time}
              >
                Confirmar y Agendar
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="container footer">
        <div className="logo">
          <img src="/imagotipo_primario_blanco.png" alt="BeCom Advisory Logo" style={{ height: '36px', width: 'auto' }} />
        </div>
        <div className="footer-links">
          <a href="#" className="nav-link">Instagram</a>
          <a href="#" className="nav-link">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
