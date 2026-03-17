import { ArchiveGateway } from './components/ArchiveGateway'
import { ModeTabs } from './components/ModeTabs'
import { ProjectDetailPanel } from './components/ProjectDetailPanel'
import { ShelfMode } from './modes/ShelfMode'
import { MapMode } from './modes/MapMode'
import { ListMode } from './modes/ListMode'
import { useArchiveState } from './hooks/useArchiveState'

export default function App() {
  const {
    mode,
    setMode,
    entered,
    setEntered,
    records,
    shelves,
    mapNodes,
    activeRecord,
    setActiveRecordId,
  } = useArchiveState()

  if (!entered) {
    return <ArchiveGateway onEnter={() => setEntered(true)} />
  }

  return (
    <main className="archive-shell">
      <header className="topbar">
        <p>MEDIA ARCHIVE SYSTEM</p>
        <h1>Archive Index / Artist Research Records</h1>
      </header>

      <ModeTabs mode={mode} onModeChange={setMode} />

      <section className="workspace">
        {mode === 'Shelf' && (
          <ShelfMode shelves={shelves} activeRecordId={activeRecord.id} onSelectRecord={setActiveRecordId} />
        )}
        {mode === 'Map' && <MapMode nodes={mapNodes} activeRecordId={activeRecord.id} onSelectRecord={setActiveRecordId} />}
        {mode === 'List' && <ListMode records={records} activeRecordId={activeRecord.id} onSelectRecord={setActiveRecordId} />}
      </section>

      <ProjectDetailPanel record={activeRecord} onReturn={() => setEntered(false)} />
    </main>
  )
}
