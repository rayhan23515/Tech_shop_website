import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <span className="view-details">View Details</span>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">{renderStars(product.rating)}</div>
        <div className="product-price">
          <span className="price-current">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="price-original">${product.originalPrice}</span>
          )}
        </div>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;