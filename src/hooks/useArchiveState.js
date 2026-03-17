import { useMemo, useState } from 'react'
import { archiveRecords } from '../data/archiveRecords'
import { getCategoryShelves, getRoomNodes } from '../utils/archiveSelectors'

export function useArchiveState() {
  const [mode, setMode] = useState('Shelf')
  const [entered, setEntered] = useState(false)
  const [activeRecordId, setActiveRecordId] = useState(archiveRecords[0]?.id ?? null)

  const shelves = useMemo(() => getCategoryShelves(archiveRecords), [])
  const mapNodes = useMemo(() => getRoomNodes(archiveRecords), [])

  const activeRecord = useMemo(
    () => archiveRecords.find((record) => record.id === activeRecordId) ?? archiveRecords[0],
    [activeRecordId],
  )

  return {
    mode,
    setMode,
    entered,
    setEntered,
    records: archiveRecords,
    shelves,
    mapNodes,
    activeRecord,
    setActiveRecordId,
  }
}
