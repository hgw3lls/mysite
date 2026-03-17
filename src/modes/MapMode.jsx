const paths = [
  ['R-01', 'R-02'],
  ['R-02', 'R-03'],
  ['R-02', 'R-04'],
  ['R-04', 'R-05'],
]

function getPoint(room, nodes) {
  return nodes.find((node) => node.room === room)?.coordinates ?? { x: 50, y: 50 }
}

export function MapMode({ nodes, activeRecordId, onSelectRecord }) {
  const activeNode = nodes.find((node) => node.records.some((record) => record.id === activeRecordId))

  return (
    <section className="mode-panel map-mode" aria-label="Map mode">
      <div className="grid-overlay" />
      <svg className="nav-paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {paths.map(([a, b]) => {
          const p1 = getPoint(a, nodes)
          const p2 = getPoint(b, nodes)
          return <line key={`${a}-${b}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} />
        })}
      </svg>

      {activeNode ? (
        <div className="you-are-here" style={{ left: `${activeNode.coordinates.x}%`, top: `${activeNode.coordinates.y}%` }}>
          YOU ARE HERE
        </div>
      ) : null}

      {nodes.map((node) => {
        const isActive = node.records.some((record) => record.id === activeRecordId)
        return (
          <button
            key={node.room}
            type="button"
            className={`map-node ${isActive ? 'is-active' : ''}`}
            style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%` }}
            onClick={() => onSelectRecord(node.records[0].id)}
            title={`Room ${node.room} / Open File`}
          >
            <span>Room {node.room}</span>
            <strong>{node.category}</strong>
          </button>
        )
      })}

      <div className="map-legend" aria-label="Map navigation paths">
        <p>Paths</p>
        <ul>
          {paths.map(([from, to]) => (
            <li key={`${from}-${to}`}>
              {from} → {to}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
