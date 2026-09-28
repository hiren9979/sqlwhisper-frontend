export function ResultTable({ data }) {
  if (!data || data.length === 0) return null

  const columns = Object.keys(data[0])

  return (
    <div className="result-table">
      <div className="result-table__header">
        <span className="result-table__label">Result</span>
      </div>
      <div className="result-table__content">
        <table>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map(column => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
