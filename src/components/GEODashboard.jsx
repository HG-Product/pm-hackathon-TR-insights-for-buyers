import { useState } from 'react'
import './GEODashboard.css'

// ============================================
// MOCK DATA
// ============================================

// Topic/Category Research Data
const topicResearchData = {
  selectedTopic: 'Video Conferencing Software',
  topPrompts: [
    { id: 1, prompt: 'What is the best video conferencing software for enterprise?', volume: 12400, trend: 18, competitorMentions: 89, yourMentions: 34, shareOfVoice: 38 },
    { id: 2, prompt: 'Zoom vs Microsoft Teams comparison', volume: 9800, trend: 24, competitorMentions: 156, yourMentions: 78, shareOfVoice: 50 },
    { id: 3, prompt: 'Best video conferencing for remote teams', volume: 8200, trend: 12, competitorMentions: 67, yourMentions: 23, shareOfVoice: 34 },
    { id: 4, prompt: 'Video conferencing software with AI features', volume: 7100, trend: 45, competitorMentions: 45, yourMentions: 12, shareOfVoice: 27 },
    { id: 5, prompt: 'Secure video conferencing for healthcare', volume: 5600, trend: 8, competitorMentions: 34, yourMentions: 19, shareOfVoice: 56 },
    { id: 6, prompt: 'Affordable video conferencing alternatives to Zoom', volume: 4900, trend: -5, competitorMentions: 78, yourMentions: 15, shareOfVoice: 19 },
    { id: 7, prompt: 'Video conferencing with breakout rooms', volume: 4200, trend: 15, competitorMentions: 52, yourMentions: 28, shareOfVoice: 54 },
    { id: 8, prompt: 'Best webinar platform for large events', volume: 3800, trend: 22, competitorMentions: 41, yourMentions: 11, shareOfVoice: 27 },
  ],
  fanOutQueries: [
    { query: 'zoom workplace pricing plans 2024', volume: 3200, sourcePrompt: 'Best video conferencing software' },
    { query: 'microsoft teams vs zoom features comparison', volume: 2800, sourcePrompt: 'Zoom vs Microsoft Teams' },
    { query: 'webex security certifications enterprise', volume: 2100, sourcePrompt: 'Secure video conferencing' },
    { query: 'google meet free limitations', volume: 1900, sourcePrompt: 'Affordable alternatives' },
    { query: 'zoom ai companion features review', volume: 1700, sourcePrompt: 'Video conferencing with AI' },
  ],
  topCitedSites: [
    { site: 'trustradius.com', citations: 4521, percentage: 24, rank: 1, change: 12 },
    { site: 'g2.com', citations: 3892, percentage: 21, rank: 2, change: -3 },
    { site: 'capterra.com', citations: 2845, percentage: 15, rank: 3, change: 5 },
    { site: 'gartner.com', citations: 2234, percentage: 12, rank: 4, change: 8 },
    { site: 'forbes.com', citations: 1567, percentage: 8, rank: 5, change: -2 },
    { site: 'techradar.com', citations: 1234, percentage: 7, rank: 6, change: 15 },
  ],
  competitorBenchmark: [
    { brand: 'Zoom Workplace', shareOfVoice: 38, citations: 2847, trend: 12, color: '#2D8CFF' },
    { brand: 'Microsoft Teams', shareOfVoice: 32, citations: 2456, trend: 8, color: '#6264A7' },
    { brand: 'Google Meet', shareOfVoice: 15, citations: 1123, trend: -3, color: '#00897B' },
    { brand: 'Webex', shareOfVoice: 10, citations: 756, trend: 5, color: '#00BCF2' },
    { brand: 'GoTo Meeting', shareOfVoice: 5, citations: 389, trend: -8, color: '#FF6900' },
  ]
}

// TrustRadius specific metrics
const trustRadiusMetrics = {
  totalCitations: 4521,
  citationPercentage: 24,
  siteRank: 1,
  byPageType: [
    { type: 'Product Pages', citations: 1456, percentage: 32, trend: 15 },
    { type: 'Comparison Pages', citations: 1234, percentage: 27, trend: 22 },
    { type: 'Category Pages', citations: 892, percentage: 20, trend: 8 },
    { type: 'Review Pages', citations: 567, percentage: 13, trend: 18 },
    { type: 'Alternative Pages', citations: 234, percentage: 5, trend: 5 },
    { type: 'Pricing Pages', citations: 138, percentage: 3, trend: 45 },
  ],
  brandSpecific: {
    totalCitations: 892,
    percentage: 31,
    rank: 1
  }
}

