function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Transaction filters">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.value}
          className={`tabs__button ${
            activeTab === tab.value ? 'tabs__button--active' : ''
          }`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Tabs