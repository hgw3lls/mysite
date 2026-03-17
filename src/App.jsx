import { useState } from 'react'

const shelves = ['Film', 'Sound', 'Writing', 'Photography', 'Artifacts']

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '32px',
        background: '#f6f3ea',
        color: '#111',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      {!entered ? (
        <section
          style={{
            minHeight: 'calc(100vh - 64px)',
            border: '1px solid #111',
            display: 'grid',
            alignContent: 'center',
            gap: '16px',
            padding: '32px',
          }}
        >
          <p style={{ margin: 0, fontSize: '12px', letterSpacing: '0.14em' }}>ARCHIVE ENTRY</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(42px, 10vw, 104px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            MEDIA ARCHIVE
          </h1>
          <p style={{ margin: 0, fontSize: 'clamp(24px, 4vw, 40px)', textTransform: 'uppercase' }}>name</p>

          <button
            onClick={() => setEntered(true)}
            style={{
              width: 'fit-content',
              marginTop: '8px',
              padding: '10px 18px',
              border: '1px solid #111',
              background: '#f6f3ea',
              color: '#111',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              cursor: 'pointer',
            }}
          >
            Enter Archive
          </button>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
            <span style={{ border: '1px solid #111', padding: '4px 8px', fontSize: '12px', textTransform: 'uppercase' }}>
              ACCESS: OPEN
            </span>
            <span
              style={{
                border: '1px solid #111',
                padding: '4px 8px',
                fontSize: '12px',
                textTransform: 'uppercase',
                color: '#a12424',
              }}
            >
              STATUS: ACTIVE
            </span>
          </div>
        </section>
      ) : (
        <section style={{ border: '1px solid #111', padding: '20px', display: 'grid', gap: '12px' }}>
          <header
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '12px',
              alignItems: 'end',
              borderBottom: '1px solid #111',
              paddingBottom: '12px',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 'clamp(28px, 5vw, 56px)', textTransform: 'uppercase' }}>Archive Shelves</h2>
            <span style={{ fontSize: '12px', letterSpacing: '0.08em', color: '#a12424' }}>SYSTEM GRID V1</span>
          </header>

          {shelves.map((label) => (
            <div
              key={label}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px repeat(6, minmax(0, 1fr))',
                gap: '8px',
                alignItems: 'stretch',
              }}
            >
              <div
                style={{
                  border: '1px solid #111',
                  padding: '10px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  display: 'grid',
                  alignContent: 'center',
                }}
              >
                {label}
              </div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid #111',
                    minHeight: '48px',
                    background: i % 2 === 0 ? '#f1ede3' : '#f6f3ea',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Book
                </div>
              ))}
            </div>
          ))}
        </section>
      )}
    </main>
  )
}
