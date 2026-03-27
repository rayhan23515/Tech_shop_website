import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <CartProvider>
      <div className="app">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main>
          <Hero />
          <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
        </main>
        <Footer />
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        <CartDrawer />
        <Checkout />
        <Toast />
      </div>
    </CartProvider>
  );
}

export default App;