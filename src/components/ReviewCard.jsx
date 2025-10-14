import './ReviewCard.css'

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-header">
        <div className="review-title-row">
          <h2>{review.title}</h2>
          <div className="review-rating">
            <span className="rating-number">{review.rating}</span>
            <span className="rating-max">out of 10</span>
          </div>
        </div>
        <div className="review-date">{review.date}</div>
      </div>

      <div className="review-body">
        <div className="review-section">
          <h3>Use Cases and Deployment Scope</h3>
          <p>{review.useCase}</p>
        </div>

        <div className="review-section">
          <h3>Pros</h3>
          <ul className="pros-list">
            {review.pros.map((pro, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {review.cons.length > 0 && (
          <div className="review-section">
            <h3>Cons</h3>
            <ul className="cons-list">
              {review.cons.map((con, index) => (
                <li key={index}>
                  <span className="minus-icon">−</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="review-section">
          <h3>Likelihood to Recommend</h3>
          <p>{review.recommendation}</p>
        </div>
      </div>

      <div className="review-footer">
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            {review.reviewer.avatar || review.reviewer.name.charAt(0)}
          </div>
          <div className="reviewer-details">
            <div className="reviewer-name">{review.reviewer.name}</div>
            <div className="reviewer-role">{review.reviewer.role}</div>
          </div>
          <div className="badges">
            <span className="badge">Vetted Review</span>
            <span className="badge experience">{review.experience} experience</span>
          </div>
        </div>
        <a href="#" className="read-more">Read full review →</a>
      </div>
    </article>
  )
}

export default ReviewCard
