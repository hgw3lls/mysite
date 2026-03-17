const mapCoordinates = {
  'R-01': { x: 18, y: 25 },
  'R-02': { x: 42, y: 18 },
  'R-03': { x: 73, y: 29 },
  'R-04': { x: 29, y: 55 },
  'R-05': { x: 58, y: 61 },
}

export function getCategoryShelves(records) {
  const grouped = new Map()

  records.forEach((record) => {
    const key = record.category
    if (!grouped.has(key)) {
      grouped.set(key, [])
    }
    grouped.get(key).push(record)
  })

  return [...grouped.entries()].map(([category, items]) => ({
    category,
    shelf: items[0].location.shelf,
    room: items[0].location.room,
    items,
  }))
}

export function getRoomNodes(records) {
  const grouped = new Map()

  records.forEach((record) => {
    const key = record.location.room
    if (!grouped.has(key)) {
      grouped.set(key, [])
    }
    grouped.get(key).push(record)
  })

  return [...grouped.entries()].map(([room, items]) => ({
    room,
    category: items[0].category,
    records: items,
    coordinates: mapCoordinates[room] ?? { x: 50, y: 50 },
  }))
}
