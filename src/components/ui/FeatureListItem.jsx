export default function FeatureListItem({ icon: Icon, title, description, borderNone = false }) {
  return (
    <div className={`safety-list-item ${borderNone ? 'border-none' : ''}`}>
      <div className="safety-icon-wrap small">
        {Icon && <Icon size={16} />}
      </div>
      <div className="safety-list-text">
        <h4 className="safety-title-small">{title}</h4>
        <p className="safety-desc-small">{description}</p>
      </div>
    </div>
  );
}
