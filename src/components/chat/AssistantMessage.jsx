import { SqlDisplay } from './SqlDisplay'
import { ResultTable } from './ResultTable'
import { ClarificationCard } from '../clarification/ClarificationCard'

export function AssistantMessage({ content, sql, result, clarification }) {
  return (
    <div className="message message--assistant">
      <div className="message__content">
        {content}
      </div>
      {clarification && (
        <ClarificationCard 
          title={clarification.title}
          options={clarification.options}
          allowCustom={clarification.allowCustom}
          customPlaceholder={clarification.customPlaceholder}
        />
      )}
      {sql && <SqlDisplay sql={sql} />}
      {result && <ResultTable data={result} />}
    </div>
  )
}
