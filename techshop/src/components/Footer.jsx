const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#footerLogoGrad)" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f5d4" />
                    <stop offset="1" stopColor="#7b2cbf" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="logo-text">Tech<span>Shop</span></span>
          </div>
          <p className="footer-desc">
            Your destination for cutting-edge tech, premium electronics, and futuristic gadgets.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Status</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay Updated</h4>
          <p>Subscribe for exclusive deals & new arrivals</p>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" />
            <button>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 TechShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;