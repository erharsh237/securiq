export default function TimelineStep({ id, title, icon: Icon, description, color }) {
  return (
    <div className="timeline-step">
      <div className="timeline-icon-wrap" style={{ borderColor: color, color: color }}>
        {Icon && <Icon size={22} strokeWidth={1.5} />}
      </div>
      <div className="timeline-id">{id}</div>
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-desc">{description}</p>
    </div>
  );
}
