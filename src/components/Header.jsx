import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-text">TrustRadius</span>
        </div>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>

        <nav className="header-nav">
          <button className="nav-button">Categories</button>
          <button className="nav-button">Vendor solutions</button>
          <a href="#" className="nav-link">Write a review</a>
          <a href="#" className="nav-link">Research Boards</a>
          <div className="auth-links">
            <a href="#" className="auth-link">Log in</a>
            <a href="#" className="auth-link signup">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
