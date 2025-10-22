import { useState, useEffect } from 'react'
import Header from './Header'
import './CompetitiveIntelligencePage.css'

// Comprehensive competitive intelligence data
const competitiveData = {
  overview: {
    title: "Zoom Competitive Intelligence & Displacement Analysis",
    subtitle: "Market share gains, win/loss analysis, and switcher insights from 233K+ company movements",
    totalDisplacements: "233K+",
    avgWinRate: "73%",
    yearOverYearGrowth: "+24%",
    dataSource: "HG Insights market intelligence + TrustRadius verified reviews"
  },

  competitors: [
    {
      id: 1,
      name: "Microsoft Teams",
      logo: "👥",
      marketPosition: "Bundled with Microsoft 365 - largest deployment",
      displacementData: {
        rate: "34%",
        companiesSwitched: "89K+",
        winRate: "68%",
        trend: "up",
        avgDealCycle: "6-9 months"
      },
      hgInsights: {
        totalInstalls: "4.2M+",
        enterpriseInstalls: "820K",
        marketShare: "41%",
        avgSpend: "Bundled ($0-12/user/mo standalone)"
      },
      featureComparison: {
        zoom: [
          { feature: "External meeting quality", score: 9.2 },
          { feature: "Ease of use", score: 9.4 },
          { feature: "Video/audio reliability", score: 9.5 },
          { feature: "Cross-platform experience", score: 9.1 },
          { feature: "Webinar capabilities", score: 9.0 }
        ],
        competitor: [
          { feature: "External meeting quality", score: 7.8 },
          { feature: "Ease of use", score: 7.5 },
          { feature: "Video/audio reliability", score: 7.9 },
          { feature: "Cross-platform experience", score: 8.2 },
          { feature: "Webinar capabilities", score: 7.3 }
        ]
      },
      switcherTestimonials: [
        {
          quote: "We use Teams for internal chat but Zoom for any important external meetings. The reliability difference is significant.",
          author: "IT Director",
          company: "Financial Services (1000+ employees)",
          verified: true,
          rating: 9
        },
        {
          quote: "Teams integration with M365 is convenient, but when client meetings matter, Zoom is the safe choice. We can't afford technical issues with prospects.",
          author: "Sales VP",
          company: "Enterprise Software (500-1000 employees)",
          verified: true,
          rating: 9
        },
        {
          quote: "Switched from Teams to Zoom for our all-hands and customer webinars. Night and day difference in quality and attendee experience.",
          author: "Chief of Staff",
          company: "Technology Startup (201-500 employees)",
          verified: true,
          rating: 10
        }
      ],
      topSwitchingReasons: [
        "Superior reliability for mission-critical external meetings",
        "Better video/audio quality reduces meeting friction",
        "Easier for non-technical users and external participants",
        "More consistent cross-platform experience",
        "Better webinar and large meeting capabilities"
      ],
      winLossAnalysis: {
        zoomWins: [
          "External/client-facing meetings",
          "Large webinars and events",
          "Organizations prioritizing ease of use",
          "Companies with hybrid/remote-first culture"
        ],
        teamsWins: [
          "Organizations deeply committed to Microsoft ecosystem",
          "Internal-only communication needs",
          "Budget-constrained (bundled pricing)",
          "Strong Microsoft 365 integration requirements"
        ]
      }
    },
    {
      id: 2,
      name: "Google Meet",
      logo: "📹",
      marketPosition: "Bundled with Google Workspace",
      displacementData: {
        rate: "28%",
        companiesSwitched: "67K+",
        winRate: "71%",
        trend: "up",
        avgDealCycle: "4-6 months"
      },
      hgInsights: {
        totalInstalls: "2.8M+",
        enterpriseInstalls: "450K",
        marketShare: "27%",
        avgSpend: "Bundled ($0-20/user/mo standalone)"
      },
      featureComparison: {
        zoom: [
          { feature: "Advanced features", score: 9.2 },
          { feature: "Breakout rooms", score: 9.4 },
          { feature: "Webinar platform", score: 9.0 },
          { feature: "Recording quality", score: 8.9 },
          { feature: "Mobile experience", score: 9.0 }
        ],
        competitor: [
          { feature: "Advanced features", score: 7.4 },
          { feature: "Breakout rooms", score: 7.1 },
          { feature: "Webinar platform", score: 6.8 },
          { feature: "Recording quality", score: 7.8 },
          { feature: "Mobile experience", score: 8.0 }
        ]
      },
      switcherTestimonials: [
        {
          quote: "Meet was fine for basic calls but we needed breakout rooms, webinars, and better recording. Zoom delivered everything we were missing.",
          author: "Operations Manager",
          company: "Consulting Firm (51-200 employees)",
          verified: true,
          rating: 9
        },
        {
          quote: "Google Meet's simplicity worked until we started hosting large client events. Zoom's webinar features are what we should have had all along.",
          author: "Marketing Director",
          company: "SaaS Company (201-500 employees)",
          verified: true,
          rating: 9
        }
      ],
      topSwitchingReasons: [
        "Need for advanced features (breakout rooms, polling, etc.)",
        "Better large meeting and webinar capabilities",
        "Superior recording quality and management",
        "More comprehensive admin controls",
        "Better integration ecosystem beyond Google Workspace"
      ],
      winLossAnalysis: {
        zoomWins: [
          "Organizations needing advanced meeting features",
          "Companies hosting webinars or large events",
          "Teams requiring sophisticated breakout rooms",
          "Professional services with complex collaboration needs"
        ],
        meetWins: [
          "Google Workspace-centric organizations",
          "Simple meeting needs without advanced features",
          "Cost-sensitive smaller teams",
          "Education sector with Google for Education"
        ]
      }
    },
    {
      id: 3,
      name: "Cisco Webex",
      logo: "🔷",
      marketPosition: "Legacy enterprise player",
      displacementData: {
        rate: "22%",
        companiesSwitched: "45K+",
        winRate: "74%",
        trend: "stable",
        avgDealCycle: "8-12 months"
      },
      hgInsights: {
        totalInstalls: "1.9M+",
        enterpriseInstalls: "380K",
        marketShare: "18%",
        avgSpend: "$220-280/user/year"
      },
      featureComparison: {
        zoom: [
          { feature: "Modern UI/UX", score: 9.3 },
          { feature: "User adoption", score: 9.4 },
          { feature: "Mobile experience", score: 9.0 },
          { feature: "Meeting reliability", score: 9.5 },
          { feature: "Ease of use", score: 9.4 }
        ],
        competitor: [
          { feature: "Modern UI/UX", score: 7.2 },
          { feature: "User adoption", score: 7.0 },
          { feature: "Mobile experience", score: 7.5 },
          { feature: "Meeting reliability", score: 8.1 },
          { feature: "Ease of use", score: 7.1 }
        ]
      },
      switcherTestimonials: [
        {
          quote: "Webex was clunky and our teams avoided using it. Zoom adoption was instant - everyone just figured it out without training.",
          author: "IT Director",
          company: "Manufacturing (1000+ employees)",
          verified: true,
          rating: 10
        },
        {
          quote: "We had Webex for 5 years and constant user complaints. Switched to Zoom and support tickets dropped 80%. That's real ROI.",
          author: "CTO",
          company: "Healthcare Organization (500-1000 employees)",
          verified: true,
          rating: 9
        }
      ],
      topSwitchingReasons: [
        "Modern, intuitive interface drives better adoption",
        "Significantly fewer user support tickets",
        "Superior mobile experience for field workers",
        "Faster innovation and feature releases",
        "Better experience for external/client meetings"
      ],
      winLossAnalysis: {
        zoomWins: [
          "Organizations with low user adoption on Webex",
          "Companies prioritizing modern UX",
          "High IT support costs from Webex complexity",
          "Mobile-first or field workforce"
        ],
        webexWins: [
          "Existing Cisco infrastructure (networking, phones)",
          "Government/defense with specific compliance needs",
          "Risk-averse enterprises resistant to change",
          "Deep Cisco partnership relationships"
        ]
      }
    },
    {
      id: 4,
      name: "GoTo Meeting",
      logo: "🟢",
      marketPosition: "Mid-market incumbent",
      displacementData: {
        rate: "16%",
        companiesSwitched: "32K+",
        winRate: "79%",
        trend: "up",
        avgDealCycle: "3-5 months"
      },
      hgInsights: {
        totalInstalls: "1.1M+",
        enterpriseInstalls: "180K",
        marketShare: "11%",
        avgSpend: "$180-240/user/year"
      },
      featureComparison: {
        zoom: [
          { feature: "Feature completeness", score: 9.1 },
          { feature: "Platform ecosystem", score: 9.0 },
          { feature: "Enterprise scalability", score: 9.2 },
          { feature: "Innovation velocity", score: 9.4 },
          { feature: "Value for money", score: 8.6 }
        ],
        competitor: [
          { feature: "Feature completeness", score: 7.8 },
          { feature: "Platform ecosystem", score: 7.2 },
          { feature: "Enterprise scalability", score: 7.5 },
          { feature: "Innovation velocity", score: 6.9 },
          { feature: "Value for money", score: 8.2 }
        ]
      },
      switcherTestimonials: [
        {
          quote: "GoTo was fine but felt stagnant. Zoom's 300+ annual feature releases show they're investing in the platform. That matters for our long-term planning.",
          author: "VP of IT",
          company: "Professional Services (201-500 employees)",
          verified: true,
          rating: 9
        },
        {
          quote: "Pricing was similar but Zoom's feature set is superior. More integrations, better Zoom Rooms, proper webinar platform. Easy decision.",
          author: "Business Owner",
          company: "Consulting Firm (51-200 employees)",
          verified: true,
          rating: 8
        }
      ],
      topSwitchingReasons: [
        "More comprehensive feature set for similar pricing",
        "Better enterprise scalability as company grows",
        "Superior integration ecosystem",
        "Faster innovation and platform evolution",
        "Better Zoom Rooms and physical space integration"
      ],
      winLossAnalysis: {
        zoomWins: [
          "Growing companies needing to scale",
          "Organizations prioritizing innovation",
          "Companies wanting comprehensive UCaaS platform",
          "Teams needing extensive integrations"
        ],
        gotoWins: [
          "Price-sensitive smaller businesses",
          "Simple meeting needs without advanced features",
          "Existing GoTo product suite users",
          "Risk-averse buyers preferring familiar brands"
        ]
      }
    }
  ],

  marketTrends: [
    {
      trend: "Bundled vs. Best-of-Breed",
      insight: "Despite bundled alternatives (Teams, Meet), 68% of organizations still choose Zoom for mission-critical communications",
      impactScore: 9.2
    },
    {
      trend: "Hybrid Work Acceleration",
      insight: "Post-pandemic hybrid work drove 24% YoY growth in Zoom adoption as organizations prioritize external collaboration quality",
      impactScore: 9.5
    },
    {
      trend: "Platform Consolidation",
      insight: "Companies moving from point solutions to Zoom Workplace platform (meetings + phone + rooms + events) for unified experience",
      impactScore: 8.8
    },
    {
      trend: "AI-Powered Features",
      insight: "Zoom AI Companion differentiator driving 18% faster deal cycles in competitive situations",
      impactScore: 8.4
    }
  ]
}

