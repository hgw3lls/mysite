const modes = ['Shelf', 'Map', 'List']

export function ModeTabs({ mode, onModeChange }) {
  return (
    <nav className="mode-tabs" aria-label="Archive navigation modes">
      {modes.map((item) => (
        <button key={item} type="button" className={mode === item ? 'is-active' : ''} onClick={() => onModeChange(item)}>
          {item} Mode
        </button>
      ))}
    </nav>
  )
}
