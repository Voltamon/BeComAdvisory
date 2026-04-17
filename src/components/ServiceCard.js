export default function ServiceCard({ icon, title, whatWeDo, value }) {
  return (
    <div className="card">
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>¿Qué hacemos?</h4>
        <p className="service-p">{whatWeDo}</p>
      </div>
      <div>
        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Nuestro valor</h4>
        <p className="service-p">{value}</p>
      </div>
    </div>
  );
}
