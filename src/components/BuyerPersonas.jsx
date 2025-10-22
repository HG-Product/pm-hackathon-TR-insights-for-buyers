import './BuyerPersonas.css'
import ReviewQuotesCarousel from './ReviewQuotesCarousel'

// Mock data based on typical Zoom Workplace buyers
const buyerPersonas = [
  {
    type: "Primary Buyer",
    role: "IT Director",
    percentage: 35,
    industries: ["Technology", "Professional Services", "Healthcare"],
    accountSizes: ["201-500", "501-1000", "1000+"],
    hgInstalls: 735000,
    reviewQuotes: [
      {
        quote: "It just works for all areas of our firm. No major issues.",
        author: "Keith Phillips, Director IT",
        rating: 10
      },
      {
        quote: "We moved to a whole zoom solution, from our telephones to video conferencing. Very happy we did it.",
        author: "Keith Phillips, Director IT",
        rating: 10
      },
      {
        quote: "Zoom's engineering team released 300+ new features last year, demonstrating their commitment to innovation.",
        author: "Verified User, IT Director",
        rating: 9
      },
      {
        quote: "Makes the need to have a physical phone a thing of the past. Links to my calendar for meetings seamlessly.",
        author: "Keith Phillips, Director IT",
        rating: 10
      }
    ]
  },
  {
    type: "Primary Buyer",
    role: "CTO/VP of IT",
    percentage: 28,
    industries: ["Financial Services", "Technology", "Enterprise"],
    accountSizes: ["501-1000", "1000+"],
    hgInstalls: 588000,
    reviewQuotes: [
      {
        quote: "Zoom Workplace is very user friendly and offers a lot of customization in settings.",
        author: "Verified User, Business Analyst",
        rating: 9
      },
      {
        quote: "Everything is organized well in settings so that it's easy to find. Superior audio quality ensuring clear communication.",
        author: "Verified User, CTO",
        rating: 9
      },
      {
        quote: "Encryption of all data transfers ensures confidentiality for sensitive meetings. Essential for our security requirements.",
        author: "Verified User, VP of IT",
        rating: 9
      },
      {
        quote: "The platform's versatility in hosting secure video conference calls across various devices is unmatched.",
        author: "Verified User, IT Executive",
        rating: 9
      }
    ]
  },
  {
    type: "Primary Buyer",
    role: "Business Owner",
    percentage: 22,
    industries: ["Small Business", "Professional Services", "Consulting"],
    accountSizes: ["1-50", "51-200"],
    hgInstalls: 462000,
    reviewQuotes: [
      {
        quote: "Easy to use. Everything is organized well in settings so that it's easy to find.",
        author: "Verified User, Vice-President",
        rating: 9
      },
      {
        quote: "Clear pictures and excellent video quality. Perfect for client presentations.",
        author: "Verified User, Business Owner",
        rating: 9
      },
      {
        quote: "Cost-effective solution for our small business. ROI was immediate.",
        author: "Verified User, CEO",
        rating: 8
      },
      {
        quote: "Allows me to control who can join my meeting with waiting rooms and permissions. Great for security.",
        author: "Verified User, Managing Partner",
        rating: 9
      }
    ]
  },
  {
    type: "Influencer",
    role: "Department Manager",
    percentage: 15,
    industries: ["Education", "Healthcare", "Retail"],
    accountSizes: ["51-200", "201-500"],
    hgInstalls: 315000,
    reviewQuotes: [
      {
        quote: "We are a fully remote company. Zoom helps us connect internally and with customers at any scale.",
        author: "Victor Santo, Security Engineer",
        rating: 8
      },
      {
        quote: "Meetings over all work well. Connectivity in the meetings is excellent even with poor internet.",
        author: "Verified User, Department Manager",
        rating: 8
      },
      {
        quote: "Video filters/backgrounds work well for professional meetings from home.",
        author: "Verified User, Manager",
        rating: 8
      },
      {
        quote: "Easy to add agendas in the body of the invite. Helps keep meetings organized.",
        author: "Verified User, Team Lead",
        rating: 9
      }
    ]
  }
]

