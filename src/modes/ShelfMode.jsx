export function ShelfMode({ shelves, activeRecordId, onSelectRecord }) {
  return (
    <section className="mode-panel shelf-mode" aria-label="Shelf mode">
      {shelves.map((shelf) => (
        <article key={shelf.category} className="shelf-row">
          <header>
            <span>{shelf.shelf}</span>
            <strong>{shelf.category}</strong>
          </header>
          <div className="spines" role="list">
            {shelf.items.map((record) => (
              <button
                key={record.id}
                type="button"
                role="listitem"
                className={activeRecordId === record.id ? 'is-active' : ''}
                onClick={() => onSelectRecord(record.id)}
                title={`Open File: ${record.title}`}
              >
                <span>{record.id.toUpperCase()}</span>
                <small>{record.year}</small>
                <em>Open File</em>
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
