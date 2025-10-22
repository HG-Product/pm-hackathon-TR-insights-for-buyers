import { useState } from 'react'
import Header from './Header'
import ProductHeader from './ProductHeader'
import VendorPersonaCTA from './VendorPersonaCTA'
import BuyerPersonas from './BuyerPersonas'
import ComplementaryProducts from './ComplementaryProducts'
import MarketIntelligence from './MarketIntelligence'
import WhatBuyersDiscussing from './WhatBuyersDiscussing'
import CompetitiveDisplacementPreview from './CompetitiveDisplacementPreview'
import ReviewCard from './ReviewCard'
import './ReviewsPage.css'

// Mock data
const mockReviews = [
  {
    id: 1,
    title: "User-Friendly Meeting Platform",
    rating: 9,
    date: "October 13, 2025",
    useCase: "I meet with clients daily as a Customer Success Manager, so I need to use many different meeting platforms so I can meet my customers where they are. I host the majority of my meetings on Zoom Workplace, which is essential for me to stay in communication with my customers and collaborate on projects and training.",
    pros: [
      "Easy to add agenda's in the body of the invite",
      "Allows me to control who can join my meeting",
      "Easy screen sharing feature"
    ],
    cons: [
      "I would like more fun but work related emoji's",
      "Improved UX on changing video background",
      "AI agent to ask questions on how to do things in the app."
    ],
    recommendation: "I only use Zoom Workplace for scheduling calls. In my current role, I do not typically use breakout rooms or the timer feature, but I have used them on occasion and find them very helpful.",
    reviewer: {
      name: "Verified User",
      role: "Account Manager in Sales (201-500 employees)",
      avatar: null
    },
    experience: "6 years of"
  },
  {
    id: 2,
    title: "Great Product",
    rating: 10,
    date: "October 9, 2025",
    useCase: "We moved to a whole zoom solution, from our telephones to video conferencing. It has been a learning curve but very happy we did it.",
    pros: [
      "Links to my calendar for meetings",
      "Makes the need to have a physical phone a thing of the past"
    ],
    cons: [
      "Support could be improved."
    ],
    recommendation: "It just works for all areas of our firm. No major issues.",
    reviewer: {
      name: "Keith Phillips",
      role: "Director, Information Technology at Bush Ross P.A. (51-200 employees)",
      avatar: "K"
    },
    experience: "3 years of"
  },
  {
    id: 3,
    title: "Pretty good",
    rating: 8,
    date: "September 4, 2025",
    useCase: "We are a fully remote company and because of which, we need to utilize a platform to connect/meet with the org. We also need a platform to meet with customers and vendors. Zoom Workplace has helped fill this need.",
    pros: [
      "Meetings over all work well",
      "Connectivity in the meetings",
      "Video filters/backgrounds work well"
    ],
    cons: [
      "Settings are pretty hard to navigate",
      "Settings seem to change frequently without exact documentation updates",
      "The ability to turn off after meeting messages"
    ],
    recommendation: "It works well to meet with company personal, vendors and customers. It's less appropriate to use for note taking in these calls.",
    reviewer: {
      name: "Victor Santo",
      role: "Security Engineer at People Data Labs (51-200 employees)",
      avatar: "V"
    },
    experience: "3 years of"
  }
]

const communityPros = [
  "Comprehensive Capabilities: Users have praised the platform for its wide range of capabilities, including advanced meeting scheduling options that allow for seamless coordination, remote PC access that enhances accessibility, and the efficient management of multiple meetings simultaneously.",
  "Secure Video Conferencing: Reviewers value the platform's versatility in hosting secure video conference calls across various devices and locations, with particular appreciation for features such as encryption of all data transfers to ensure confidentiality, interactive screen sharing with annotations for enhanced collaboration, and customizable virtual backgrounds to personalize meetings.",
  "Excellent Performance: The consistent performance across different devices, user-friendly interface design contributing to ease of use, superior audio quality ensuring clear communication, and excellent video quality providing a high-definition visual experience are consistently commended by users."
]

const communityCons = [
  "Pricing Concerns: Some users have expressed concerns about the platform's pricing structure, noting it can be expensive for smaller teams or organizations with limited budgets.",
  "Learning Curve: A few reviewers mentioned that while the platform is generally user-friendly, there can be a learning curve for new users, particularly when accessing advanced features.",
  "Occasional Technical Issues: Some users have reported occasional connectivity issues or bugs, though these appear to be relatively infrequent and are typically resolved quickly."
]

function ReviewsPage() {
  const [sortBy, setSortBy] = useState('newest')

  return (
    <article className="reviews-page" itemScope itemType="https://schema.org/Product">
      <Header />
      
      <main className="main-content" role="main">
        <div className="content-container">
          <div className="left-column">
            <ProductHeader
              productName="Zoom Workplace"
              rating={8.4}
            />

            {/* Vendor CTA - Aligned with left content */}
            <VendorPersonaCTA />

            <div className="primary-content">
            {/* Removed CommunityInsights per request */}

            <div id="buyer-personas">
              <BuyerPersonas />
            </div>

            <div id="complementary-products">
              <ComplementaryProducts />
            </div>

            <div id="market-intelligence">
              <MarketIntelligence />
            </div>

            <div id="buyers-discussing">
              <WhatBuyersDiscussing />
            </div>

            <div id="competitive-displacement">
              <CompetitiveDisplacementPreview />
            </div>

            {/* Reviews section hidden per request */}
            <section className="reviews-section" style={{ display: 'none' }}>
              <div className="reviews-header">
                <h2>Reviews</h2>
                <div className="reviews-controls">
                  <span className="review-count">1003 Reviews</span>
                  <select
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="highest">Highest Rated</option>
                    <option value="lowest">Lowest Rated</option>
                  </select>
                </div>
              </div>

              <div className="reviews-list">
                {mockReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <div className="pagination">
                <button className="page-btn" disabled>← Previous</button>
                <span className="page-info">Page 1 of 101</span>
                <button className="page-btn">Next →</button>
              </div>
            </section>
            </div>
          </div>

          <aside className="sidebar">
            <nav className="sidebar-navigation">
              <h4 className="nav-title">Navigate</h4>
              <ul className="nav-links">
                <li><a href="#buyer-personas">Buyer Personas</a></li>
                <li><a href="#complementary-products">Complementary Products</a></li>
                <li><a href="#market-intelligence">Market Intelligence</a></li>
                <li><a href="#buyers-discussing">What Buyers Are Discussing</a></li>
                <li><a href="#competitive-displacement">Competitive Intelligence</a></li>
              </ul>
            </nav>

            <div className="sidebar-card">
              <div className="sidebar-product-info">
                <div className="sidebar-logo">Z</div>
                <h3>Zoom Workplace</h3>
                <p className="category">Unified Communications as a Service (UCaaS)</p>
                <div className="sidebar-rating">
                  <span className="rating">8.4</span>
                  <span>out of 10</span>
                </div>
              </div>
              <p className="product-description">
                Zoom Workplace, Zoom's open collaboration platform with an AI Companion,
                empowers teams to...
              </p>
              <div className="sidebar-links">
                <a href="#">Product overview →</a>
                <a href="#">Get pricing →</a>
                <a href="#">Alternative products →</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </article>
  )
}

export default ReviewsPage
