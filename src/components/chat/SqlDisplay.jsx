export function SqlDisplay({ sql }) {
  return (
    <div className="sql-display">
      <div className="sql-display__header">
        <span className="sql-display__label">SQL</span>
      </div>
      <div className="sql-display__content">
        <pre><code>{sql}</code></pre>
      </div>
    </div>
  )
}
