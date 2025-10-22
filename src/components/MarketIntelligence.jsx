import './MarketIntelligence.css'

// Mock HG Insights data for Zoom
const marketData = {
  totalInstalls: "2.1M+",
  growthRate: "+18%",
  marketShare: "32%",
  competitorComparison: [
    { name: "Zoom", installs: 2100000, percentage: 32, growth: 18 },
    { name: "Microsoft Teams", installs: 1950000, percentage: 30, growth: 15 },
    { name: "Google Meet", installs: 1400000, percentage: 21, growth: 12 },
    { name: "Webex", installs: 680000, percentage: 10, growth: -3 },
    { name: "GoTo Meeting", installs: 460000, percentage: 7, growth: -8 }
  ],
  companySizeDistribution: [
    { range: "1-50", percentage: 15, count: 315000 },
    { range: "51-200", percentage: 22, count: 462000 },
    { range: "201-500", percentage: 25, count: 525000 },
    { range: "501-1000", percentage: 18, count: 378000 },
    { range: "1000+", percentage: 20, count: 420000 }
  ],
  industryAdoption: [
    { industry: "Technology", percentage: 28, installs: 588000 },
    { industry: "Financial Services", percentage: 18, installs: 378000 },
    { industry: "Healthcare", percentage: 15, installs: 315000 },
    { industry: "Education", percentage: 14, installs: 294000 },
    { industry: "Professional Services", percentage: 12, installs: 252000 },
    { industry: "Other", percentage: 13, installs: 273000 }
  ],
  techStackIntegrations: [
    { tech: "Salesforce", percentage: 45, companies: 945000 },
    { tech: "Microsoft 365", percentage: 72, companies: 1512000 },
    { tech: "Google Workspace", percentage: 58, companies: 1218000 },
    { tech: "Slack", percentage: 38, companies: 798000 },
    { tech: "HubSpot", percentage: 28, companies: 588000 }
  ],
  geographicDistribution: [
    { region: "North America", percentage: 42 },
    { region: "Europe", percentage: 28 },
    { region: "Asia Pacific", percentage: 20 },
    { region: "Latin America", percentage: 6 },
    { region: "Middle East & Africa", percentage: 4 }
  ]
}

