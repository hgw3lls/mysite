export function ListMode({ records, activeRecordId, onSelectRecord }) {
  return (
    <section className="mode-panel list-mode" aria-label="List mode">
      <table>
        <thead>
          <tr>
            <th>Record</th>
            <th>Title</th>
            <th>Year</th>
            <th>Category</th>
            <th>Status</th>
            <th>Access</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr
              key={record.id}
              className={activeRecordId === record.id ? 'is-active' : ''}
              onClick={() => onSelectRecord(record.id)}
              title={`Open File: ${record.title}`}
            >
              <td>{record.id}</td>
              <td>{record.title}</td>
              <td>{record.year}</td>
              <td>{record.category}</td>
              <td>{record.status}</td>
              <td>{record.access}</td>
              <td>{record.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
