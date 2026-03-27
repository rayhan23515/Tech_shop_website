import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ searchQuery, setSearchQuery }) => {
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#logoGrad)" />
              <defs>
                <linearGradient id="logoGrad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00f5d4" />
                  <stop offset="1" stopColor="#7b2cbf" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">Tech<span>Shop</span></span>
        </div>

        <div className="search-bar">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#products" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#footer" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;