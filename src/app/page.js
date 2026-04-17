"use client";

import { useRef } from 'react';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import ServiceCard from '@/components/ServiceCard';
import { Briefcase, Component, Users, ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import AccordionProcess from '@/components/AccordionProcess';
import LightRays from '@/components/LightRays';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef();
  
  useGSAP(() => {
    // Hero Load Animations
    const tl = gsap.timeline();
    tl.from('.hero-title, .hero-subtitle, .hero-actions', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    }).from('.hero-image', {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.6");

    // Service Cards Animations
    gsap.from('.services-grid > div', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Process Steps Animations
    gsap.from('.process-steps .step', {
      scrollTrigger: {
        trigger: '.process-steps',
        start: 'top 85%',
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
            <button className="btn btn-primary">Agenda tu Diagnóstico</button>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ¿Cómo trabajamos? <ArrowRight size={16}/>
            </button>
          </div>
        </div>
        <div className="hero-image" style={{ background: 'linear-gradient(45deg, #18181A, #2a2a35)', position: 'relative', zIndex: 1 }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)' }}>
            [Portrait Image / Illustration]
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Socios que confían en nosotros</p>
      </section>
      <Marquee />

      {/* Services Section */}
      <section id="servicios" className="container section">
        <div style={{ maxWidth: '400px', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Cosas que hacemos para mejorar tu negocio.</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
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

      {/* Process Section */}
      <section id="proceso" className="container section process">
        <h2 className="section-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>Our Way of Work</h2>
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

      {/* CTA Section */}
      <section id="contacto" className="container section">
        <SpotlightCard className="cta" spotlightColor="rgba(144, 187, 240, 0.15)">
          <h2 className="section-title">Agenda tu Diagnóstico Gratuito</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Asegura el crecimiento de tu empresa con el acompañamiento adecuado.
            Desarrollo de tecnología. Expertise centralizado.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Descubre Cómo
          </button>
        </SpotlightCard>
      </section>

      {/* Footer */}
      <footer className="container footer">
        <div className="logo" style={{ fontSize: '1.2rem' }}>BeCom<span className="text-accent">_</span>Advisory</div>
        <div className="footer-links">
          <a href="#" className="nav-link">Instagram</a>
          <a href="#" className="nav-link">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
