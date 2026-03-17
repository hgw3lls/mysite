import { useState } from 'react'

const shelves = ['Film', 'Sound', 'Writing', 'Photography', 'Artifacts']
const slotsPerShelf = 6

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <main className="app-shell">
      {!entered ? (
        <section className="entry-panel" aria-labelledby="archive-title">
          <p className="eyebrow">Archive Entry</p>
          <h1 id="archive-title" className="entry-title">
            Media Archive
          </h1>
          <p className="entry-name">name</p>

          <button type="button" onClick={() => setEntered(true)} className="button-outline">
            Enter Archive
          </button>

          <div className="status-list">
            <span className="status-pill">Access: Open</span>
            <span className="status-pill status-pill--alert">Status: Active</span>
          </div>
        </section>
      ) : (
        <section className="shelf-panel" aria-label="Archive shelves">
          <header className="shelf-header">
            <h2 className="shelf-title">Archive Shelves</h2>
            <span className="system-label">System Grid v1</span>
          </header>

          {shelves.map((label) => (
            <div key={label} className="shelf-row">
              <div className="shelf-label">{label}</div>
              {Array.from({ length: slotsPerShelf }).map((_, i) => (
                <div key={`${label}-${i}`} className="shelf-slot">
                  Book
                </div>
              ))}
            </div>
          ))}

          <button type="button" onClick={() => setEntered(false)} className="button-outline back-button">
            Back to Entry
          </button>
        </section>
      )}
    </main>
  )
}
