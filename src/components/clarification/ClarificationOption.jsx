export function ClarificationOption({ label, selected }) {
  return (
    <button 
      className={`clarification-option ${selected ? 'clarification-option--selected' : ''}`}
    >
      {label}
    </button>
  )
}
