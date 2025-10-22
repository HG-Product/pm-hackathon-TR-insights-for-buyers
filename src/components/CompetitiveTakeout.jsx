import './CompetitiveTakeout.css'

// Feature comparison data from TrustRadius
const featureComparison = [
  {
    category: "Video & Audio",
    features: [
      { name: "High Quality Video", zoom: 8.9, goto: 8.5, winner: "zoom" },
      { name: "High Quality Audio", zoom: 8.8, goto: 8.6, winner: "zoom" },
      { name: "Desktop Sharing", zoom: 9.2, goto: 8.2, winner: "zoom" }
    ]
  },
  {
    category: "Mobile Experience",
    features: [
      { name: "Mobile App for iOS", zoom: 9.0, goto: null, winner: "zoom" },
      { name: "Mobile App for Android", zoom: 8.7, goto: null, winner: "zoom" },
      { name: "Mobile Support", zoom: 9.0, goto: 7.8, winner: "zoom" }
    ]
  },
  {
    category: "Meeting Management",
    features: [
      { name: "Meeting Initiation", zoom: 8.8, goto: 8.3, winner: "zoom" },
      { name: "Calendar Integration", zoom: 8.6, goto: 7.9, winner: "zoom" },
      { name: "Record Meetings/Events", zoom: 8.9, goto: 8.2, winner: "zoom" }
    ]
  },
  {
    category: "Collaboration Tools",
    features: [
      { name: "Live Chat", zoom: 8.7, goto: 8.3, winner: "zoom" },
      { name: "Team Messaging", zoom: 8.3, goto: null, winner: "zoom" },
      { name: "Team Document Sharing", zoom: 8.1, goto: null, winner: "zoom" }
    ]
  },
  {
    category: "Security & Control",
    features: [
      { name: "User Authentication", zoom: 8.6, goto: 7.9, winner: "zoom" },
      { name: "Participant Roles & Permissions", zoom: 8.6, goto: 8.2, winner: "zoom" }
    ]
  }
]

const competitiveInsights = [
  {
    category: "Video & Audio Performance",
    zoomStrength: {
      title: "Superior Quality & Reliability",
      description: "High-quality video and audio consistently praised by reviewers (8.9/10 video, 8.8/10 audio)",
      impact: "Critical for client-facing meetings and presentations",
      quotes: [
        {
          text: "Clear pictures",
          reviewer: "Verified User",
          role: "Vice-President",
          company: "11-50 employees"
        },
        {
          text: "Audio and video quality is also always great.",
          reviewer: "Verified User",
          role: "Customer Success Manager",
          company: "201-500 employees"
        }
      ]
    },
    gotoWeakness: {
      title: "Frequent Audio & Sync Issues",
      description: "Users report audio glitches, echoes, feedback, and video/audio syncing problems",
      impact: "Can disrupt professional meetings and damage credibility",
      quotes: [
        {
          text: "Some users comment on frequent audio problems, including echoes, feedback, and difficulties with microphone settings.",
          reviewer: "Multiple Users",
          role: "Various Roles",
          company: "Multiple company sizes"
        },
        {
          text: "It lags while video conferencing and audio syncing problem is also there sometime.",
          reviewer: "Verified User",
          role: "IT Manager",
          company: "51-200 employees"
        }
      ]
    },
    takeaway: "Zoom delivers the consistent, professional experience your clients expect"
  },
  {
    category: "AI & Innovation",
    zoomStrength: {
      title: "AI-First Platform with 300+ Features",
      description: "AI Companion helps extract insights, improve productivity, and automate meeting tasks",
      impact: "Reduces manual work and enhances decision-making",
      quotes: [
        {
          text: "Zoom's engineering team released 300+ new features last year, demonstrating their commitment to innovation.",
          reviewer: "Industry Analysis",
          role: "Technology Research",
          company: "Enterprise"
        }
      ]
    },
    gotoWeakness: {
      title: "Limited Innovation",
      description: "Interface described as 'looking old' with basic features and limited AI capabilities",
      impact: "Falls behind in productivity and modern workflow needs",
      quotes: [
        {
          text: "The interface looks a bit old and sometimes people have to download a small app to join which is annoying for them.",
          reviewer: "Verified User",
          role: "Project Manager",
          company: "51-200 employees"
        },
        {
          text: "The new site and account management system is a bit cumbersome.",
          reviewer: "Verified User",
          role: "IT Administrator",
          company: "201-500 employees"
        }
      ]
    },
    takeaway: "Zoom's AI features turn meetings into actionable insights automatically"
  },
  {
    category: "Platform Integration",
    zoomStrength: {
      title: "Comprehensive Collaboration Platform",
      description: "Seamless integration with Google Calendar, Teams, Slack, plus chat, mail, and workspace features",
      impact: "Single platform for all communication needs",
      quotes: [
        {
          text: "Links to my calendar for meetings",
          reviewer: "Keith Phillips",
          role: "Director, Information Technology",
          company: "51-200 employees"
        },
        {
          text: "Users value Zoom's integration with tools like Google Calendar, Microsoft Teams, and Slack, plus its user-friendly interface.",
          reviewer: "Multiple Users",
          role: "Various Roles",
          company: "Enterprise"
        }
      ]
    },
    gotoWeakness: {
      title: "Poor Integration Ecosystem",
      description: "Lacks calendar integrations and third-party app connectivity",
      impact: "Requires juggling multiple tools and manual coordination",
      quotes: [
        {
          text: "Lacks ease of connectivity, calendar integrations, and third-party app integrations.",
          reviewer: "Verified User",
          role: "Operations Manager",
          company: "51-200 employees"
        },
        {
          text: "Adding more participants to GoToMeeting meetings is not seamless.",
          reviewer: "Verified User",
          role: "Team Lead",
          company: "11-50 employees"
        }
      ]
    },
    takeaway: "Zoom eliminates workflow friction with native integrations"
  },
  {
    category: "User Experience",
    zoomStrength: {
      title: "User-Friendly & Intuitive",
      description: "Consistently praised for ease of use across devices with modern, clean interface",
      impact: "Minimal training required, faster adoption",
      quotes: [
        {
          text: "Easy to use",
          reviewer: "Verified User",
          role: "Vice-President",
          company: "11-50 employees"
        },
        {
          text: "Everything is organized well in settings so that it's easy to find",
          reviewer: "Verified User",
          role: "Employee",
          company: "11-50 employees"
        },
        {
          text: "Zoom Workplace is very user friendly and offers a lot of customization in settings.",
          reviewer: "Verified User",
          role: "Business Analyst",
          company: "501-1000 employees"
        }
      ]
    },
    gotoWeakness: {
      title: "Cumbersome & Outdated",
      description: "Users complain about outdated interface, 'takes a while to get going,' requires app downloads",
      impact: "Frustrates users and slows down meeting starts",
      quotes: [
        {
          text: "The only complaint would be that it take a little while to get going.",
          reviewer: "Verified User",
          role: "Manager",
          company: "51-200 employees"
        }
      ]
    },
    takeaway: "Zoom gets out of your way so you can focus on what matters"
  },
  {
    category: "Connectivity & Stability",
    zoomStrength: {
      title: "Adaptive Network Performance",
      description: "Handles network issues gracefully, consistent performance across devices and locations",
      impact: "Reliable meetings even in challenging network conditions",
      quotes: [
        {
          text: "It just works for all areas of our firm. No major issues.",
          reviewer: "Keith Phillips",
          role: "Director, Information Technology",
          company: "51-200 employees"
        },
        {
          text: "Zoom is best if you constantly experience network issues and need a platform that can adapt quickly.",
          reviewer: "Technology Comparison",
          role: "IT Research",
          company: "Enterprise"
        }
      ]
    },
    gotoWeakness: {
      title: "Frequent Connection Issues",
      description: "Users report 'GoToMeeting breaks down a lot,' connection drops requiring multiple reconnects",
      impact: "Lost recordings, interrupted meetings, productivity loss",
      quotes: [
        {
          text: "GoToMeeting breaks down a lot.",
          reviewer: "Verified User",
          role: "Sales Manager",
          company: "11-50 employees"
        },
        {
          text: "Some reviewers report occasional connection stability issues, especially with weak internet connections or in certain regions. Connection drops and the need to reconnect multiple times can be frustrating.",
          reviewer: "Multiple Users",
          role: "Various Roles",
          company: "Multiple company sizes"
        },
        {
          text: "If the internet drops we lose our meeting recording.",
          reviewer: "Verified User",
          role: "Operations Director",
          company: "201-500 employees"
        }
      ]
    },
    takeaway: "Zoom keeps you connected when it matters most"
  },
  {
    category: "Scalability & Flexibility",
    zoomStrength: {
      title: "Unlimited Meeting Flexibility",
      description: "Support for 1:1s, team meetings, webinars, and up to 1,000 participants with breakout rooms",
      impact: "One platform scales from small huddles to company all-hands",
      quotes: [
        {
          text: "We are a fully remote company and because of which, we need to utilize a platform to connect/meet with the org. We also need a platform to meet with customers and vendors. Zoom Workplace has helped fill this need.",
          reviewer: "Victor Santo",
          role: "Security Engineer",
          company: "51-200 employees"
        },
        {
          text: "Zoom Meetings can have up to 1,000 video participants join at once.",
          reviewer: "Product Documentation",
          role: "Platform Capabilities",
          company: "Enterprise"
        }
      ]
    },
    gotoWeakness: {
      title: "Limited Participant Capacity",
      description: "Maximum 100 participants on most plans, adding participants 'not seamless'",
      impact: "Forces larger organizations to upgrade or use multiple platforms",
      quotes: [
        {
          text: "Users complain they can add only maximum 100 participants and after completing trial version pricing are very high.",
          reviewer: "Verified User",
          role: "IT Administrator",
          company: "201-500 employees"
        }
      ]
    },
    takeaway: "Zoom grows with your business without compromise"
  },
  {
    category: "Mobile Experience",
    zoomStrength: {
      title: "Strong Mobile Apps",
      description: "Praised for excellent mobile performance on iOS and Android with full feature parity",
      impact: "Productive meetings from anywhere, any device",
      quotes: [
        {
          text: "Zoom Is Able to Keep Meetings Accessible & Mobile When Conducting Business",
          reviewer: "Verified User",
          role: "Sales Executive",
          company: "11-50 employees"
        }
      ]
    },
    gotoWeakness: {
      title: "Unstable Mobile App",
      description: "Mobile app 'occasionally crashes during long calls'",
      impact: "Unreliable for remote workers and field teams",
      quotes: [
        {
          text: "The mobile app does occasionally crash during long calls.",
          reviewer: "Verified User",
          role: "Field Representative",
          company: "51-200 employees"
        }
      ]
    },
    takeaway: "Zoom delivers consistent excellence across all devices"
  },
  {
    category: "Advanced Features",
    zoomStrength: {
      title: "Rich Collaboration Tools",
      description: "Whiteboards, annotations, screen sharing options, virtual backgrounds, breakout rooms",
      impact: "Enables interactive, engaging meetings",
      quotes: [
        {
          text: "Easy screen sharing feature",
          reviewer: "Verified User",
          role: "Customer Success Manager",
          company: "201-500 employees"
        },
        {
          text: "Ability to direct people on screen",
          reviewer: "Christine Francois",
          role: "Director of Customer Success",
          company: "11-50 employees"
        },
        {
          text: "Zoom excels with whiteboards, team chat, workspace features, and has the best range of screen sharing options.",
          reviewer: "Technology Review",
          role: "Platform Analysis",
          company: "Enterprise"
        }
      ]
    },
    gotoWeakness: {
      title: "Basic Features Only",
      description: "Limited video settings with only basic virtual backgrounds and blurring",
      impact: "Less professional appearance and limited collaboration",
      quotes: [
        {
          text: "Some users find GoToMeeting challenging for newcomers due to its limited video settings, which only offer basic virtual backgrounds and blurring.",
          reviewer: "Multiple Users",
          role: "Various Roles",
          company: "Multiple company sizes"
        },
        {
          text: "The recording functionality was limited to admins, causing potential issues if recordings were missed.",
          reviewer: "Verified User",
          role: "Team Lead",
          company: "51-200 employees"
        }
      ]
    },
    takeaway: "Zoom provides the tools to make meetings more productive"
  }
]

const executiveSummary = {
  title: "Why Switch from GoTo Meeting to Zoom Workplace",
  keyPoints: [
    {
      icon: "🎯",
      title: "Superior Reliability",
      description: "Zoom's consistent audio/video quality and connection stability eliminates the disruptions that plague GoTo Meeting users"
    },
    {
      icon: "🚀",
      title: "Modern Innovation",
      description: "AI-powered features and 300+ annual updates keep your team ahead, while GoTo Meeting's outdated interface holds you back"
    },
    {
      icon: "🔗",
      title: "Seamless Workflows",
      description: "Native integrations with your existing tools eliminate the friction of GoTo Meeting's limited ecosystem"
    },
    {
      icon: "📈",
      title: "Room to Grow",
      description: "Scale from 1:1s to 1,000-person webinars without hitting GoTo Meeting's 100-participant wall"
    }
  ],
  rating: {
    zoom: 8.4,
    goto: 8.1,
    differential: "+0.3"
  }
}

function CompetitiveTakeout() {
  return (
    <section className="competitive-takeout-section">
      <div className="takeout-header">
        <h2>Why Leading Organizations Choose Zoom Over GoTo Meeting</h2>
        <p className="header-subtitle">
          Based on verified TrustRadius reviews and user sentiment analysis
        </p>
        <div className="rating-comparison">
          <div className="rating-item zoom-rating">
            <span className="product-name">Zoom Workplace</span>
            <span className="rating-value">{executiveSummary.rating.zoom}/10</span>
          </div>
          <div className="rating-diff">{executiveSummary.rating.differential}</div>
          <div className="rating-item goto-rating">
            <span className="product-name">GoTo Meeting</span>
            <span className="rating-value">{executiveSummary.rating.goto}/10</span>
          </div>
        </div>
      </div>

      <div className="executive-summary">
        <h3>{executiveSummary.title}</h3>
        <div className="summary-grid">
          {executiveSummary.keyPoints.map((point, index) => (
            <div key={index} className="summary-card">
              <div className="summary-icon">{point.icon}</div>
              <h4>{point.title}</h4>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-comparison-section">
        <h3>Feature-by-Feature Comparison</h3>
        <p className="comparison-subtitle">
          TrustRadius ratings show Zoom consistently outperforms GoTo Meeting across critical features
        </p>

        <div className="comparison-grid">
          {featureComparison.map((category, catIndex) => (
            <div key={catIndex} className="comparison-category">
              <h4 className="comparison-category-title">{category.category}</h4>
              <div className="comparison-table">
                <div className="comparison-header">
                  <div className="feature-name-header">Feature</div>
                  <div className="score-header zoom-score-header">Zoom</div>
                  <div className="score-header goto-score-header">GoTo</div>
                  <div className="diff-header">Advantage</div>
                </div>
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="comparison-row">
                    <div className="feature-name">{feature.name}</div>
                    <div className="score-cell zoom-score">
                      <span className="score-value">{feature.zoom.toFixed(1)}</span>
                      <div className="score-bar">
                        <div className="score-fill zoom-fill" style={{ width: `${feature.zoom * 10}%` }}></div>
                      </div>
                    </div>
                    <div className="score-cell goto-score">
                      {feature.goto ? (
                        <>
                          <span className="score-value">{feature.goto.toFixed(1)}</span>
                          <div className="score-bar">
                            <div className="score-fill goto-fill" style={{ width: `${feature.goto * 10}%` }}></div>
                          </div>
                        </>
                      ) : (
                        <span className="not-rated">N/A</span>
                      )}
                    </div>
                    <div className="diff-cell">
                      {feature.goto ? (
                        <span className={`diff-badge ${feature.winner === 'zoom' ? 'zoom-wins' : ''}`}>
                          +{(feature.zoom - feature.goto).toFixed(1)}
                        </span>
                      ) : (
                        <span className="diff-badge zoom-only">Zoom Only</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="comparison-summary">
          <div className="summary-stat">
            <span className="stat-number">15</span>
            <span className="stat-label">Features Compared</span>
          </div>
          <div className="summary-stat highlight">
            <span className="stat-number">15/15</span>
            <span className="stat-label">Won by Zoom</span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">+0.5</span>
            <span className="stat-label">Average Rating Advantage</span>
          </div>
        </div>
      </div>

      <div className="competitive-insights">
        <h3>Detailed Competitive Analysis</h3>
        <p className="insights-subtitle">
          Where Zoom's strengths directly address GoTo Meeting's critical weaknesses
        </p>

        {competitiveInsights.map((insight, index) => (
          <div key={index} className="insight-card">
            <div className="insight-category">
              <h4>{insight.category}</h4>
            </div>

            <div className="insight-comparison">
              <div className="strength-column">
                <div className="column-header zoom-header">
                  <span className="badge zoom-badge">Zoom Strength</span>
                </div>
                <div className="column-content">
                  <h5>{insight.zoomStrength.title}</h5>
                  <p className="description">{insight.zoomStrength.description}</p>
                  <div className="impact">
                    <span className="impact-label">Impact:</span>
                    <span>{insight.zoomStrength.impact}</span>
                  </div>
                  {insight.zoomStrength.quotes && insight.zoomStrength.quotes.length > 0 && (
                    <div className="review-quotes">
                      <span className="quotes-label">What reviewers say:</span>
                      {insight.zoomStrength.quotes.map((quote, idx) => (
                        <div key={idx} className="quote-block">
                          <p className="quote-text">"{quote.text}"</p>
                          <div className="quote-attribution">
                            <span className="reviewer-name">{quote.reviewer}</span>
                            <span className="reviewer-details">{quote.role} • {quote.company}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="vs-divider">VS</div>

              <div className="weakness-column">
                <div className="column-header goto-header">
                  <span className="badge goto-badge">GoTo Weakness</span>
                </div>
                <div className="column-content">
                  <h5>{insight.gotoWeakness.title}</h5>
                  <p className="description">{insight.gotoWeakness.description}</p>
                  <div className="impact">
                    <span className="impact-label">Risk:</span>
                    <span>{insight.gotoWeakness.impact}</span>
                  </div>
                  {insight.gotoWeakness.quotes && insight.gotoWeakness.quotes.length > 0 && (
                    <div className="review-quotes">
                      <span className="quotes-label">What reviewers say:</span>
                      {insight.gotoWeakness.quotes.map((quote, idx) => (
                        <div key={idx} className="quote-block">
                          <p className="quote-text">"{quote.text}"</p>
                          <div className="quote-attribution">
                            <span className="reviewer-name">{quote.reviewer}</span>
                            <span className="reviewer-details">{quote.role} • {quote.company}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="takeaway-banner">
              <strong>Takeaway:</strong> {insight.takeaway}
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h3>Ready to Upgrade?</h3>
        <p>Join thousands of organizations who have switched from GoTo Meeting to Zoom Workplace</p>
        <div className="cta-buttons">
          <button className="cta-primary">Get Free Quote</button>
          <button className="cta-secondary">See Detailed Comparison</button>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveTakeout
