import './BuyerPersonas.css'

// Mock data based on typical Zoom Workplace buyers
const buyerPersonas = [
  {
    type: "Primary Buyer",
    role: "IT Director",
    percentage: 35,
    industries: ["Technology", "Professional Services", "Healthcare"],
    accountSizes: ["201-500", "501-1000", "1000+"]
  },
  {
    type: "Primary Buyer",
    role: "CTO/VP of IT",
    percentage: 28,
    industries: ["Financial Services", "Technology", "Enterprise"],
    accountSizes: ["501-1000", "1000+"]
  },
  {
    type: "Primary Buyer",
    role: "Business Owner",
    percentage: 22,
    industries: ["Small Business", "Professional Services", "Consulting"],
    accountSizes: ["1-50", "51-200"]
  },
  {
    type: "Influencer",
    role: "Department Manager",
    percentage: 15,
    industries: ["Education", "Healthcare", "Retail"],
    accountSizes: ["51-200", "201-500"]
  }
]

const frequentUsers = [
  {
    role: "Sales & Customer Success",
    percentage: 32,
    useCases: ["Client meetings", "Demos", "Customer support"],
    accountSizes: ["All sizes"]
  },
  {
    role: "Executive Leadership",
    percentage: 25,
    useCases: ["Board meetings", "All-hands", "Strategic planning"],
    accountSizes: ["All sizes"]
  },
  {
    role: "Project Managers",
    percentage: 20,
    useCases: ["Team standups", "Project reviews", "Collaboration"],
    accountSizes: ["51-200", "201-500", "501-1000"]
  },
  {
    role: "Remote Employees",
    percentage: 23,
    useCases: ["Daily communication", "Team meetings", "Virtual office"],
    accountSizes: ["All sizes"]
  }
]

function BuyerPersonas() {
  return (
    <section className="buyer-personas-section">
      <h2>Who is Zoom Workplace best for?</h2>

      <div className="personas-container">
        <div className="persona-category">
          <h3>Most Common Buyer Personas</h3>
          <p className="category-description">
            Decision-makers who typically purchase Zoom Workplace for their organizations
          </p>

          <div className="persona-cards">
            {buyerPersonas.map((persona, index) => (
              <div key={index} className="persona-card">
                <div className="persona-header">
                  <div className="persona-badge">{persona.type}</div>
                  <div className="persona-percentage">{persona.percentage}%</div>
                </div>
                <h4 className="persona-role">{persona.role}</h4>

                <div className="persona-details">
                  <div className="detail-group">
                    <span className="detail-label">Top Industries:</span>
                    <div className="industry-tags">
                      {persona.industries.map((industry, idx) => (
                        <span key={idx} className="industry-tag">{industry}</span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-group">
                    <span className="detail-label">Account Sizes:</span>
                    <div className="size-tags">
                      {persona.accountSizes.map((size, idx) => (
                        <span key={idx} className="size-tag">{size} employees</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="persona-category">
          <h3>Most Frequent Users</h3>
          <p className="category-description">
            Roles that use Zoom Workplace most frequently in their daily work
          </p>

          <div className="persona-cards">
            {frequentUsers.map((user, index) => (
              <div key={index} className="persona-card user-card">
                <div className="persona-header">
                  <div className="user-badge">Frequent User</div>
                  <div className="persona-percentage">{user.percentage}%</div>
                </div>
                <h4 className="persona-role">{user.role}</h4>

                <div className="persona-details">
                  <div className="detail-group">
                    <span className="detail-label">Primary Use Cases:</span>
                    <ul className="use-case-list">
                      {user.useCases.map((useCase, idx) => (
                        <li key={idx}>{useCase}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-group">
                    <span className="detail-label">Account Sizes:</span>
                    <div className="size-tags">
                      {user.accountSizes.map((size, idx) => (
                        <span key={idx} className="size-tag">{size}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="personas-summary">
        <div className="summary-card">
          <h4>Key Insights</h4>
          <ul>
            <li><strong>Best for mid-to-large organizations:</strong> Most buyers come from companies with 200+ employees</li>
            <li><strong>IT-driven purchase:</strong> 63% of purchases are led by IT leadership roles</li>
            <li><strong>Cross-functional usage:</strong> Used across all departments, especially sales and executive teams</li>
            <li><strong>Remote-first friendly:</strong> Particularly popular with distributed and remote teams</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BuyerPersonas
