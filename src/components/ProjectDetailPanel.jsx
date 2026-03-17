export function ProjectDetailPanel({ record, onReturn }) {
  return (
    <aside className="detail-panel" aria-live="polite">
      <p className="panel-label">DOSSIER / RECORD</p>
      <h2>{record.title}</h2>
      <p className="detail-meta">
        <span>Record {record.id}</span> · <span>{record.category}</span> · <span>{record.year}</span>
      </p>
      <p>{record.description}</p>

      <dl>
        <dt>Status</dt>
        <dd>{record.status}</dd>
        <dt>Access</dt>
        <dd>{record.access}</dd>
        <dt>Room</dt>
        <dd>{record.location.room}</dd>
        <dt>Shelf</dt>
        <dd>{record.location.shelf}</dd>
        <dt>Type</dt>
        <dd>{record.type}</dd>
      </dl>

      <h3>Media</h3>
      <ul>
        {record.media.map((item) => (
          <li key={item.label}>
            {item.kind}: {item.label}
          </li>
        ))}
      </ul>

      <h3>Links</h3>
      <ul>
        {record.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <h3>Fragments</h3>
      <ul>
        {(record.fragments ?? []).map((fragment) => (
          <li key={`${fragment.kind}-${fragment.title}`}>
            [{fragment.kind}] {fragment.title}
          </li>
        ))}
      </ul>

      <button type="button" onClick={onReturn} className="return-btn">
        Return to Archive
      </button>
    </aside>
  )
}