// Customer Selected Prompts (for monitoring)
const selectedPrompts = [
  { 
    id: 1, 
    prompt: 'What is the best video conferencing software for enterprise?',
    isTracking: true,
    metrics: {
      shareOfVoice: 42,
      totalCitations: 156,
      trCitations: 38,
      trPercentage: 24,
      weeklyChange: 8,
      monthlyChange: 15
    },
    aiTools: [
      { name: 'ChatGPT', mentioned: true, citations: 12, position: 2 },
      { name: 'Perplexity', mentioned: true, citations: 18, position: 1 },
      { name: 'Claude', mentioned: true, citations: 8, position: 3 },
      { name: 'Gemini', mentioned: false, citations: 0, position: null },
    ],
    trPagesCited: [
      { page: 'Zoom Workplace Reviews', type: 'Product', citations: 15, frequency: '34%' },
      { page: 'Zoom vs Teams Comparison', type: 'Comparison', citations: 12, frequency: '28%' },
      { page: 'Video Conferencing Category', type: 'Category', citations: 8, frequency: '19%' },
      { page: 'Zoom Alternatives', type: 'Alternatives', citations: 3, frequency: '7%' },
    ]
  },
  { 
    id: 2, 
    prompt: 'Zoom vs Microsoft Teams comparison',
    isTracking: true,
    metrics: {
      shareOfVoice: 58,
      totalCitations: 234,
      trCitations: 78,
      trPercentage: 33,
      weeklyChange: 12,
      monthlyChange: 24
    },
    aiTools: [
      { name: 'ChatGPT', mentioned: true, citations: 28, position: 1 },
      { name: 'Perplexity', mentioned: true, citations: 32, position: 1 },
      { name: 'Claude', mentioned: true, citations: 18, position: 2 },
      { name: 'Gemini', mentioned: true, citations: 12, position: 2 },
    ],
    trPagesCited: [
      { page: 'Zoom vs Teams Comparison', type: 'Comparison', citations: 45, frequency: '58%' },
      { page: 'Zoom Workplace Reviews', type: 'Product', citations: 18, frequency: '23%' },
      { page: 'Microsoft Teams Reviews', type: 'Product', citations: 12, frequency: '15%' },
    ]
  },
  { 
    id: 3, 
    prompt: 'Best video conferencing for remote teams',
    isTracking: true,
    metrics: {
      shareOfVoice: 34,
      totalCitations: 89,
      trCitations: 23,
      trPercentage: 26,
      weeklyChange: -3,
      monthlyChange: 8
    },
    aiTools: [
      { name: 'ChatGPT', mentioned: true, citations: 8, position: 3 },
      { name: 'Perplexity', mentioned: true, citations: 12, position: 2 },
      { name: 'Claude', mentioned: false, citations: 0, position: null },
      { name: 'Gemini', mentioned: true, citations: 3, position: 4 },
    ],
    trPagesCited: [
      { page: 'Video Conferencing Category', type: 'Category', citations: 12, frequency: '52%' },
      { page: 'Zoom Workplace Reviews', type: 'Product', citations: 8, frequency: '35%' },
      { page: 'Best Video Conferencing Guide', type: 'Content', citations: 3, frequency: '13%' },
    ]
  },
]

// Competitors for tracking
const trackedCompetitors = [
  { id: 1, name: 'Microsoft Teams', logo: 'MT', color: '#6264A7', selected: true },
  { id: 2, name: 'Google Meet', logo: 'GM', color: '#00897B', selected: true },
  { id: 3, name: 'Webex', logo: 'WX', color: '#00BCF2', selected: true },
  { id: 4, name: 'GoTo Meeting', logo: 'GT', color: '#FF6900', selected: false },
  { id: 5, name: 'RingCentral', logo: 'RC', color: '#FF8200', selected: false },
]

// Crawl Volume Data (Cloudflare)
const crawlVolumeData = {
  totalCrawls: 1247832,
  weeklyChange: 18,
  monthlyChange: 34,
  yearlyChange: 156,
  byCrawler: [
    { crawler: 'GPTBot (OpenAI)', volume: 456789, percentage: 37, weeklyChange: 22, color: '#10A37F' },
    { crawler: 'Anthropic-AI', volume: 312456, percentage: 25, weeklyChange: 45, color: '#D4A574' },
    { crawler: 'Google-Extended', volume: 234567, percentage: 19, weeklyChange: 12, color: '#4285F4' },
    { crawler: 'PerplexityBot', volume: 156789, percentage: 13, weeklyChange: 38, color: '#20B2AA' },
    { crawler: 'CCBot (Common Crawl)', volume: 87231, percentage: 7, weeklyChange: -5, color: '#6B7280' },
  ],
  byPageType: [
    { pageType: 'Product Pages', volume: 412345, percentage: 33, trend: 24 },
    { pageType: 'Review Pages', volume: 287654, percentage: 23, trend: 18 },
    { pageType: 'Comparison Pages', volume: 224567, percentage: 18, trend: 32 },
    { pageType: 'Category Pages', volume: 187234, percentage: 15, trend: 12 },
    { pageType: 'Alternative Pages', volume: 87456, percentage: 7, trend: 28 },
    { pageType: 'Pricing Pages', volume: 48576, percentage: 4, trend: 45 },
  ],
  byProduct: [
    { product: 'Zoom Workplace', volume: 89234, weeklyChange: 15 },
    { product: 'Microsoft Teams', volume: 76543, weeklyChange: 8 },
    { product: 'Salesforce CRM', volume: 65432, weeklyChange: 12 },
    { product: 'HubSpot', volume: 54321, weeklyChange: 22 },
    { product: 'Slack', volume: 43210, weeklyChange: -3 },
  ],
  timeline: [
    { period: 'Week 1', volume: 285000 },
    { period: 'Week 2', volume: 298000 },
    { period: 'Week 3', volume: 312000 },
    { period: 'Week 4', volume: 352832 },
  ]
}

// Historical trend data
const trendData = {
  weekly: [
    { period: 'Mon', shareOfVoice: 36, citations: 412 },
    { period: 'Tue', shareOfVoice: 38, citations: 456 },
    { period: 'Wed', shareOfVoice: 35, citations: 398 },
    { period: 'Thu', shareOfVoice: 42, citations: 512 },
    { period: 'Fri', shareOfVoice: 40, citations: 478 },
    { period: 'Sat', shareOfVoice: 38, citations: 423 },
    { period: 'Sun', shareOfVoice: 41, citations: 468 },
  ],
  monthly: [
    { period: 'Jan', shareOfVoice: 32, citations: 8234 },
    { period: 'Feb', shareOfVoice: 34, citations: 8967 },
    { period: 'Mar', shareOfVoice: 36, citations: 9456 },
    { period: 'Apr', shareOfVoice: 38, citations: 10234 },
  ]
}

