# TechShop - Tech E-Commerce Website Specification

## 1. Project Overview

- **Project Name**: TechShop
- **Type**: Single Page Application (React E-commerce)
- **Core Functionality**: A modern tech product e-commerce store featuring product browsing, shopping cart, category filtering, and product search
- **Target Users**: Tech enthusiasts looking to purchase gadgets, electronics, and accessories

## 2. UI/UX Specification

### Layout Structure

**Header (Fixed)**
- Logo on left
- Search bar in center
- Cart icon with item count badge on right
- Navigation links: Home, Products, About

**Hero Section**
- Full-width banner with promotional content
- Animated text and CTA button

**Product Categories**
- Horizontal scrolling category pills
- Categories: All, Laptops, Smartphones, Audio, Accessories, Wearables

**Product Grid**
- Responsive grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Product cards with hover effects

**Footer**
- 4-column layout: About, Quick Links, Support, Newsletter

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**
- Primary: `#0f0f0f` (Black)
- Secondary: `#1a1a2e` (Dark Navy)
- Accent: `#00d4ff` (Electric Cyan)
- Accent Secondary: `#ff6b35` (Orange)
- Background: `#0a0a0f` (Near Black)
- Card Background: `#151520` (Dark Gray)
- Text Primary: `#ffffff`
- Text Secondary: `#a0a0a0`
- Success: `#00ff88`
- Border: `#2a2a3a`

**Typography**
- Headings: 'Orbitron', sans-serif (Google Font)
- Body: 'Exo 2', sans-serif (Google Font)
- Font sizes:
  - H1: 48px
  - H2: 36px
  - H3: 24px
  - Body: 16px
  - Small: 14px

**Spacing System**
- Base unit: 8px
- Sections: 80px vertical padding
- Card padding: 24px
- Grid gap: 24px

**Visual Effects**
- Glassmorphism cards with backdrop blur
- Neon glow effects on accent elements
- Smooth hover transitions (0.3s ease)
- Gradient overlays on images
- Subtle particle/grid background pattern

### Components

**ProductCard**
- Product image with gradient overlay
- Product name, category tag
- Price with original price strikethrough if discounted
- Rating stars
- "Add to Cart" button with hover glow effect
- Hover: scale up slightly, border glow

**CategoryPill**
- Rounded pill buttons
- Active state: filled with accent color
- Inactive: border only with hover fill

**SearchBar**
- Rounded input with icon
- Focus: cyan border glow

**CartDrawer**
- Slide-in from right
- Dark overlay background
- List of cart items with quantity controls
- Total price calculation
- Checkout button

**Toast Notifications**
- Slide-in from top-right
- Success/error states

## 3. Functionality Specification

### Core Features

1. **Product Listing**
   - Display 12 sample tech products
   - Each product: id, name, category, price, originalPrice, rating, image, description

2. **Category Filtering**
   - Filter products by category
   - "All" shows all products

3. **Search**
   - Real-time search by product name
   - Case-insensitive matching

4. **Shopping Cart**
   - Add products to cart
   - Update quantity (+/-)
   - Remove items
   - Persistent cart count in header
   - Cart drawer shows all items
   - Calculate total price

5. **Product Details Modal**
   - Click product to see details
   - Larger image, full description
   - Add to cart from modal

### User Interactions
- Click category → filter products
- Type in search → filter products in real-time
- Click "Add to Cart" → add item, show toast, update cart count
- Click cart icon → open cart drawer
- Click product card → open product modal
- Click +/- in cart → adjust quantity
- Click remove → remove from cart

### Data Handling
- Use React useState for cart state
- Use context or prop drilling for cart management
- Sample data stored in constants file

### Edge Cases
- Empty cart: Show "Your cart is empty" message
- No search results: Show "No products found" message
- Quantity at 1, click minus: Remove item

## 4. Acceptance Criteria

1. ✅ Homepage loads with hero section, categories, and product grid
2. ✅ All 12 products are displayed correctly
3. ✅ Category filtering works and updates product grid
4. ✅ Search filters products by name
5. ✅ Adding to cart updates cart count and shows toast
6. ✅ Cart drawer opens and displays all cart items
7. ✅ Quantity can be adjusted in cart
8. ✅ Total price calculates correctly
9. ✅ Product modal opens with full details
10. ✅ Responsive design works on all breakpoints
11. ✅ Animations and hover effects are smooth
12. ✅ No console errors on page load

## 5. Sample Product Data

```javascript
const products = [
  { id: 1, name: "ProBook Laptop 15", category: "laptops", price: 1299, originalPrice: 1499, rating: 4.5, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", description: "Powerful 15-inch laptop with latest processor" },
  { id: 2, name: "UltraPhone X", category: "smartphones", price: 999, originalPrice: 1199, rating: 4.8, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", description: "Flagship smartphone with stunning display" },
  { id: 3, name: "SonicPods Pro", category: "audio", price: 249, originalPrice: 299, rating: 4.3, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", description: "Premium wireless earbuds with ANC" },
  { id: 4, name: "SmartWatch Elite", category: "wearables", price: 399, originalPrice: 449, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", description: "Advanced smartwatch with health tracking" },
  { id: 5, name: "GamePad Pro", category: "accessories", price: 79, originalPrice: 99, rating: 4.4, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", description: "Professional gaming controller" },
  { id: 6, name: "UltraSlim 14", category: "laptops", price: 1099, originalPrice: 1299, rating: 4.2, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", description: "Thin and light ultrabook" },
  { id: 7, name: "PixelPhone 7", category: "smartphones", price: 799, originalPrice: 899, rating: 4.5, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", description: "Pure Android experience" },
  { id: 8, name: "Studio Monitors", category: "audio", price: 599, originalPrice: 699, rating: 4.7, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", description: "Professional studio headphones" },
  { id: 9, name: "Fitness Band", category: "wearables", price: 99, originalPrice: 129, rating: 4.0, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", description: "Affordable fitness tracker" },
  { id: 10, name: "Wireless Charger", category: "accessories", price: 49, originalPrice: 69, rating: 4.1, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", description: "Fast wireless charging pad" },
  { id: 11, name: "Gaming Laptop Pro", category: "laptops", price: 1999, originalPrice: 2299, rating: 4.9, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", description: "High-end gaming laptop" },
  { id: 12, name: "Bluetooth Speaker", category: "audio", price: 149, originalPrice: 179, rating: 4.3, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", description: "Portable waterproof speaker" }
];
```

## 6. Project Structure

```
techshop/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Categories.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductModal.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── Toast.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
