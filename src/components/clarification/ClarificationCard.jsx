import { ClarificationOption } from './ClarificationOption'
import { ClarificationInput } from './ClarificationInput'

export function ClarificationCard({ title, options, allowCustom, customPlaceholder }) {
  return (
    <div className="clarification-card">
      <div className="clarification-card__title">
        {title}
      </div>
      {options && options.length > 0 && (
        <div className="clarification-card__options">
          {options.map((option, index) => (
            <ClarificationOption key={index} label={option} />
          ))}
        </div>
      )}
      {allowCustom && (
        <div className="clarification-card__custom">
          <span className="clarification-card__custom-label">
            Or type your own period
          </span>
          <ClarificationInput placeholder={customPlaceholder} />
        </div>
      )}
    </div>
  )
}