const frequentUsers = [
  {
    role: "Sales & Customer Success",
    percentage: 32,
    useCases: ["Client meetings", "Demos", "Customer support"],
    accountSizes: ["All sizes"],
    reviewQuotes: [
      {
        quote: "I meet with clients daily as a Customer Success Manager. Zoom is essential for staying in communication with customers.",
        author: "Verified User, Account Manager",
        rating: 9
      },
      {
        quote: "Easy screen sharing feature makes demos seamless. Ability to direct people on screen is invaluable.",
        author: "Christine Francois, Director of Customer Success",
        rating: 9
      },
      {
        quote: "Audio and video quality is always great for client calls. Never had a major issue.",
        author: "Verified User, Customer Success Manager",
        rating: 9
      },
      {
        quote: "Allows me to control who can join my meeting. Perfect for sensitive client discussions.",
        author: "Verified User, Account Executive",
        rating: 9
      }
    ]
  },
  {
    role: "Executive Leadership",
    percentage: 25,
    useCases: ["Board meetings", "All-hands", "Strategic planning"],
    accountSizes: ["All sizes"],
    reviewQuotes: [
      {
        quote: "Zoom Is Able to Keep Meetings Accessible & Mobile When Conducting Business.",
        author: "Verified User, Sales Executive",
        rating: 10
      },
      {
        quote: "We use it for company all-hands and strategic planning sessions with excellent results.",
        author: "Verified User, VP of Operations",
        rating: 9
      },
      {
        quote: "Excellent for board meetings. Professional appearance and reliability are critical for us.",
        author: "Verified User, CEO",
        rating: 10
      },
      {
        quote: "Customizable virtual backgrounds maintain professionalism in executive meetings.",
        author: "Verified User, C-Suite Executive",
        rating: 9
      }
    ]
  },
  {
    role: "Project Managers",
    percentage: 20,
    useCases: ["Team standups", "Project reviews", "Collaboration"],
    accountSizes: ["51-200", "201-500", "501-1000"],
    reviewQuotes: [
      {
        quote: "Ability to direct people on screen during project reviews is invaluable.",
        author: "Christine Francois, Director of Customer Success",
        rating: 9
      },
      {
        quote: "Breakout rooms and timer feature are very helpful for team collaboration.",
        author: "Verified User, Project Manager",
        rating: 8
      },
      {
        quote: "Record meetings and events feature helps with project documentation and follow-up.",
        author: "Verified User, Program Manager",
        rating: 9
      },
      {
        quote: "Interactive screen sharing with annotations enhances collaboration during sprint planning.",
        author: "Verified User, Scrum Master",
        rating: 9
      }
    ]
  },
  {
    role: "Remote Employees",
    percentage: 23,
    useCases: ["Daily communication", "Team meetings", "Virtual office"],
    accountSizes: ["All sizes"],
    reviewQuotes: [
      {
        quote: "We are a fully remote company. Zoom helps us connect internally, with customers, and vendors.",
        author: "Victor Santo, Security Engineer",
        rating: 8
      },
      {
        quote: "Video filters/backgrounds work well for daily team meetings from home.",
        author: "Verified User, Remote Employee",
        rating: 8
      },
      {
        quote: "Mobile app for iOS works perfectly. Can join meetings from anywhere without issues.",
        author: "Verified User, Field Representative",
        rating: 9
      },
      {
        quote: "Connectivity in meetings is excellent even with network issues. Platform adapts quickly.",
        author: "Verified User, Remote Worker",
        rating: 9
      }
    ]
  }
]

function BuyerPersonas() {
  return (
    <section className="buyer-personas-section">
      <div className="personas-header">
        <h2>Who is Zoom Workplace best for?</h2>
        <div className="data-sources">
          <span className="sources-label">Data Sources:</span>
          <div className="source-badges">
            <div className="source-badge hg-badge">
              <span className="badge-text">HG Insights</span>
              <span className="badge-detail">Technology Intelligence</span>
            </div>
            <span className="badge-plus">+</span>
            <div className="source-badge tr-badge">
              <span className="badge-text">TrustRadius</span>
              <span className="badge-detail">Review Analysis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="personas-container">
        <div className="persona-category">
          <div className="category-header">
            <h3>Most Common Buyer Personas</h3>
            <div className="hg-badge-inline">
              <span className="hg-icon">📊</span>
              <span className="hg-text">HG Insights Data</span>
            </div>
          </div>
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

                  <div className="hg-stat">
                    <span className="hg-stat-icon">🌐</span>
                    <span className="hg-stat-value">{(persona.hgInstalls / 1000).toFixed(0)}K</span>
                    <span className="hg-stat-label">installations tracked</span>
                  </div>

                  <ReviewQuotesCarousel 
                    quotes={persona.reviewQuotes} 
                    persona={`${persona.role}s`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="persona-category">
          <div className="category-header">
            <h3>Most Frequent Users</h3>
            <div className="tr-badge-inline">
              <span className="tr-icon">💬</span>
              <span className="tr-text">TrustRadius Reviews</span>
            </div>
          </div>
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

                  {user.reviewQuotes && user.reviewQuotes.length > 0 && (
                    <ReviewQuotesCarousel 
                      quotes={user.reviewQuotes} 
                      persona={user.role}
                    />
                  )}
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
