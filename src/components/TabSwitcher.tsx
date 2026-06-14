import './TabSwitcher.css'

interface TabSwitcherProps {
  tabs: [string, string]
  active: number
  onChange: (index: number) => void
}

export default function TabSwitcher({ tabs, active, onChange }: TabSwitcherProps) {
  return (
    <div className="tab-switcher">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`tab-switcher-item ${active === i ? 'active' : ''}`}
          onClick={() => onChange(i)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
