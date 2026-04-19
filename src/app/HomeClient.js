"use client";

import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import ServiceCard from '@/components/ServiceCard';
import { Briefcase, Component, Users, ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import AccordionProcess from '@/components/AccordionProcess';
import LightRays from '@/components/LightRays';
import CalendarModal from '@/components/CalendarModal';
import BorderGlow from '@/components/BorderGlow';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeClient() {
  const container = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  useGSAP(() => {
    // Hero Load Animations
    const tl = gsap.timeline();
    tl.from('.hero-title', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power4.out'
    })
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.6")
    .from('.hero-actions', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, "-=0.4")
    .from('.hero-image', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out'
    }, "-=0.8");

    // Section Headers
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // Services Stagger
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    });
    
    // CTA Animation
    gsap.from('.cta', {
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top 80%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

  }, { scope: container });

  return (
    <main ref={container}>
      <Header />

      {/* Hero Section */}
      <section className="container hero" style={{ position: 'relative' }}>
        <LightRays
          raysColor="#ffffff"
          raysOrigin="top-center"
          className="hero-rays"
        />
        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title">
            El Ecosistema <span className="text-accent">Centralizado</span> para el Crecimiento Empresarial.
          </h1>
          <p className="hero-subtitle">
            Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado.
            Únete a las mejores compañías allá afuera.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={openModal} aria-label="Abrir calendario para agendar un diagnóstico gratuito">Agenda tu Diagnóstico</button>
            <a href="#proceso" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              ¿Cómo trabajamos? <ArrowRight size={16}/>
            </a>
          </div>
        </div>
        <div className="hero-image" style={{ background: 'linear-gradient(135deg, #082640 0%, #051C2C 100%)', border: '1px solid rgba(34,81,255,0.12)', position: 'relative', zIndex: 1 }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(34,81,255,0.15)' }}>
            <span className="sr-only">Ilustración representativa de estrategia y tecnología empresarial</span>
            [Portrait Image / Illustration]
          </div>
        </div>
      </section>

      {/* Logos label — NAVY */}
      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Socios que confían en nosotros</p>
      </section>

      {/* Partner Belt — LIGHT, original black logos */}
      <div className="section-light">
        <Marquee />
      </div>

      {/* Approach Section — NAVY */}
      <section className="container section">
        <div className="approach-grid">
          <div className="approach-column">
            <h3>Diseñado para tu Empresa</h3>
            <p>Nuestro valor reside en nuestra capacidad de ser el motor de cambio.</p>
            <p>
              No solo asesoramos, sino que <strong>diseñamos e implementamos soluciones a la medida</strong>, 
              asegurando que cada estrategia se traduzca en resultados reales.
            </p>
            <p>
              Con <strong>BeCom Advisory</strong>, obtienes un socio que entiende tus desafíos y te ayuda a alcanzar tus metas, sin importar tu tamaño o sector.
            </p>
          </div>
          <div className="approach-column">
            <h3>Operamos con un enfoque dual</h3>
            <p>
              <strong>Para startups y PyMEs:</strong> Somos el socio estratégico que brinda estructura y guía para que tu negocio no solo crezca, sino que lo haga de forma sostenible.
            </p>
            <p>
              <strong>Para empresas consolidadas:</strong> Funcionamos como una Oficina de Gestión de Proyectos (PMO) externa. Lideramos y ejecutamos proyectos clave, asegurando una implementación impecable y la entrega de resultados concretos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section — LIGHT */}
      <div className="section-light">
        <section id="servicios" className="container section">
          <div style={{ maxWidth: '600px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem', color: 'var(--section-light-primary)' }}>Cosas que hacemos para mejorar tu negocio.</h2>
            <p style={{ color: 'var(--section-light-secondary)' }}>
              Eliminamos el riesgo al centralizar el expertise que necesitas.
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard 
              icon={<Briefcase size={24}/>}
              title="Consultoría Estratégica"
              whatWeDo="Proporcionamos una visión 360 inicial en Business Development y Project Management para mapear las necesidades de tu empresa."
              value="Aseguramos que los proyectos y las soluciones estén alineados con los objetivos de crecimiento a largo plazo."
            />
            <ServiceCard 
              icon={<Component size={24}/>}
              title="Servicios de Tecnología"
              whatWeDo="Soluciones digitales esenciales (Web, Apps, ERP, CRM, Software) bajo la dirección estratégica."
              value="Garantizamos que la infraestructura digital del negocio sea moderna, eficiente y cohesiva con la estrategia global de la empresa."
            />
            <ServiceCard 
              icon={<Users size={24}/>}
              title="Red de Expertos Vetted"
              whatWeDo="Te damos acceso instantáneo a expertos de nicho, validados y curados (Legal, Fiscal, RH, Finanzas, Ventas, etc.)"
              value="Eliminamos el riesgo y la pérdida de tiempo al centralizar el expertise bajo la seguridad de BeCom."
            />
          </div>
        </section>
      </div>

      {/* Process Section */}
      <section id="proceso" className="container section process">
        <h2 className="section-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>Nuestra Forma de Trabajar</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', textAlign: 'left', maxWidth: '600px' }}>
          Con una metodología 'pull-and-execute' y una misión clara: Convertir la complejidad de los negocios en un plan de acción claro y efectivo.
        </p>

        <AccordionProcess 
          steps={[
            { title: "01 Diagnóstico Estratégico", description: "Se realiza una breve reunión para entender la visión, los desafíos y los objetivos globales de la empresa en Business Development y Project Management." },
            { title: "02 Prescripción e Integración", description: "Identificamos la solución requerida: Servicios de tecnología, consultorías especializadas de la red, entregas o capacitaciones en Project Management." },
            { title: "03 Ejecución Integral", description: "Ejecutamos proyectos integrales en donde aseguramos que los proyectos y las soluciones tecnológicas estén alineados con los objetivos de crecimiento a largo plazo del negocio." },
            { title: "04 Revisión y Seguimiento", description: "Se realiza el seguimiento del proyecto, convirtiéndonos en un socio estratégico que convierte un proyecto único en una relación a largo plazo para el crecimiento y éxito continuo de la empresa." }
          ]}
        />
      </section>

      {/* CTA Section — LIGHT wrapper, NAVY card */}
      <div className="section-light">
        <section id="contacto" className="container section">
          <BorderGlow 
            animated={true}
            glowIntensity={0.8}
            glowRadius={8}
            edgeSensitivity={20}
          >
            <SpotlightCard className="cta cta-navy" spotlightColor="rgba(255, 255, 255, 0.06)">
              <h2 className="section-title">Agenda tu Diagnóstico Gratuito</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Asegura el crecimiento de tu empresa con el acompañamiento adecuado.
                Desarrollo de tecnología. Expertise centralizado.
              </p>
              <button className="btn btn-primary" onClick={openModal} style={{ padding: '1rem 3rem', fontSize: '1.1rem' }} aria-label="Descubre cómo agendar tu diagnóstico gratuito">
                Descubre Cómo
              </button>
            </SpotlightCard>
          </BorderGlow>
        </section>
      </div>

      {/* Footer */}
      <footer className="container footer">
        <div className="logo">
          <img src="/imagotipo_primario_blanco.png" alt="BeCom Advisory - Consultoría y Estrategia" style={{ height: '36px', width: 'auto' }} />
        </div>
        <div className="footer-links">
          <a href="#" className="nav-link" rel="me">Instagram</a>
          <a href="#" className="nav-link" rel="me">LinkedIn</a>
        </div>
      </footer>
      <CalendarModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
