import { categories } from '../data/products';

const Categories = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="categories">
      <div className="categories-scroll">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;