function MarketIntelligence() {
  return (
    <section className="market-intelligence-section">
      <div className="intelligence-header">
        <div className="header-content">
          <div className="hg-branding">
            <div className="hg-logo-large">
              <span className="hg-text">HG Insights</span>
            </div>
            <span className="data-badge">Live Market Intelligence</span>
          </div>
          <h2>Real-Time Technology Adoption Data</h2>
          <p className="header-description">
            Powered by HG Insights' proprietary technology intelligence covering 2.1M+ Zoom installations worldwide
          </p>
        </div>
      </div>

      {/* Market Overview Cards */}
      <div className="overview-cards">
        <div className="stat-card primary">
          <div className="stat-icon">🌐</div>
          <div className="stat-content">
            <div className="stat-value">{marketData.totalInstalls}</div>
            <div className="stat-label">Global Installations</div>
            <div className="stat-trend positive">
              <span className="trend-arrow">↗</span>
              <span>{marketData.growthRate} YoY Growth</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">{marketData.marketShare}</div>
            <div className="stat-label">Market Share</div>
            <div className="stat-sublabel">UCaaS Category</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div className="stat-content">
            <div className="stat-value">48%</div>
            <div className="stat-label">Enterprise Adoption</div>
            <div className="stat-sublabel">1000+ Employees</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-content">
            <div className="stat-value">87%</div>
            <div className="stat-label">Multi-Product Users</div>
            <div className="stat-sublabel">Zoom Phone + Meetings</div>
          </div>
        </div>
      </div>

      {/* Competitive Landscape */}
      <div className="data-viz-section">
        <div className="viz-header">
          <h3>Competitive Install Base Comparison</h3>
          <p>Active installations tracked across UCaaS platforms</p>
        </div>
        <div className="competitor-chart">
          {marketData.competitorComparison.map((competitor, index) => (
            <div key={index} className="competitor-row">
              <div className="competitor-info">
                <span className="rank">#{index + 1}</span>
                <span className="competitor-name">{competitor.name}</span>
              </div>
              <div className="competitor-bar-container">
                <div 
                  className={`competitor-bar ${index === 0 ? 'highlight' : ''}`}
                  style={{ width: `${competitor.percentage * 2.5}%` }}
                >
                  <span className="bar-label">
                    {(competitor.installs / 1000000).toFixed(1)}M ({competitor.percentage}%)
                  </span>
                </div>
              </div>
              <div className="competitor-growth">
                <span className={`growth-badge ${competitor.growth > 0 ? 'positive' : 'negative'}`}>
                  {competitor.growth > 0 ? '+' : ''}{competitor.growth}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="two-column-viz">
        {/* Company Size Distribution */}
        <div className="data-viz-section">
          <div className="viz-header">
            <h3>Installation by Company Size</h3>
            <p>HG Insights firmographic data</p>
          </div>
          <div className="size-distribution-chart">
            {marketData.companySizeDistribution.map((size, index) => (
              <div key={index} className="size-item">
                <div className="size-header">
                  <span className="size-range">{size.range} employees</span>
                  <span className="size-percentage">{size.percentage}%</span>
                </div>
                <div className="size-bar-bg">
                  <div 
                    className="size-bar"
                    style={{ width: `${size.percentage * 4}%` }}
                  />
                </div>
                <div className="size-count">{(size.count / 1000).toFixed(0)}K installations</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Adoption */}
        <div className="data-viz-section">
          <div className="viz-header">
            <h3>Top Industries Using Zoom</h3>
            <p>Vertical market penetration</p>
          </div>
          <div className="industry-chart">
            {marketData.industryAdoption.map((industry, index) => (
              <div key={index} className="industry-item">
                <div className="industry-header">
                  <span className="industry-name">{industry.industry}</span>
                  <span className="industry-percentage">{industry.percentage}%</span>
                </div>
                <div className="industry-bar-bg">
                  <div 
                    className="industry-bar"
                    style={{ width: `${industry.percentage * 3.5}%` }}
                  />
                </div>
                <div className="industry-count">{(industry.installs / 1000).toFixed(0)}K companies</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Integration */}
      <div className="data-viz-section">
        <div className="viz-header">
          <h3>Common Technology Stack Integrations</h3>
          <p>What tools Zoom users also have in their tech stack</p>
        </div>
        <div className="tech-stack-grid">
          {marketData.techStackIntegrations.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-card-header">
                <div className="tech-name">{tech.tech}</div>
                <div className="tech-percentage">{tech.percentage}%</div>
              </div>
              <div className="tech-bar-container">
                <div 
                  className="tech-bar"
                  style={{ width: `${tech.percentage}%` }}
                />
              </div>
              <div className="tech-companies">
                {(tech.companies / 1000).toFixed(0)}K companies
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="data-viz-section">
        <div className="viz-header">
          <h3>Global Market Distribution</h3>
          <p>Zoom installations by geographic region</p>
        </div>
        <div className="geo-distribution">
          {marketData.geographicDistribution.map((region, index) => (
            <div key={index} className="geo-item">
              <div className="geo-label">{region.region}</div>
              <div className="geo-bar-container">
                <div 
                  className="geo-bar"
                  style={{ width: `${region.percentage * 2}%` }}
                >
                  <span className="geo-percentage">{region.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="intelligence-cta">
        <div className="cta-content">
          <div className="hg-logo-footer">HG Insights</div>
          <h3>Want Deeper Market Intelligence?</h3>
          <p>Access custom reports on competitor movement, account targeting, and technology trends</p>
          <button className="intelligence-cta-button">
            Explore HG Insights Data
          </button>
        </div>
      </div>

      <div className="data-disclaimer">
        <span className="disclaimer-icon">ℹ️</span>
        <span className="disclaimer-text">
          Data sourced from HG Insights' proprietary technology intelligence platform. 
          Last updated: October 2025. Includes active installations tracked across global enterprises.
        </span>
      </div>
    </section>
  )
}

export default MarketIntelligence

