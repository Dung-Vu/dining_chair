import React, { useState } from 'react';
import './Collection.css';

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'modern', name: 'Hiện đại' },
    { id: 'classic', name: 'Cổ điển' },
    { id: 'minimalist', name: 'Tối giản' }
  ];

  const products = [
    {
      id: 1,
      name: 'Nordic Oak Chair',
      category: 'modern',
      price: '12.500.000',
      image: '/assets/img/gemini.png',
      description: 'Ghế gỗ sồi Bắc Âu với đường nét hiện đại'
    },
    {
      id: 2,
      name: 'Classic Walnut',
      category: 'classic',
      price: '15.800.000',
      image: '/assets/img/gemini1.png',
      description: 'Ghế gỗ óc chó phong cách cổ điển sang trọng'
    },
    {
      id: 3,
      name: 'Minimal Ash',
      category: 'minimalist',
      price: '10.200.000',
      image: '/assets/img/gemini2.png',
      description: 'Thiết kế tối giản với gỗ tần bì tự nhiên'
    },
    {
      id: 4,
      name: 'Scandinavian Teak',
      category: 'modern',
      price: '18.500.000',
      image: '/assets/img/michelle.jpg',
      description: 'Ghế gỗ tếch phong cách Bắc Âu cao cấp'
    },
    {
      id: 5,
      name: 'Heritage Mahogany',
      category: 'classic',
      price: '22.000.000',
      image: '/assets/img/arden.jpg',
      description: 'Gỗ gụ quý hiếm với chạm khắc tinh xảo'
    },
    {
      id: 6,
      name: 'Pure Beech',
      category: 'minimalist',
      price: '9.800.000',
      image: '/assets/img/michelle1.jpg',
      description: 'Ghế gỗ sồi trắng đơn giản, thanh lịch'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="collection section-padding" id="collection">
      <div className="container">
        <div className="collection-header">
          <div className="header-text">
            <span className="subtitle">Bộ Sưu Tập</span>
            <h2 className="heading-secondary">
              Dining Chair<br />
              Collection
            </h2>
          </div>
          <p className="collection-intro body-text">
            Khám phá bộ sưu tập ghế ăn được tuyển chọn kỹ lưỡng, 
            mỗi chiếc đều là tác phẩm nghệ thuật độc đáo mang dấu ấn riêng.
          </p>
        </div>

        <div className="collection-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder">
                  <img src={product.image} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div className="product-overlay">
                    <button className="btn-view">Xem chi tiết</button>
                    <button className="btn-wishlist">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product-badge">Mới</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price} ₫</span>
                  <button className="btn-cart">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="collection-cta">
          <button className="btn btn-primary">Xem toàn bộ bộ sưu tập</button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
