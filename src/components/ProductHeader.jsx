import './ProductHeader.css'

function ProductHeader({ productName, rating }) {
  return (
    <div className="product-header">
      <div className="product-header-container">
        <a href="#" className="back-link">← Back to Overview</a>

        <div className="product-info">
          <div className="product-logo">
            <div className="logo-placeholder">Z</div>
          </div>

          <div className="product-details">
            <h1>{productName} Reviews and Ratings</h1>
            <div className="rating-display">
              <div className="rating-box">
                <span className="rating-label">Score</span>
                <span className="rating-value">{rating}</span>
                <span className="rating-max">out of 10</span>
              </div>
            </div>
          </div>

          <button className="cta-button">Get Free Quote →</button>
        </div>
      </div>
    </div>
  )
}

export default ProductHeader
