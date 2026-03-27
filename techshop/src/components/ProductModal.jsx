import { useCart } from '../context/CartContext';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="modal-details">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-rating">{renderStars(product.rating)}</div>
            <p className="modal-description">{product.description}</p>
            
            <div className="modal-price">
              <span className="price-current">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="price-original">${product.originalPrice}</span>
              )}
              {product.originalPrice > product.price && (
                <span className="discount-badge">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            
            <button
              className="add-to-cart-btn modal-add-btn"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;