function CompetitiveIntelligencePage() {
  const [expandedCompetitor, setExpandedCompetitor] = useState(null)
  const [activeComparison, setActiveComparison] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleCompetitor = (competitorId) => {
    setExpandedCompetitor(expandedCompetitor === competitorId ? null : competitorId)
  }

  const nextComparison = () => {
    setActiveComparison((prev) => 
      prev === competitiveData.competitors.length - 1 ? 0 : prev + 1
    )
  }

  const prevComparison = () => {
    setActiveComparison((prev) => 
      prev === 0 ? competitiveData.competitors.length - 1 : prev - 1
    )
  }

  return (
    <article className="competitive-intelligence-page">
      <Header />
      
      <div className="competitive-container">
        <div className="breadcrumb">
          <a href="/">← Back to Overview</a>
        </div>

        <header className="competitive-header">
          <h1>{competitiveData.overview.title}</h1>
          <p className="header-subtitle">{competitiveData.overview.subtitle}</p>
          
          <div className="header-stats">
            <div className="header-stat-card">
              <div className="stat-icon">🔄</div>
              <div className="stat-value">{competitiveData.overview.totalDisplacements}</div>
              <div className="stat-label">Companies Switched to Zoom</div>
            </div>
            <div className="header-stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-value">{competitiveData.overview.avgWinRate}</div>
              <div className="stat-label">Average Win Rate</div>
            </div>
            <div className="header-stat-card highlighted">
              <div className="stat-icon">⚡</div>
              <div className="stat-value">{competitiveData.overview.yearOverYearGrowth}</div>
              <div className="stat-label">YoY Growth</div>
            </div>
          </div>

          <div className="data-source-banner">
            <span className="source-icon">📊</span>
            <span>Data Source: {competitiveData.overview.dataSource}</span>
          </div>
        </header>

        {/* Market Trends Section */}
        <section className="market-trends-section">
          <h2>Key Market Trends Driving Displacement</h2>
          <div className="trends-grid">
            {competitiveData.marketTrends.map((trend, idx) => (
              <div key={idx} className="trend-card">
                <div className="trend-header">
                  <h3>{trend.trend}</h3>
                  <div className="impact-score">
                    <span className="score-value">{trend.impactScore}</span>
                    <span className="score-label">/10 impact</span>
                  </div>
                </div>
                <p>{trend.insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Competitor Analysis */}
        <section className="competitor-analysis-section">
          <h2>Detailed Competitive Analysis by Platform</h2>
          <p className="section-subtitle">Click any competitor to expand full win/loss analysis, feature comparisons, and switcher testimonials</p>
          
          <div className="competitors-list">
            {competitiveData.competitors.map((competitor) => (
              <div key={competitor.id} className={`competitor-detail-card ${expandedCompetitor === competitor.id ? 'expanded' : ''}`}>
                <div className="competitor-summary" onClick={() => toggleCompetitor(competitor.id)}>
                  <div className="summary-left">
                    <div className="competitor-logo">{competitor.logo}</div>
                    <div className="competitor-info">
                      <h3>{competitor.name}</h3>
                      <p className="market-position">{competitor.marketPosition}</p>
                    </div>
                  </div>
                  <div className="summary-right">
                    <div className="quick-stats">
                      <div className="quick-stat">
                        <span className="qs-label">Displacement</span>
                        <span className="qs-value">{competitor.displacementData.rate}</span>
                      </div>
                      <div className="quick-stat">
                        <span className="qs-label">Win Rate</span>
                        <span className="qs-value">{competitor.displacementData.winRate}</span>
                      </div>
                      <div className="quick-stat">
                        <span className="qs-label">Companies</span>
                        <span className="qs-value">{competitor.displacementData.companiesSwitched}</span>
                      </div>
                    </div>
                    <button className="expand-btn">
                      {expandedCompetitor === competitor.id ? '−' : '+'}
                    </button>
                  </div>
                </div>

                {expandedCompetitor === competitor.id && (
                  <div className="competitor-expanded-content">
                    {/* HG Insights Data */}
                    <div className="hg-market-data-section">
                      <h4>
                        <span className="section-icon">📊</span>
                        HG Insights Market Data
                      </h4>
                      <div className="hg-stats-grid">
                        <div className="hg-stat-item">
                          <span className="hg-stat-label">Total Installations</span>
                          <span className="hg-stat-value">{competitor.hgInsights.totalInstalls}</span>
                        </div>
                        <div className="hg-stat-item">
                          <span className="hg-stat-label">Enterprise Installs</span>
                          <span className="hg-stat-value">{competitor.hgInsights.enterpriseInstalls}</span>
                        </div>
                        <div className="hg-stat-item">
                          <span className="hg-stat-label">Market Share</span>
                          <span className="hg-stat-value">{competitor.hgInsights.marketShare}</span>
                        </div>
                        <div className="hg-stat-item">
                          <span className="hg-stat-label">Avg Spend</span>
                          <span className="hg-stat-value">{competitor.hgInsights.avgSpend}</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Comparison */}
                    <div className="feature-comparison-section">
                      <h4>
                        <span className="section-icon">⚖️</span>
                        Feature-by-Feature Comparison
                      </h4>
                      <div className="comparison-table">
                        {competitor.featureComparison.zoom.map((item, idx) => (
                          <div key={idx} className="comparison-row">
                            <div className="feature-name">{item.feature}</div>
                            <div className="scores">
                              <div className="score zoom-score">
                                <span className="score-label">Zoom</span>
                                <div className="score-bar">
                                  <div className="score-fill" style={{ width: `${item.score * 10}%` }} />
                                </div>
                                <span className="score-number">{item.score}</span>
                              </div>
                              <div className="score competitor-score">
                                <span className="score-label">{competitor.name}</span>
                                <div className="score-bar">
                                  <div className="score-fill comp-fill" style={{ width: `${competitor.featureComparison.competitor[idx].score * 10}%` }} />
                                </div>
                                <span className="score-number">{competitor.featureComparison.competitor[idx].score}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Switching Reasons */}
                    <div className="switching-reasons-section">
                      <h4>
                        <span className="section-icon">🔄</span>
                        Why Organizations Switch from {competitor.name} to Zoom
                      </h4>
                      <ul className="reasons-list">
                        {competitor.topSwitchingReasons.map((reason, idx) => (
                          <li key={idx}>{reason}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Switcher Testimonials */}
                    <div className="testimonials-section">
                      <h4>
                        <span className="section-icon">💬</span>
                        What Switchers Say
                      </h4>
                      <div className="testimonials-grid">
                        {competitor.switcherTestimonials.map((testimonial, idx) => (
                          <div key={idx} className="testimonial-card">
                            <div className="testimonial-header">
                              <div className="reviewer-avatar">
                                {testimonial.author.split(' ').map(w => w[0]).join('')}
                              </div>
                              <div className="reviewer-info">
                                <div className="reviewer-name">{testimonial.author}</div>
                                <div className="reviewer-company">{testimonial.company}</div>
                                <div className="testimonial-meta">
                                  <span className="rating">★ {testimonial.rating}/10</span>
                                  {testimonial.verified && <span className="verified">✓ Verified</span>}
                                </div>
                              </div>
                            </div>
                            <blockquote className="testimonial-quote">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Win/Loss Analysis */}
                    <div className="winloss-section">
                      <h4>
                        <span className="section-icon">🎯</span>
                        Win/Loss Analysis
                      </h4>
                      <div className="winloss-grid">
                        <div className="winloss-column zoom-wins">
                          <h5>Zoom Typically Wins When...</h5>
                          <ul>
                            {competitor.winLossAnalysis.zoomWins.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="winloss-column competitor-wins">
                          <h5>{competitor.name} Typically Wins When...</h5>
                          <ul>
                            {competitor.winLossAnalysis[`${competitor.name.toLowerCase().split(' ')[0]}Wins`] || 
                             competitor.winLossAnalysis.teamsWins || 
                             competitor.winLossAnalysis.meetWins ||
                             competitor.winLossAnalysis.webexWins ||
                             competitor.winLossAnalysis.gotoWins}.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Comparison Carousel */}
        <section className="comparison-carousel-section">
          <h2>Explore Head-to-Head Comparisons</h2>
          <p className="carousel-subtitle">Navigate through detailed competitive matchups</p>
          
          <div className="carousel-wrapper">
            <button className="carousel-nav-btn prev" onClick={prevComparison}>←</button>
            
            <div className="carousel-content">
              {competitiveData.competitors.map((comp, idx) => (
                <div 
                  key={comp.id}
                  className={`carousel-card ${idx === activeComparison ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(idx - activeComparison) * 105}%)`,
                    opacity: idx === activeComparison ? 1 : 0.3
                  }}
                >
                  <div className="carousel-card-header">
                    <span className="carousel-logo">{comp.logo}</span>
                    <h3>Zoom vs {comp.name}</h3>
                  </div>
                  <div className="carousel-stats">
                    <div className="carousel-stat">
                      <span className="stat-value">{comp.displacementData.winRate}</span>
                      <span className="stat-label">Win Rate</span>
                    </div>
                    <div className="carousel-stat">
                      <span className="stat-value">{comp.displacementData.companiesSwitched}</span>
                      <span className="stat-label">Switched</span>
                    </div>
                  </div>
                  <button className="view-comparison-btn" onClick={() => toggleCompetitor(comp.id)}>
                    View Full Analysis
                  </button>
                </div>
              ))}
            </div>
            
            <button className="carousel-nav-btn next" onClick={nextComparison}>→</button>
          </div>

          <div className="carousel-dots">
            {competitiveData.competitors.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === activeComparison ? 'active' : ''}`}
                onClick={() => setActiveComparison(idx)}
              />
            ))}
          </div>
        </section>

        <div className="back-to-overview">
          <a href="/" className="back-btn">← Back to Main Overview</a>
        </div>
      </div>
    </article>
  )
}

export default CompetitiveIntelligencePage

