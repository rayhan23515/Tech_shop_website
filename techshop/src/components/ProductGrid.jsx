import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <section id="products" className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </section>
  );
};

export default ProductGrid;