// AI Tool icons
const aiToolIcons = {
  'ChatGPT': '🤖',
  'Perplexity': '🔍',
  'Claude': '🧠',
  'Gemini': '✨',
  'Google': '🔎'
}

const chartColors = ['#0066FF', '#6366F1', '#3B82F6', '#93C5FD', '#FBBF24', '#10B981']

// ============================================
// COMPONENT
// ============================================

function GEODashboard() {
  const [activeNav, setActiveNav] = useState('geo-visibility')
  const [activeTab, setActiveTab] = useState('research')
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly')
  const [expandedPrompt, setExpandedPrompt] = useState(null)

  // Calculate totals for charts
  const totalPromptVolume = topicResearchData.topPrompts.reduce((sum, p) => sum + p.volume, 0)
  const totalCrawls = crawlVolumeData.byCrawler.reduce((sum, c) => sum + c.volume, 0)

  return (
    <div className="geo-dashboard">
      {/* Sidebar */}
      <aside className="geo-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">
            <span className="logo-icon">TR</span>
          </div>
          <span className="brand-text">TrustRadius</span>
          <button className="collapse-btn">‹</button>
        </div>

        <div className="product-selector">
          <div className="product-icon">Z</div>
          <span className="product-name">Zoom Workplace</span>
          <span className="dropdown-arrow">▼</span>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📦</span>
                <span>Product Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">⭐</span>
                <span>Reviews</span>
                <span className="badge new">NEW</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">👥</span>
                <span>Buyer Activity</span>
              </a>
            </li>
            
            <li className="nav-section">
              <span className="section-label">Analytics</span>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📊</span>
                <span>Profile Activity</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🎯</span>
                <span>Competitors</span>
              </a>
            </li>
            <li className={`nav-item ${activeNav === 'geo-visibility' ? 'active' : ''}`}>
              <a href="#" className="nav-link" onClick={() => setActiveNav('geo-visibility')}>
                <span className="nav-icon">🔮</span>
                <span>GEO Visibility</span>
                <span className="badge beta">BETA</span>
              </a>
            </li>
            
            <li className="nav-section">
              <span className="section-label">Tools</span>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📈</span>
                <span>Market Intelligence</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🔗</span>
                <span>Integrations</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">💰</span>
                <span>ROI</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-link">
            <span className="nav-icon">⚙️</span>
            <span>Account</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="geo-main">
        {/* Top Header */}
        <header className="geo-header">
          <div className="header-left">
            <div className="product-context">
              <div className="product-icon-small">Z</div>
              <span>Zoom Workplace</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
          <div className="header-right">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Quick nav..." />
            </div>
            <button className="header-btn">📤</button>
            <button className="header-btn">📅</button>
            <button className="header-btn">❓</button>
            <button className="header-btn notification">🔔</button>
            <div className="user-avatar">G</div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            <span className="tab-icon">🔬</span>
            GEO Research
          </button>
          <button 
            className={`tab-btn ${activeTab === 'setup' ? 'active' : ''}`}
            onClick={() => setActiveTab('setup')}
          >
            <span className="tab-icon">⚙️</span>
            Prompt Setup
          </button>
          <button 
            className={`tab-btn ${activeTab === 'monitoring' ? 'active' : ''}`}
            onClick={() => setActiveTab('monitoring')}
          >
            <span className="tab-icon">📊</span>
            Monitoring Dashboard
          </button>
          <button 
            className={`tab-btn ${activeTab === 'competitive' ? 'active' : ''}`}
            onClick={() => setActiveTab('competitive')}
          >
            <span className="tab-icon">🏆</span>
            Competitive Analysis
          </button>
          <button 
            className={`tab-btn ${activeTab === 'crawl' ? 'active' : ''}`}
            onClick={() => setActiveTab('crawl')}
          >
            <span className="tab-icon">🤖</span>
            Crawl Analytics
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="geo-content">
          
          {/* ==================== RESEARCH TAB ==================== */}
          {activeTab === 'research' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">GEO Research Dashboard</h1>
                  <p className="page-subtitle">Research the GEO landscape across topics you want to compete in and identify high-value prompts for your strategy.</p>
                </div>
                <div className="page-actions">
                  <select className="topic-selector">
                    <option>Video Conferencing Software</option>
                    <option>UCaaS Platforms</option>
                    <option>Webinar Software</option>
                  </select>
                  <button className="btn-primary">Export Report</button>
                </div>
              </section>

              {/* Overview Stats */}
              <div className="stats-grid four-col">
                <div className="stat-card">
                  <span className="stat-label">Total Prompts Tracked</span>
                  <div className="stat-value">{topicResearchData.topPrompts.length}</div>
                  <div className="stat-sublabel">in this topic</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Monthly Query Volume</span>
                  <div className="stat-value">{totalPromptVolume.toLocaleString()}</div>
                  <div className="stat-change up">
                    <span>↑ +18%</span> vs last month
                  </div>
                </div>
                <div className="stat-card highlight">
                  <span className="stat-label">Your Share of Voice</span>
                  <div className="stat-value">38%</div>
                  <div className="stat-change up">
                    <span>↑ +5%</span> vs last month
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">TrustRadius Site Rank</span>
                  <div className="stat-value">#1</div>
                  <div className="stat-sublabel">for citations in topic</div>
                </div>
              </div>

              {/* Prompt Volume & Identification */}
              <section className="dashboard-section">
                <div className="section-header">
                  <div>
                    <h2>Prompt Volume & Identification</h2>
                    <p className="section-subtitle">Discover which prompts buyers ask most frequently to prioritize your GEO strategy.</p>
                  </div>
                  <div className="section-actions">
                    <select className="filter-select">
                      <option>All Prompts</option>
                      <option>High Volume</option>
                      <option>Trending Up</option>
                      <option>Low Share of Voice</option>
                    </select>
                  </div>
                </div>

                <div className="prompts-table-container">
                  <table className="data-table prompts-table">
                    <thead>
                      <tr>
                        <th>Prompt / Question</th>
                        <th>Monthly Volume</th>
                        <th>Trend</th>
                        <th>Your Mentions</th>
                        <th>Share of Voice</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topicResearchData.topPrompts.map((prompt) => (
                        <tr key={prompt.id}>
                          <td className="prompt-cell">
                            <span className="prompt-text">{prompt.prompt}</span>
                          </td>
                          <td className="volume-cell">
                            <span className="volume-value">{prompt.volume.toLocaleString()}</span>
                            <div className="volume-bar">
                              <div 
                                className="volume-fill" 
                                style={{ width: `${(prompt.volume / topicResearchData.topPrompts[0].volume) * 100}%` }}
                              ></div>
                            </div>
                          </td>
                          <td className={`trend-cell ${prompt.trend >= 0 ? 'up' : 'down'}`}>
                            <span>{prompt.trend >= 0 ? '↑' : '↓'} {prompt.trend >= 0 ? '+' : ''}{prompt.trend}%</span>
                          </td>
                          <td className="mentions-cell">
                            <span className="mentions-count">{prompt.yourMentions}</span>
                            <span className="mentions-total">/ {prompt.competitorMentions + prompt.yourMentions}</span>
                          </td>
                          <td className="sov-cell">
                            <div className="sov-container">
                              <div className="sov-bar">
                                <div 
                                  className={`sov-fill ${prompt.shareOfVoice >= 40 ? 'high' : prompt.shareOfVoice >= 25 ? 'medium' : 'low'}`}
                                  style={{ width: `${prompt.shareOfVoice}%` }}
                                ></div>
                              </div>
                              <span className="sov-value">{prompt.shareOfVoice}%</span>
                            </div>
                          </td>
                          <td className="actions-cell">
                            <button className="btn-small btn-outline">Track</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Fan-out Queries */}
              <section className="dashboard-section">
                <div className="section-header">
                  <div>
                    <h2>Fan-out Queries</h2>
                    <p className="section-subtitle">See the follow-up searches AI crawlers make to find semantically relevant content.</p>
                  </div>
                </div>

                <div className="fanout-grid">
                  {topicResearchData.fanOutQueries.map((query, index) => (
                    <div key={index} className="fanout-card">
                      <div className="fanout-query">"{query.query}"</div>
                      <div className="fanout-meta">
                        <span className="fanout-volume">{query.volume.toLocaleString()} monthly searches</span>
                        <span className="fanout-source">From: {query.sourcePrompt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Two Column: Top Sites + Competitor Benchmark */}
              <div className="two-column-grid">
                {/* Top Cited Sites */}
                <section className="dashboard-section">
                  <div className="section-header">
                    <h2>Top Cited Sites</h2>
                  </div>
                  <div className="sites-list">
                    {topicResearchData.topCitedSites.map((site, index) => (
                      <div key={site.site} className={`site-row ${site.site === 'trustradius.com' ? 'highlight' : ''}`}>
                        <div className="site-rank">#{site.rank}</div>
                        <div className="site-info">
                          <span className="site-name">{site.site}</span>
                          <div className="site-bar">
                            <div 
                              className="site-bar-fill" 
                              style={{ width: `${site.percentage}%`, backgroundColor: chartColors[index] }}
                            ></div>
                          </div>
                        </div>
                        <div className="site-stats">
                          <span className="site-citations">{site.citations.toLocaleString()}</span>
                          <span className={`site-change ${site.change >= 0 ? 'up' : 'down'}`}>
                            {site.change >= 0 ? '+' : ''}{site.change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Competitor Benchmark */}
                <section className="dashboard-section">
                  <div className="section-header">
                    <h2>Competitor Share of Voice</h2>
                  </div>
                  <div className="competitor-chart">
                    {topicResearchData.competitorBenchmark.map((competitor, index) => (
                      <div key={competitor.brand} className="competitor-row">
                        <div className="competitor-info">
                          <div className="competitor-logo" style={{ backgroundColor: competitor.color }}>
                            {competitor.brand.charAt(0)}
                          </div>
                          <span className="competitor-name">{competitor.brand}</span>
                        </div>
                        <div className="competitor-bar-container">
                          <div 
                            className="competitor-bar" 
                            style={{ width: `${competitor.shareOfVoice}%`, backgroundColor: competitor.color }}
                          ></div>
                          <span className="competitor-sov">{competitor.shareOfVoice}%</span>
                        </div>
                        <div className={`competitor-trend ${competitor.trend >= 0 ? 'up' : 'down'}`}>
                          {competitor.trend >= 0 ? '↑' : '↓'} {competitor.trend}%
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* TrustRadius Metrics */}
              <section className="dashboard-section tr-metrics-section">
                <div className="section-header">
                  <div>
                    <h2>TrustRadius Visibility Metrics</h2>
                    <p className="section-subtitle">How TrustRadius helps you show up for prompts in this topic.</p>
                  </div>
                </div>

                <div className="tr-metrics-grid">
                  <div className="tr-metric-card main">
                    <div className="tr-metric-header">
                      <span className="tr-badge">TrustRadius</span>
                      <span className="tr-rank">#1 Cited Site</span>
                    </div>
                    <div className="tr-metric-stats">
                      <div className="tr-stat">
                        <span className="tr-stat-value">{trustRadiusMetrics.totalCitations.toLocaleString()}</span>
                        <span className="tr-stat-label">Total Citations</span>
                      </div>
                      <div className="tr-stat">
                        <span className="tr-stat-value">{trustRadiusMetrics.citationPercentage}%</span>
                        <span className="tr-stat-label">of All Citations</span>
                      </div>
                      <div className="tr-stat">
                        <span className="tr-stat-value">{trustRadiusMetrics.brandSpecific.totalCitations}</span>
                        <span className="tr-stat-label">Brand Citations</span>
                      </div>
                    </div>
                  </div>

                  <div className="tr-metric-card">
                    <h4>Citations by Page Type</h4>
                    <div className="page-type-list">
                      {trustRadiusMetrics.byPageType.map((pt) => (
                        <div key={pt.type} className="page-type-row">
                          <span className="pt-name">{pt.type}</span>
                          <div className="pt-bar">
                            <div className="pt-fill" style={{ width: `${pt.percentage}%` }}></div>
                          </div>
                          <span className="pt-value">{pt.citations.toLocaleString()}</span>
                          <span className={`pt-trend ${pt.trend >= 0 ? 'up' : 'down'}`}>
                            {pt.trend >= 0 ? '+' : ''}{pt.trend}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ==================== SETUP TAB ==================== */}
          {activeTab === 'setup' && (
            <>
              <section className="page-header-section">
                <h1 className="page-title">GEO Profile Setup</h1>
                <p className="page-subtitle">Configure your brand, select prompts to track, and choose competitors for benchmarking.</p>
              </section>

              {/* Brand Selection */}
              <section className="dashboard-section setup-section">
                <div className="section-header">
                  <h2>Brand Selection</h2>
                  <span className="setup-step">Step 1 of 3</span>
                </div>
                <p className="setup-description">Select the brand/product to focus on for your GEO dashboards.</p>
                
                <div className="brand-selector-grid">
                  <div className="brand-card selected">
                    <div className="brand-logo">Z</div>
                    <div className="brand-info">
                      <h4>Zoom Workplace</h4>
                      <span>Video Conferencing</span>
                    </div>
                    <span className="check-icon">✓</span>
                  </div>
                  <div className="brand-card">
                    <div className="brand-logo secondary">ZP</div>
                    <div className="brand-info">
                      <h4>Zoom Phone</h4>
                      <span>VoIP Phone System</span>
                    </div>
                  </div>
                  <div className="brand-card add-new">
                    <span className="add-icon">+</span>
                    <span>Add Product</span>
                  </div>
                </div>
              </section>

              {/* Prompt Selection */}
              <section className="dashboard-section setup-section">
                <div className="section-header">
                  <h2>Prompt Selection</h2>
                  <span className="setup-step">Step 2 of 3</span>
                </div>
                <p className="setup-description">Select prompts to track for GEO Monitoring and Execution. TrustRadius will optimize content for these prompts.</p>
                
                <div className="prompt-input-section">
                  <div className="prompt-input-row">
                    <input 
                      type="text" 
                      placeholder="Enter a prompt to track (e.g., 'Best video conferencing for enterprise')"
                      className="prompt-input"
                    />
                    <button className="btn-primary">Add Prompt</button>
                  </div>
                  <p className="input-hint">Or select from recommended prompts below based on your topic research.</p>
                </div>

                <div className="selected-prompts">
                  <h4>Selected Prompts ({selectedPrompts.length})</h4>
                  <div className="selected-prompts-list">
                    {selectedPrompts.map((p) => (
                      <div key={p.id} className="selected-prompt-item">
                        <span className="prompt-text">{p.prompt}</span>
                        <div className="prompt-meta">
                          <span className="prompt-volume">{topicResearchData.topPrompts.find(tp => tp.prompt === p.prompt)?.volume?.toLocaleString() || '8,500'} monthly</span>
                          <button className="btn-icon remove">×</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="recommended-prompts">
                  <h4>Recommended Prompts</h4>
                  <div className="recommended-list">
                    {topicResearchData.topPrompts.slice(3, 8).map((p) => (
                      <div key={p.id} className="recommended-prompt-item">
                        <div className="prompt-info">
                          <span className="prompt-text">{p.prompt}</span>
                          <span className="prompt-volume">{p.volume.toLocaleString()} monthly</span>
                        </div>
                        <button className="btn-small btn-outline">+ Add</button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Competitor Selection */}
              <section className="dashboard-section setup-section">
                <div className="section-header">
                  <h2>Competitor Selection</h2>
                  <span className="setup-step">Step 3 of 3</span>
                </div>
                <p className="setup-description">Select 3-5 competitors to track and benchmark your performance against.</p>

                <div className="competitor-selector">
                  <div className="competitors-grid">
                    {trackedCompetitors.map((comp) => (
                      <div key={comp.id} className={`competitor-card ${comp.selected ? 'selected' : ''}`}>
                        <div className="competitor-logo" style={{ backgroundColor: comp.color }}>{comp.logo}</div>
                        <span className="competitor-name">{comp.name}</span>
                        {comp.selected && <span className="check-icon">✓</span>}
                      </div>
                    ))}
                    <div className="competitor-card add-new">
                      <span className="add-icon">+</span>
                      <span>Add Competitor</span>
                    </div>
                  </div>
                  <p className="selection-count">3 of 5 competitors selected</p>
                </div>

                <div className="setup-actions">
                  <button className="btn-secondary">Save as Draft</button>
                  <button className="btn-primary">Save & Start Tracking</button>
                </div>
              </section>
            </>
          )}

          {/* ==================== MONITORING TAB ==================== */}
          {activeTab === 'monitoring' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">GEO Monitoring Dashboard</h1>
                  <p className="page-subtitle">Track your performance across selected prompts and see how TrustRadius drives visibility.</p>
                </div>
                <div className="page-actions">
                  <div className="timeframe-selector">
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'weekly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('weekly')}
                    >Weekly</button>
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'monthly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('monthly')}
                    >Monthly</button>
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'yearly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('yearly')}
                    >Yearly</button>
                  </div>
                  <button className="btn-primary">Export Report</button>
                </div>
              </section>

              {/* Summary Stats */}
              <div className="stats-grid four-col">
                <div className="stat-card highlight">
                  <span className="stat-label">Overall Share of Voice</span>
                  <div className="stat-value">42%</div>
                  <div className="stat-change up">
                    <span>↑ +8%</span> vs last period
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Total Citations</span>
                  <div className="stat-value">479</div>
                  <div className="stat-change up">
                    <span>↑ +15%</span> vs last period
                  </div>
                </div>
                <div className="stat-card tr-highlight">
                  <span className="stat-label">TrustRadius Citations</span>
                  <div className="stat-value">139</div>
                  <div className="stat-change up">
                    <span>↑ +22%</span> vs last period
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">TR Citation %</span>
                  <div className="stat-value">29%</div>
                  <div className="stat-change up">
                    <span>↑ +4%</span> vs last period
                  </div>
                </div>
              </div>

              {/* AI Tool Tracking */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Performance by AI Platform</h2>
                  <p className="section-subtitle">Track your visibility across major AI tools.</p>
                </div>
                
                <div className="ai-tools-grid">
                  {['ChatGPT', 'Perplexity', 'Claude', 'Gemini'].map((tool) => (
                    <div key={tool} className="ai-tool-card">
                      <div className="ai-tool-header">
                        <span className="ai-tool-icon">{aiToolIcons[tool]}</span>
                        <span className="ai-tool-name">{tool}</span>
                      </div>
                      <div className="ai-tool-stats">
                        <div className="ai-stat">
                          <span className="ai-stat-value">{Math.floor(Math.random() * 30) + 20}</span>
                          <span className="ai-stat-label">Citations</span>
                        </div>
                        <div className="ai-stat">
                          <span className="ai-stat-value">#{Math.floor(Math.random() * 3) + 1}</span>
                          <span className="ai-stat-label">Avg Position</span>
                        </div>
                        <div className="ai-stat">
                          <span className={`ai-stat-value ${Math.random() > 0.3 ? 'up' : 'down'}`}>
                            {Math.random() > 0.3 ? '↑' : '↓'} {Math.floor(Math.random() * 20)}%
                          </span>
                          <span className="ai-stat-label">Trend</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Prompt-by-Prompt Performance */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Prompt Performance</h2>
                  <p className="section-subtitle">Detailed metrics for each tracked prompt.</p>
                </div>

                <div className="prompt-performance-list">
                  {selectedPrompts.map((prompt) => (
                    <div 
                      key={prompt.id} 
                      className={`prompt-performance-card ${expandedPrompt === prompt.id ? 'expanded' : ''}`}
                    >
                      <div 
                        className="prompt-card-header"
                        onClick={() => setExpandedPrompt(expandedPrompt === prompt.id ? null : prompt.id)}
                      >
                        <div className="prompt-main">
                          <span className="prompt-text">{prompt.prompt}</span>
                          <div className="prompt-quick-stats">
                            <span className="qs-item sov">
                              <span className="qs-label">SoV</span>
                              <span className="qs-value">{prompt.metrics.shareOfVoice}%</span>
                            </span>
                            <span className="qs-item">
                              <span className="qs-label">Citations</span>
                              <span className="qs-value">{prompt.metrics.totalCitations}</span>
                            </span>
                            <span className="qs-item tr">
                              <span className="qs-label">TR</span>
                              <span className="qs-value">{prompt.metrics.trCitations} ({prompt.metrics.trPercentage}%)</span>
                            </span>
                            <span className={`qs-item trend ${prompt.metrics.weeklyChange >= 0 ? 'up' : 'down'}`}>
                              {prompt.metrics.weeklyChange >= 0 ? '↑' : '↓'} {Math.abs(prompt.metrics.weeklyChange)}%
                            </span>
                          </div>
                        </div>
                        <button className="expand-btn">{expandedPrompt === prompt.id ? '▲' : '▼'}</button>
                      </div>

                      {expandedPrompt === prompt.id && (
                        <div className="prompt-card-details">
                          <div className="details-grid">
                            {/* AI Tools Breakdown */}
                            <div className="detail-section">
                              <h4>AI Platform Breakdown</h4>
                              <div className="ai-breakdown">
                                {prompt.aiTools.map((ai) => (
                                  <div key={ai.name} className={`ai-row ${ai.mentioned ? '' : 'not-mentioned'}`}>
                                    <span className="ai-icon">{aiToolIcons[ai.name]}</span>
                                    <span className="ai-name">{ai.name}</span>
                                    {ai.mentioned ? (
                                      <>
                                        <span className="ai-citations">{ai.citations} citations</span>
                                        <span className="ai-position">Position #{ai.position}</span>
                                      </>
                                    ) : (
                                      <span className="ai-not-found">Not mentioned</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* TR Pages Cited */}
                            <div className="detail-section">
                              <h4>TrustRadius Pages Cited</h4>
                              <div className="tr-pages-list">
                                {prompt.trPagesCited.map((page, idx) => (
                                  <div key={idx} className="tr-page-row">
                                    <div className="page-info">
                                      <span className="page-name">{page.page}</span>
                                      <span className="page-type-badge">{page.type}</span>
                                    </div>
                                    <div className="page-stats">
                                      <span className="page-citations">{page.citations}</span>
                                      <span className="page-freq">{page.frequency}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Trend Chart Placeholder */}
                          <div className="trend-section">
                            <h4>Trend Over Time</h4>
                            <div className="trend-chart-placeholder">
                              <div className="trend-bars">
                                {trendData.weekly.map((d, i) => (
                                  <div key={i} className="trend-bar-group">
                                    <div 
                                      className="trend-bar" 
                                      style={{ height: `${d.shareOfVoice * 2}px` }}
                                    ></div>
                                    <span className="trend-label">{d.period}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* TR Page Type Performance */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>TrustRadius Content Performance</h2>
                  <p className="section-subtitle">Which TrustRadius page types are driving the most visibility.</p>
                </div>

                <div className="page-type-performance">
                  {trustRadiusMetrics.byPageType.map((pt, idx) => (
                    <div key={pt.type} className="page-type-perf-card">
                      <div className="ptp-header">
                        <span className="ptp-icon" style={{ backgroundColor: chartColors[idx] }}>
                          {pt.type.charAt(0)}
                        </span>
                        <span className="ptp-name">{pt.type}</span>
                      </div>
                      <div className="ptp-value">{pt.citations.toLocaleString()}</div>
                      <div className="ptp-meta">
                        <span className="ptp-percentage">{pt.percentage}% of total</span>
                        <span className={`ptp-trend ${pt.trend >= 0 ? 'up' : 'down'}`}>
                          {pt.trend >= 0 ? '↑' : '↓'} {pt.trend}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* ==================== COMPETITIVE TAB ==================== */}
          {activeTab === 'competitive' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">Competitive Analysis</h1>
                  <p className="page-subtitle">Benchmark your GEO performance against key competitors.</p>
                </div>
                <div className="page-actions">
                  <button className="btn-outline">Edit Competitors</button>
                  <button className="btn-primary">Export Comparison</button>
                </div>
              </section>

              {/* Competitor Comparison Table */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Share of Voice Comparison</h2>
                </div>

                <div className="comparison-table-container">
                  <table className="data-table comparison-table">
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Share of Voice</th>
                        <th>Total Citations</th>
                        <th>TR Citations</th>
                        <th>Trend</th>
                        <th>Top Performing Prompt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="your-brand">
                        <td>
                          <div className="brand-cell">
                            <div className="brand-logo" style={{ backgroundColor: '#2D8CFF' }}>Z</div>
                            <span>Zoom Workplace</span>
                            <span className="you-badge">You</span>
                          </div>
                        </td>
                        <td>
                          <div className="sov-cell-large">
                            <span className="sov-value">38%</span>
                            <div className="sov-bar"><div className="sov-fill high" style={{ width: '38%' }}></div></div>
                          </div>
                        </td>
                        <td>2,847</td>
                        <td>892</td>
                        <td className="trend up">↑ +12%</td>
                        <td className="top-prompt">Zoom vs Teams comparison</td>
                      </tr>
                      {topicResearchData.competitorBenchmark.slice(1).map((comp) => (
                        <tr key={comp.brand}>
                          <td>
                            <div className="brand-cell">
                              <div className="brand-logo" style={{ backgroundColor: comp.color }}>{comp.brand.charAt(0)}</div>
                              <span>{comp.brand}</span>
                            </div>
                          </td>
                          <td>
                            <div className="sov-cell-large">
                              <span className="sov-value">{comp.shareOfVoice}%</span>
                              <div className="sov-bar"><div className="sov-fill" style={{ width: `${comp.shareOfVoice}%`, backgroundColor: comp.color }}></div></div>
                            </div>
                          </td>
                          <td>{comp.citations.toLocaleString()}</td>
                          <td>{Math.floor(comp.citations * 0.25)}</td>
                          <td className={`trend ${comp.trend >= 0 ? 'up' : 'down'}`}>
                            {comp.trend >= 0 ? '↑' : '↓'} {comp.trend >= 0 ? '+' : ''}{comp.trend}%
                          </td>
                          <td className="top-prompt">{comp.brand} reviews and pricing</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Site Citation Analysis */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Site Citation Frequency</h2>
                  <p className="section-subtitle">Which sites drive the most visibility for your tracked prompts.</p>
                </div>

                <div className="site-analysis-grid">
                  <div className="site-ranking">
                    {topicResearchData.topCitedSites.map((site, idx) => (
                      <div 
                        key={site.site} 
                        className={`site-ranking-row ${site.site === 'trustradius.com' ? 'highlight' : ''}`}
                      >
                        <span className="site-position">#{idx + 1}</span>
                        <div className="site-details">
                          <span className="site-name">{site.site}</span>
                          <div className="site-bar-full">
                            <div 
                              className="site-bar-fill" 
                              style={{ 
                                width: `${(site.citations / topicResearchData.topCitedSites[0].citations) * 100}%`,
                                backgroundColor: site.site === 'trustradius.com' ? '#00A6A6' : chartColors[idx]
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="site-metrics">
                          <span className="site-citations">{site.citations.toLocaleString()}</span>
                          <span className="site-percentage">{site.percentage}%</span>
                          <span className={`site-change ${site.change >= 0 ? 'up' : 'down'}`}>
                            {site.change >= 0 ? '+' : ''}{site.change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Competitive Insights */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Competitive Insights</h2>
                </div>
                <div className="insights-grid">
                  <div className="insight-card positive">
                    <span className="insight-icon">🎯</span>
                    <div className="insight-content">
                      <h4>Winning Prompts</h4>
                      <p>You lead in <strong>3 of 8</strong> tracked prompts, particularly in enterprise and security-focused queries.</p>
                    </div>
                  </div>
                  <div className="insight-card warning">
                    <span className="insight-icon">⚠️</span>
                    <div className="insight-content">
                      <h4>Opportunity Gap</h4>
                      <p>Microsoft Teams is gaining share in "remote team" prompts. Consider optimizing TrustRadius content for this topic.</p>
                    </div>
                  </div>
                  <div className="insight-card info">
                    <span className="insight-icon">💡</span>
                    <div className="insight-content">
                      <h4>TrustRadius Advantage</h4>
                      <p>TrustRadius comparison pages drive <strong>2.3x more citations</strong> than the next review site for your brand.</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ==================== CRAWL ANALYTICS TAB ==================== */}
          {activeTab === 'crawl' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">AI Crawl Analytics</h1>
                  <p className="page-subtitle">See how often AI crawlers visit your TrustRadius profile pages and content.</p>
                </div>
                <div className="page-actions">
                  <div className="timeframe-selector">
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'weekly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('weekly')}
                    >Weekly</button>
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'monthly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('monthly')}
                    >Monthly</button>
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'yearly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('yearly')}
                    >Yearly</button>
                  </div>
                  <button className="btn-primary">Download Data</button>
                </div>
              </section>

              {/* Crawl Volume Stats */}
              <div className="stats-grid four-col">
                <div className="stat-card highlight-crawl">
                  <span className="stat-label">Total Crawl Volume</span>
                  <div className="stat-value">{crawlVolumeData.totalCrawls.toLocaleString()}</div>
                  <div className="stat-sublabel">This month</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Weekly Change</span>
                  <div className="stat-value change up">+{crawlVolumeData.weeklyChange}%</div>
                  <div className="stat-sublabel">vs last week</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Monthly Change</span>
                  <div className="stat-value change up">+{crawlVolumeData.monthlyChange}%</div>
                  <div className="stat-sublabel">vs last month</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Yearly Change</span>
                  <div className="stat-value change up">+{crawlVolumeData.yearlyChange}%</div>
                  <div className="stat-sublabel">vs last year</div>
                </div>
              </div>

              {/* Crawl by AI Crawler */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Volume by AI Crawler</h2>
                  <p className="section-subtitle">Breakdown of crawl activity by major AI bots from Cloudflare logs.</p>
                </div>

                <div className="crawler-breakdown">
                  {crawlVolumeData.byCrawler.map((crawler) => (
                    <div key={crawler.crawler} className="crawler-card">
                      <div className="crawler-header">
                        <div className="crawler-icon" style={{ backgroundColor: crawler.color }}>
                          {crawler.crawler.charAt(0)}
                        </div>
                        <div className="crawler-info">
                          <span className="crawler-name">{crawler.crawler}</span>
                          <span className="crawler-percentage">{crawler.percentage}% of total</span>
                        </div>
                      </div>
                      <div className="crawler-volume">{crawler.volume.toLocaleString()}</div>
                      <div className="crawler-bar">
                        <div 
                          className="crawler-bar-fill" 
                          style={{ 
                            width: `${(crawler.volume / crawlVolumeData.byCrawler[0].volume) * 100}%`,
                            backgroundColor: crawler.color 
                          }}
                        ></div>
                      </div>
                      <div className={`crawler-trend ${crawler.weeklyChange >= 0 ? 'up' : 'down'}`}>
                        {crawler.weeklyChange >= 0 ? '↑' : '↓'} {Math.abs(crawler.weeklyChange)}% this week
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Two Column: Page Type + Product */}
              <div className="two-column-grid">
                {/* By Page Type */}
                <section className="dashboard-section">
                  <div className="section-header">
                    <h2>Volume by Page Type</h2>
                  </div>
                  <div className="page-type-crawl-list">
                    {crawlVolumeData.byPageType.map((pt, idx) => (
                      <div key={pt.pageType} className="page-type-crawl-row">
                        <div className="pt-info">
                          <span className="pt-color" style={{ backgroundColor: chartColors[idx] }}></span>
                          <span className="pt-name">{pt.pageType}</span>
                        </div>
                        <div className="pt-bar-container">
                          <div className="pt-bar">
                            <div 
                              className="pt-bar-fill" 
                              style={{ 
                                width: `${pt.percentage}%`,
                                backgroundColor: chartColors[idx]
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="pt-stats">
                          <span className="pt-volume">{pt.volume.toLocaleString()}</span>
                          <span className={`pt-trend ${pt.trend >= 0 ? 'up' : 'down'}`}>
                            {pt.trend >= 0 ? '+' : ''}{pt.trend}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* By Product */}
                <section className="dashboard-section">
                  <div className="section-header">
                    <h2>Top Products by Crawl Volume</h2>
                  </div>
                  <div className="product-crawl-list">
                    {crawlVolumeData.byProduct.map((product, idx) => (
                      <div key={product.product} className="product-crawl-row">
                        <span className="product-rank">#{idx + 1}</span>
                        <span className="product-name">{product.product}</span>
                        <span className="product-volume">{product.volume.toLocaleString()}</span>
                        <span className={`product-trend ${product.weeklyChange >= 0 ? 'up' : 'down'}`}>
                          {product.weeklyChange >= 0 ? '↑' : '↓'} {Math.abs(product.weeklyChange)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Timeline Chart */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2>Crawl Volume Over Time</h2>
                </div>
                <div className="timeline-chart">
                  <div className="timeline-bars">
                    {crawlVolumeData.timeline.map((point, idx) => (
                      <div key={idx} className="timeline-bar-group">
                        <div 
                          className="timeline-bar" 
                          style={{ height: `${(point.volume / crawlVolumeData.timeline[3].volume) * 150}px` }}
                        >
                          <span className="bar-value">{(point.volume / 1000).toFixed(0)}K</span>
                        </div>
                        <span className="timeline-label">{point.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Data Source Note */}
              <div className="data-source-note">
                <span className="note-icon">ℹ️</span>
                <span>Data sourced from Cloudflare CDN logs. Updates daily. Last updated: April 6, 2026, 8:00 AM PST</span>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  )
}

export default GEODashboard
