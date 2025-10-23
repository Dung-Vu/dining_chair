import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <span className="subtitle">Bộ Sưu Tập 2025</span>
          <h1 className="heading-primary">
            Tinh Hoa<br />
            Nghệ Thuật<br />
            Ẩm Thực
          </h1>
          <p className="hero-description">
            Khám phá vẻ đẹp hoàn mỹ của những chiếc ghế ăn được chế tác thủ công,
            nơi sự tinh tế gặp gỡ công năng trong không gian sống hiện đại.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Khám phá ngay</button>
            <button className="btn btn-secondary">Liên hệ tư vấn</button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <img src="/assets/img/gemini2.png" alt="Dining Chair" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="chair-silhouette"></div>
            </div>
            <div className="floating-badge badge-1">
              <span className="badge-number">15+</span>
              <span className="badge-text">Năm kinh nghiệm</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-number">100%</span>
              <span className="badge-text">Gỗ tự nhiên</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat-item">
          <h3>5000+</h3>
          <p>Khách hàng hài lòng</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Mẫu mã độc quyền</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Đánh giá 5 sao</p>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Cuộn xuống</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
