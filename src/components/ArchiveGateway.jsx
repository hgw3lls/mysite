export function ArchiveGateway({ onEnter }) {
  return (
    <section className="gateway">
      <p className="gateway__status">ACCESS: READY</p>
      <h1>MEDIA ARCHIVE</h1>
      <p className="gateway__descriptor">Record system / artist-research environment</p>
      <button type="button" onClick={onEnter}>
        Enter Archive
      </button>
      <small>STATUS: PUBLIC INDEX / CONTROLLED FILE ACCESS</small>
    </section>
  )
}
