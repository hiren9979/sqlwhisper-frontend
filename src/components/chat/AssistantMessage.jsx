import { SqlDisplay } from './SqlDisplay'
import { ResultTable } from './ResultTable'

export function AssistantMessage({ content, sql, result }) {
  return (
    <div className="message message--assistant">
      <div className="message__content">
        {content}
      </div>
      {sql && <SqlDisplay sql={sql} />}
      {result && <ResultTable data={result} />}
    </div>
  )
}
