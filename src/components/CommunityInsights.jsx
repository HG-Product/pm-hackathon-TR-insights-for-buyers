import { useState } from 'react'
import './CommunityInsights.css'

function CommunityInsights({ pros, cons }) {
  const [activeTab, setActiveTab] = useState('pros')

  return (
    <div className="community-insights">
      <h2>Community insights</h2>
      <p className="insights-description">
        TrustRadius Insights for Zoom Workplace are summaries of user sentiment data
        from TrustRadius reviews and, when necessary, third party data sources.
      </p>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'pros' ? 'active' : ''}`}
          onClick={() => setActiveTab('pros')}
        >
          Pros
        </button>
        <button
          className={`tab ${activeTab === 'cons' ? 'active' : ''}`}
          onClick={() => setActiveTab('cons')}
        >
          Cons
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'pros' && (
          <div className="pros-content">
            <h3>Pros</h3>
            {pros.map((pro, index) => (
              <p key={index} className="insight-item">{pro}</p>
            ))}
          </div>
        )}
        {activeTab === 'cons' && (
          <div className="cons-content">
            <h3>Cons</h3>
            {cons.map((con, index) => (
              <p key={index} className="insight-item">{con}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CommunityInsights
