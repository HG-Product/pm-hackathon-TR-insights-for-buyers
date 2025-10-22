import { useState } from 'react'
import './ReviewQuotesCarousel.css'

// Helper function to generate persona page URLs
function getPersonaPageUrl(persona) {
  const personaUrlMap = {
    'IT Directors': '/persona-it-directors.html',
    'CTO/VP of ITs': '/persona-cto.html',
    'Business Owners': '/persona-business-owners.html',
    'Department Managers': '/persona-managers.html',
    'Sales & Customer Success': '/persona-sales.html',
    'Executives & Leadership': '/persona-executives.html',
    'Project & Operations Managers': '/persona-operations.html',
    'Remote Employees': '/persona-remote.html'
  }
  return personaUrlMap[persona] || '#'
}

function ReviewQuotesCarousel({ quotes, persona }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (!quotes || quotes.length === 0) return null

  return (
    <div className="review-carousel">
      <div className="carousel-header">
        <span className="carousel-label">What {persona} say:</span>
        <div className="carousel-controls">
          <button 
            className="carousel-btn prev" 
            onClick={prevSlide}
            aria-label="Previous review"
          >
            ←
          </button>
          <span className="carousel-counter">
            {currentIndex + 1} / {quotes.length}
          </span>
          <button 
            className="carousel-btn next" 
            onClick={nextSlide}
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>

      <div className="carousel-content">
        <blockquote className="review-quote-slide" itemScope itemType="https://schema.org/Review">
          <p className="quote-text" itemProp="reviewBody">"{quotes[currentIndex].quote}"</p>
          <footer className="quote-footer">
            <cite className="quote-author" itemProp="author">
              — {quotes[currentIndex].author}
            </cite>
            {quotes[currentIndex].rating && (
              <span className="quote-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <span itemProp="ratingValue">★ {quotes[currentIndex].rating}</span>/10
              </span>
            )}
          </footer>
        </blockquote>

        <div className="carousel-dots">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <a href={getPersonaPageUrl(persona)} className="view-all-reviews-btn">
        View all relevant reviews →
      </a>
    </div>
  )
}

export default ReviewQuotesCarousel

