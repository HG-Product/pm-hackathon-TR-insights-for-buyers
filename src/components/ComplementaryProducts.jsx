import './ComplementaryProducts.css'

// HG Insights data on complementary products
const complementaryProducts = [
  {
    name: "Salesforce",
    category: "CRM",
    coOccurrence: 45,
    installs: 945000,
    integration: "Native Zoom integration for Salesforce",
    useCase: "Sales teams use Zoom for demos and client calls, tracked in Salesforce",
    hgInsight: "45% of Zoom users also have Salesforce installed"
  },
  {
    name: "Microsoft 365",
    category: "Productivity Suite",
    coOccurrence: 72,
    installs: 1512000,
    integration: "Zoom integrates with Outlook, Teams, and SharePoint",
    useCase: "Organizations use Microsoft 365 for documents and Zoom for video collaboration",
    hgInsight: "72% of Zoom customers also use Microsoft 365"
  },
  {
    name: "Google Workspace",
    category: "Productivity Suite",
    coOccurrence: 58,
    installs: 1218000,
    integration: "Zoom Calendar integration with Google Calendar",
    useCase: "Teams use Google Workspace for collaboration and Zoom for meetings",
    hgInsight: "58% of Zoom installations include Google Workspace"
  },
  {
    name: "Slack",
    category: "Team Messaging",
    coOccurrence: 38,
    installs: 798000,
    integration: "Start Zoom meetings directly from Slack channels",
    useCase: "Teams use Slack for async communication, Zoom for synchronous meetings",
    hgInsight: "38% co-deployment rate with Zoom"
  },
  {
    name: "HubSpot",
    category: "Marketing & Sales",
    coOccurrence: 28,
    installs: 588000,
    integration: "Log Zoom meetings in HubSpot CRM",
    useCase: "Marketing and sales teams track prospect calls and demos",
    hgInsight: "Common in SMB and mid-market companies"
  },
  {
    name: "Okta",
    category: "Identity Management",
    coOccurrence: 22,
    installs: 462000,
    integration: "Single Sign-On (SSO) for Zoom via Okta",
    useCase: "Enterprise security and user provisioning",
    hgInsight: "22% of enterprise Zoom deployments include Okta"
  }
]

function ComplementaryProducts() {
  return (
    <section className="complementary-products-section" id="complementary-products" aria-labelledby="complementary-products-heading">
      <header className="complementary-header">
        <div className="header-content">
          <h2 id="complementary-products-heading">What Other Products Do Zoom Buyers Use?</h2>
          <p className="complementary-description">
            Based on HG Insights technology intelligence, these products are commonly deployed alongside Zoom Workplace
          </p>
        </div>
        <div className="hg-branding-badge">
          <span className="hg-icon">📊</span>
          <div className="hg-badge-content">
            <span className="hg-badge-title">HG Insights</span>
            <span className="hg-badge-subtitle">Tech Stack Data</span>
          </div>
        </div>
      </header>

      <div className="quick-facts-box">
        <h3>Key Finding:</h3>
        <p>
          <strong>87% of Zoom users</strong> deploy it as part of a broader technology stack, 
          with productivity suites (Microsoft 365, Google Workspace) and CRM systems (Salesforce, HubSpot) being the most common companions.
        </p>
      </div>

      <div className="products-grid">
        {complementaryProducts.map((product, index) => (
          <article key={index} className="product-card" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="product-header">
              <div className="product-info">
                <h3 itemProp="name" className="product-name">{product.name}</h3>
                <span className="product-category">{product.category}</span>
              </div>
              <div className="co-occurrence-badge">
                <span className="percentage">{product.coOccurrence}%</span>
                <span className="label">Co-deployment</span>
              </div>
            </div>

            <dl className="product-details">
              <div className="detail-row">
                <dt className="detail-label">HG Insight:</dt>
                <dd className="detail-value">{product.hgInsight}</dd>
              </div>

              <div className="detail-row">
                <dt className="detail-label">Common Use Case:</dt>
                <dd className="detail-value">{product.useCase}</dd>
              </div>

              <div className="detail-row">
                <dt className="detail-label">Integration:</dt>
                <dd className="detail-value integration-text">{product.integration}</dd>
              </div>
            </dl>

            <div className="hg-install-stat">
              <span className="stat-icon">🌐</span>
              <span className="stat-value">{(product.installs / 1000).toFixed(0)}K</span>
              <span className="stat-label">companies use both</span>
            </div>
          </article>
        ))}
      </div>

      <aside className="tech-stack-insight">
        <div className="insight-icon">💡</div>
        <div className="insight-content">
          <h3>Tech Stack Intelligence</h3>
          <p>
            HG Insights tracks technology adoption across <strong>2.1 million Zoom installations</strong> worldwide, 
            providing real-time visibility into which products are commonly deployed together. This data helps buyers 
            understand integration requirements and technology ecosystems before making purchasing decisions.
          </p>
        </div>
      </aside>
    </section>
  )
}

export default ComplementaryProducts

