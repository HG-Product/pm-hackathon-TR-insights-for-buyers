import './CompetitiveDisplacementPreview.css'

// Mock data showing which competitors Zoom is displacing
const competitorDisplacementData = [
  {
    competitor: "Microsoft Teams",
    displacementRate: "34%",
    trend: "up",
    topReasons: [
      "Superior reliability for external meetings",
      "Better video/audio quality",
      "Easier for non-technical users"
    ],
    hgData: {
      companiesSwitching: "89K+",
      avgSavingsTime: "15-20% per meeting"
    },
    winRate: "68%"
  },
  {
    competitor: "Google Meet",
    displacementRate: "28%",
    trend: "up",
    topReasons: [
      "More advanced features",
      "Better for large meetings/webinars",
      "Superior breakout room functionality"
    ],
    hgData: {
      companiesSwitching: "67K+",
      avgSavingsTime: "18% per meeting"
    },
    winRate: "71%"
  },
  {
    competitor: "Cisco Webex",
    displacementRate: "22%",
    trend: "stable",
    topReasons: [
      "Modern interface and UX",
      "Easier adoption across organization",
      "Better mobile experience"
    ],
    hgData: {
      companiesSwitching: "45K+",
      avgSavingsTime: "12% per meeting"
    },
    winRate: "74%"
  },
  {
    competitor: "GoTo Meeting",
    displacementRate: "16%",
    trend: "up",
    topReasons: [
      "More comprehensive platform",
      "Better pricing for enterprise",
      "Superior feature set"
    ],
    hgData: {
      companiesSwitching: "32K+",
      avgSavingsTime: "10% per meeting"
    },
    winRate: "79%"
  }
]

const competitiveStats = {
  totalDisplacements: "233K+",
  avgWinRate: "73%",
  topSwitchingIndustries: ["Technology", "Financial Services", "Healthcare"],
  yearOverYearGrowth: "+24%"
}

function CompetitiveDisplacementPreview() {
  return (
    <section className="competitive-displacement-section">
      <div className="displacement-header">
        <div className="header-content">
          <h2>What Competitors Is Zoom Displacing?</h2>
          <p className="header-subtitle">
            Based on HG Insights market intelligence and verified TrustRadius reviews from organizations that switched to Zoom
          </p>
        </div>
        <div className="competitive-stats-bar">
          <div className="stat-pill">
            <span className="stat-icon">🔄</span>
            <div className="stat-content">
              <strong>{competitiveStats.totalDisplacements}</strong>
              <span>companies switched to Zoom</span>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-icon">📈</span>
            <div className="stat-content">
              <strong>{competitiveStats.avgWinRate}</strong>
              <span>avg win rate</span>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-icon">⚡</span>
            <div className="stat-content">
              <strong>{competitiveStats.yearOverYearGrowth}</strong>
              <span>YoY growth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="displacement-grid">
        {competitorDisplacementData.map((competitor, index) => (
          <div key={index} className="competitor-card">
            <div className="competitor-header">
              <div className="competitor-name">
                <h3>{competitor.competitor}</h3>
                <span className={`trend-indicator ${competitor.trend}`}>
                  {competitor.trend === 'up' ? '📈' : '➡️'} {competitor.trend}
                </span>
              </div>
              <div className="displacement-badge">
                <span className="displacement-rate">{competitor.displacementRate}</span>
                <span className="displacement-label">displacement rate</span>
              </div>
            </div>

            <div className="win-rate-bar">
              <div className="win-rate-label">
                <span>Zoom Win Rate:</span>
                <strong>{competitor.winRate}</strong>
              </div>
              <div className="win-rate-visual">
                <div 
                  className="win-fill" 
                  style={{ width: competitor.winRate }}
                />
              </div>
            </div>

            <div className="hg-mini-stats">
              <div className="mini-stat">
                <span className="mini-icon">🌐</span>
                <span className="mini-text">{competitor.hgData.companiesSwitching} companies</span>
              </div>
              <div className="mini-stat">
                <span className="mini-icon">⏱️</span>
                <span className="mini-text">{competitor.hgData.avgSavingsTime} time savings</span>
              </div>
            </div>

            <div className="top-reasons">
              <h4>Top Switching Reasons:</h4>
              <ul>
                {competitor.topReasons.map((reason, idx) => (
                  <li key={idx}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="displacement-insights">
        <div className="insight-badge">
          <span className="badge-icon">💡</span>
          <span className="badge-text">Key Insight</span>
        </div>
        <p className="insight-text">
          Organizations switching from competitors report an average <strong>15-20% improvement in meeting efficiency</strong> and 
          <strong> 94% user satisfaction</strong> after moving to Zoom. The top switching industries are {competitiveStats.topSwitchingIndustries.join(', ')}.
        </p>
      </div>

      <div className="view-full-analysis-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h3>Dive Deeper into Competitive Intelligence</h3>
            <p>Get detailed win/loss analysis, feature comparisons, and switcher testimonials</p>
            <div className="cta-features">
              <span className="feature-tag">📊 Market Share Data</span>
              <span className="feature-tag">🔍 Feature-by-Feature Analysis</span>
              <span className="feature-tag">💬 Switcher Reviews</span>
              <span className="feature-tag">📈 Trend Analysis</span>
            </div>
          </div>
          <a href="/competitive-intelligence.html" className="cta-button">
            View Full Competitive Analysis →
          </a>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveDisplacementPreview

