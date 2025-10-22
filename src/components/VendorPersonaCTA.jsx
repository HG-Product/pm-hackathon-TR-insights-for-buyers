import { useState } from 'react'
import './VendorPersonaCTA.css'

function VendorPersonaCTA() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="vendor-persona-cta">
      <div className={`cta-banner ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="cta-header" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="header-left">
            <div className="vendor-badge">
              <span className="badge-icon">🎯</span>
              <span className="badge-text">For Vendors</span>
            </div>
            <h3>Are These Personas Aligned With Your GTM Strategy?</h3>
          </div>
          <button className="expand-toggle" aria-label={isExpanded ? 'Collapse' : 'Expand'}>
            {isExpanded ? '−' : '+'}
          </button>
        </div>

        {isExpanded && (
        <>
        <div className="cta-content-grid">
          <div className="cta-message">
            <div className="value-prop">
              <div className="powered-by">
                <span className="powered-text">Powered by</span>
                <div className="partner-logos">
                  <span className="logo trustradius-logo">TrustRadius</span>
                  <span className="plus">+</span>
                  <span className="logo hg-logo">HG Insights</span>
                  <span className="plus">+</span>
                  <span className="logo profound-logo">Profound</span>
                </div>
              </div>
              
              <p className="main-message">
                The buyer personas you see above are dynamically generated using <strong>TrustRadius review data</strong> combined with <strong>HG Insights' technology intelligence</strong> and <strong>Profound's buyer search behavior</strong>. But here's the game-changer:
              </p>

              <div className="differentiator-box">
                <div className="differentiator-icon">⚡</div>
                <div className="differentiator-content">
                  <h4>The TrustRadius Difference</h4>
                  <p>
                    Unlike other review sites, <strong>our pages evolve with YOUR GTM strategy</strong>. 
                    When you define your Ideal Customer Profile (ICP) in HG Insights, TrustRadius automatically 
                    surfaces those specific personas, use cases, and buying signals on your product pages. As your GTM strategy changes, 
                    <strong> the audience we drive and the pages we optimize update in real-time</strong> to match your new targets.
                  </p>
                </div>
              </div>

              <div className="benefits-list">
                <h4>What This Means For You:</h4>
                <div className="benefit-items">
                  <div className="benefit-item">
                    <span className="benefit-icon">🎯</span>
                    <div className="benefit-text">
                      <strong>GTM-Aligned Intent & Leads</strong>
                      <p>TrustRadius drives both buyer intent signals and qualified leads optimized against your specific GTM strategy—not generic traffic</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">🔄</span>
                    <div className="benefit-text">
                      <strong>Dynamic Strategy Alignment</strong>
                      <p>As your GTM strategy evolves, your pages and the audience we drive automatically update to match your new ICP targets</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">🚀</span>
                    <div className="benefit-text">
                      <strong>Search-Driven Content Creation</strong>
                      <p>We analyze what buyers are actually searching for, then drive custom review content that gets picked up in both SEO and GEO (ChatGPT, Perplexity)</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">📊</span>
                    <div className="benefit-text">
                      <strong>Competitive Tech Stack Targeting</strong>
                      <p>Automatically surface reviews from companies using your competitors' technology to drive competitive displacement</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">💼</span>
                    <div className="benefit-text">
                      <strong>Account-Based Precision</strong>
                      <p>Surface personas from specific firmographics, company sizes, and industries aligned with your sales plays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-action-panel">
            <div className="action-card">
              <div className="card-header">
                <h4>Set Your ICP in HG Insights</h4>
                <p>Define who you want to reach, and we'll make it happen</p>
              </div>

              <div className="card-features">
                <div className="feature-check">
                  <span className="check-icon">✓</span>
                  <span>Define target company size, industry, location</span>
                </div>
                <div className="feature-check">
                  <span className="check-icon">✓</span>
                  <span>Identify competitive technology install base</span>
                </div>
                <div className="feature-check">
                  <span className="check-icon">✓</span>
                  <span>Set buying signals and intent triggers</span>
                </div>
                <div className="feature-check">
                  <span className="check-icon">✓</span>
                  <span>Align personas with your sales plays</span>
                </div>
              </div>

              <div className="cta-buttons">
                <button className="primary-cta-button">
                  <span className="button-text">Set Up My ICP with HG Insights</span>
                  <span className="button-arrow">→</span>
                </button>
                <button className="secondary-cta-button">
                  <span>Learn How It Works</span>
                </button>
              </div>

              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-number">500+</span>
                  <span className="trust-label">Vendors Using HG + TR</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">3x</span>
                  <span className="trust-label">Higher Lead Quality</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">85%</span>
                  <span className="trust-label">Better ICP Match</span>
                </div>
              </div>
            </div>

            <div className="urgency-note">
              <span className="urgency-icon">⏰</span>
              <span className="urgency-text">
                <strong>Limited Availability:</strong> Priority onboarding for Q1 2025 closes soon
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-strip">
          <div className="testimonial">
            <p className="testimonial-quote">
              "Since aligning our ICP with HG Insights, our TrustRadius page drives 3x more qualified pipeline. 
              The personas shown actually match who we're selling to."
            </p>
            <div className="testimonial-author">
              <strong>Sarah Chen</strong>
              <span>VP of Marketing, Enterprise SaaS Company</span>
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default VendorPersonaCTA

