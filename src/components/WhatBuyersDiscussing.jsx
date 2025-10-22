import './WhatBuyersDiscussing.css'

// Helper function to generate question page URLs
function getQuestionPageUrl(questionId) {
  const questionUrlMap = {
    1: '/question-zoom-cost-value.html',
    2: '/question-zoom-reliability.html',
    3: '/question-zoom-integrations.html',
    4: '/question-zoom-ease-of-use.html',
    5: '/question-zoom-security.html',
    6: '/question-zoom-ai-features.html',
    7: '/question-zoom-scalability.html',
    8: '/question-zoom-mobile.html'
  }
  return questionUrlMap[questionId] || '#'
}

// Mock data: Common buyer questions/prompts about Zoom and relevant insights
const buyerQuestions = [
  {
    id: 1,
    question: "Is Zoom worth the cost compared to alternatives?",
    searchVolume: "High",
    sentiment: "Positive",
    sentimentScore: 85,
    hgData: {
      marketShare: "32% market share",
      installs: "2.1M+ active installations",
      growth: "+18% YoY growth"
    },
    keyInsights: [
      "Users consistently rate Zoom's value highly despite premium pricing",
      "ROI justified by reliability, features, and reduced meeting friction",
      "Most reviewers say it's worth paying more for consistent quality"
    ],
    reviewHighlights: [
      {
        quote: "It just works for all areas of our firm. No major issues.",
        sentiment: "positive",
        topic: "Reliability & Value"
      },
      {
        quote: "We moved to a whole zoom solution, from our telephones to video conferencing. Very happy we did it.",
        sentiment: "positive",
        topic: "Complete Solution"
      }
    ],
    discussionTopics: ["Pricing", "ROI", "Value for Money", "Cost Comparison"]
  },
  {
    id: 2,
    question: "How reliable is Zoom for daily business operations?",
    searchVolume: "Very High",
    sentiment: "Very Positive",
    sentimentScore: 92,
    hgData: {
      marketShare: "420K enterprise installations",
      installs: "1000+ employee companies",
      growth: "Top choice for remote-first teams"
    },
    keyInsights: [
      "Praised for consistent performance across devices and network conditions",
      "Handles poor connectivity gracefully compared to competitors",
      "Enterprise users report 'no major issues' in daily operations"
    ],
    reviewHighlights: [
      {
        quote: "Meetings over all work well. Connectivity in the meetings is excellent.",
        sentiment: "positive",
        topic: "Connection Stability"
      },
      {
        quote: "Zoom is best if you constantly experience network issues and need a platform that can adapt quickly.",
        sentiment: "positive",
        topic: "Network Adaptability"
      }
    ],
    discussionTopics: ["Reliability", "Uptime", "Connection Quality", "Stability"]
  },
  {
    id: 3,
    question: "Can Zoom integrate with our existing tools and workflows?",
    searchVolume: "High",
    sentiment: "Positive",
    sentimentScore: 88,
    hgData: {
      marketShare: "72% use with Microsoft 365",
      installs: "58% use with Google Workspace",
      growth: "45% integrate with Salesforce"
    },
    keyInsights: [
      "Native integrations with Google Calendar, Microsoft Teams, and Slack",
      "Users appreciate seamless calendar syncing and meeting scheduling",
      "Comprehensive API for custom integrations"
    ],
    reviewHighlights: [
      {
        quote: "Links to my calendar for meetings seamlessly.",
        sentiment: "positive",
        topic: "Calendar Integration"
      },
      {
        quote: "Integration with tools like Google Calendar, Microsoft Teams, and Slack works perfectly.",
        sentiment: "positive",
        topic: "Third-party Tools"
      }
    ],
    discussionTopics: ["Integrations", "API", "Calendar Sync", "Workflow Automation"]
  },
  {
    id: 4,
    question: "Is Zoom easy to use for non-technical employees?",
    searchVolume: "Very High",
    sentiment: "Very Positive",
    sentimentScore: 94,
    keyInsights: [
      "Consistently praised as 'user-friendly' and 'intuitive' across skill levels",
      "Minimal training required for new users",
      "Clean interface makes features easy to find and use"
    ],
    reviewHighlights: [
      {
        quote: "Zoom Workplace is very user friendly and offers a lot of customization in settings.",
        sentiment: "positive",
        topic: "Ease of Use"
      },
      {
        quote: "Easy to use. Everything is organized well in settings so that it's easy to find.",
        sentiment: "positive",
        topic: "User Interface"
      }
    ],
    discussionTopics: ["Ease of Use", "User Experience", "Learning Curve", "Adoption"]
  },
  {
    id: 5,
    question: "What are the main security features in Zoom?",
    searchVolume: "Medium",
    sentiment: "Positive",
    sentimentScore: 86,
    keyInsights: [
      "End-to-end encryption for all data transfers",
      "Waiting rooms and participant controls praised by security-conscious users",
      "Continuous security improvements address enterprise concerns"
    ],
    reviewHighlights: [
      {
        quote: "Allows me to control who can join my meeting with waiting rooms and permissions.",
        sentiment: "positive",
        topic: "Access Control"
      },
      {
        quote: "Encryption of all data transfers ensures confidentiality for sensitive meetings.",
        sentiment: "positive",
        topic: "Data Security"
      }
    ],
    discussionTopics: ["Security", "Encryption", "Privacy", "Compliance", "Access Control"]
  },
  {
    id: 6,
    question: "How does Zoom's AI features improve meeting productivity?",
    searchVolume: "Growing",
    sentiment: "Positive",
    sentimentScore: 82,
    keyInsights: [
      "AI Companion provides meeting summaries and action items automatically",
      "300+ new features released annually including AI capabilities",
      "Reduces manual note-taking and follow-up work"
    ],
    reviewHighlights: [
      {
        quote: "Zoom's engineering team released 300+ new features last year, demonstrating commitment to innovation.",
        sentiment: "positive",
        topic: "Innovation & AI"
      },
      {
        quote: "AI agent to ask questions on how to do things in the app would be helpful.",
        sentiment: "neutral",
        topic: "AI Feature Requests"
      }
    ],
    discussionTopics: ["AI Features", "Meeting Summaries", "Productivity", "Innovation"]
  },
  {
    id: 7,
    question: "Can Zoom scale for large meetings and webinars?",
    searchVolume: "Medium",
    sentiment: "Very Positive",
    sentimentScore: 91,
    keyInsights: [
      "Supports up to 1,000 participants in meetings",
      "Breakout rooms and webinar features for large events",
      "Scales from 1:1s to company all-hands without platform changes"
    ],
    reviewHighlights: [
      {
        quote: "We are a fully remote company. Zoom helps us connect internally, with customers, and vendors at any scale.",
        sentiment: "positive",
        topic: "Scalability"
      },
      {
        quote: "Zoom Meetings can have up to 1,000 video participants join at once.",
        sentiment: "positive",
        topic: "Large Events"
      }
    ],
    discussionTopics: ["Scalability", "Webinars", "Large Meetings", "Participant Limits"]
  },
  {
    id: 8,
    question: "What do users say about Zoom's mobile experience?",
    searchVolume: "Medium",
    sentiment: "Positive",
    sentimentScore: 89,
    keyInsights: [
      "Mobile apps for iOS and Android rated highly (9.0 and 8.7 respectively)",
      "Full feature parity with desktop experience",
      "Reliable for remote workers and field teams"
    ],
    reviewHighlights: [
      {
        quote: "Zoom is able to keep meetings accessible & mobile when conducting business.",
        sentiment: "positive",
        topic: "Mobile Access"
      },
      {
        quote: "Mobile support is excellent with consistent quality across devices.",
        sentiment: "positive",
        topic: "Cross-platform"
      }
    ],
    discussionTopics: ["Mobile App", "iOS", "Android", "Remote Work"]
  }
]

const trendingTopics = [
  { topic: "AI & Automation", trend: "up", mentions: 1247 },
  { topic: "Security & Privacy", trend: "stable", mentions: 2156 },
  { topic: "Integration Ecosystem", trend: "up", mentions: 891 },
  { topic: "Pricing & Value", trend: "stable", mentions: 1632 },
  { topic: "Mobile Experience", trend: "up", mentions: 743 },
  { topic: "Ease of Use", trend: "stable", mentions: 3421 }
]

function WhatBuyersDiscussing() {
  const getSentimentColor = (sentiment) => {
    switch (sentiment.toLowerCase()) {
      case 'very positive':
        return '#10b981'
      case 'positive':
        return '#3b82f6'
      case 'neutral':
        return '#f59e0b'
      case 'negative':
        return '#ef4444'
      default:
        return '#6b7280'
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return '📈'
      case 'down':
        return '📉'
      default:
        return '➡️'
    }
  }

  return (
    <section className="what-buyers-discussing-section">
      <div className="discussing-header">
        <div className="header-content">
          <h2>What Buyers Are Discussing About Zoom</h2>
          <p className="header-subtitle">
            Questions sourced from <strong>Profound's</strong> analysis of buyer search behavior matched with verified <strong>TrustRadius</strong> review insights and <strong>HG Insights</strong> market data
          </p>
          <div className="powered-by-hg">
            <span className="powered-text">Data Sources:</span>
            <div className="profound-logo-badge">
              <span className="profound-logo-text">Profound</span>
            </div>
            <span className="plus-tr">+</span>
            <span className="tr-text">TrustRadius</span>
            <span className="plus-tr">+</span>
            <div className="hg-logo-badge">
              <span className="hg-logo-text">HG Insights</span>
            </div>
          </div>
        </div>
        <div className="header-badges">
          <div className="profound-powered-badge">
            <span className="profound-icon">🔍</span>
            <span className="profound-powered-text">Powered by Profound</span>
          </div>
          <div className="ai-badge">
            <span className="badge-icon">🤖</span>
            <span className="badge-text">AI-Powered Insights</span>
          </div>
        </div>
      </div>

      <div className="value-prop-banner">
        <div className="value-prop-icon">💡</div>
        <div className="value-prop-content">
          <h3>From Search to Content to Leads</h3>
          <p>
            We analyze what buyers are <strong>actually searching for</strong> (via Profound's search intelligence), 
            then work with vendors to drive <strong>custom review content</strong> that answers those questions. 
            These optimized buyer pages get picked up in both <strong>traditional SEO and GEO</strong> (ChatGPT, Perplexity, Gemini), 
            driving qualified audience and influencing purchase decisions at the moment of research.
          </p>
        </div>
      </div>

      <div className="trending-topics-bar">
        <div className="trending-label">📊 Trending Discussion Topics:</div>
        <div className="topics-list">
          {trendingTopics.map((item, index) => (
            <div key={index} className="topic-pill">
              <span className="topic-name">{item.topic}</span>
              <span className="topic-trend">{getTrendIcon(item.trend)}</span>
              <span className="topic-mentions">{item.mentions.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="questions-grid">
        {buyerQuestions.map((item) => (
          <div key={item.id} className="question-card">
            <div className="question-header">
              <div className="question-text">
                <span className="question-icon">💬</span>
                <h3>{item.question}</h3>
              </div>
              <div className="question-meta">
                <span className={`search-volume ${item.searchVolume.toLowerCase().replace(' ', '-')}`}>
                  {item.searchVolume} Volume
                </span>
              </div>
            </div>

            <div className="sentiment-bar">
              <div className="sentiment-label">
                <span>Review Sentiment:</span>
                <strong style={{ color: getSentimentColor(item.sentiment) }}>
                  {item.sentiment}
                </strong>
              </div>
              <div className="sentiment-score-bar">
                <div 
                  className="sentiment-fill" 
                  style={{ 
                    width: `${item.sentimentScore}%`,
                    backgroundColor: getSentimentColor(item.sentiment)
                  }}
                >
                  <span className="score-label">{item.sentimentScore}% Positive</span>
                </div>
              </div>
            </div>

            {item.hgData && (
              <div className="hg-market-data">
                <div className="hg-data-header">
                  <span className="hg-icon-small">📊</span>
                  <span className="hg-label">HG Insights Market Data</span>
                </div>
                <div className="hg-data-points">
                  <div className="hg-data-point">
                    <span className="hg-data-icon">📈</span>
                    <span className="hg-data-text">{item.hgData.marketShare}</span>
                  </div>
                  <div className="hg-data-point">
                    <span className="hg-data-icon">🌐</span>
                    <span className="hg-data-text">{item.hgData.installs}</span>
                  </div>
                  <div className="hg-data-point">
                    <span className="hg-data-icon">📊</span>
                    <span className="hg-data-text">{item.hgData.growth}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="key-insights">
              <h4>Key Insights from Reviews:</h4>
              <ul className="insights-list">
                {item.keyInsights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
            </div>

            <div className="review-highlights-section">
              <h4>What Reviewers Say:</h4>
              <div className="highlights-grid">
                {item.reviewHighlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-card">
                    <div className="highlight-quote">"{highlight.quote}"</div>
                    <div className="highlight-topic">
                      <span className="topic-tag">{highlight.topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="discussion-topics">
              <span className="topics-label">Related Topics:</span>
              {item.discussionTopics.map((topic, idx) => (
                <span key={idx} className="discussion-tag">{topic}</span>
              ))}
            </div>

            <a href={getQuestionPageUrl(item.id)} className="view-all-answers-btn">
              View all relevant answers & deep research →
            </a>
          </div>
        ))}
      </div>

      <div className="insights-cta">
        <div className="cta-content">
          <h3>Want More Buyer Intelligence?</h3>
          <p>Get real-time alerts on trending buyer questions and competitive insights</p>
          <button className="cta-button">Subscribe to Buyer Insights</button>
        </div>
      </div>
    </section>
  )
}

export default WhatBuyersDiscussing

