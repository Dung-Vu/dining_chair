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
            Ghế Ăn<br />
          </h1>
          <p className="hero-description">
            Khám phá chiếc ghế ăn Ordinaire Dining được chế tác riêng cho bàn tiệc sang trọng,
            kết hợp đường cong ôm lưng, đệm khí hậu và gỗ tự nhiên chuẩn FSC cho trải nghiệm ngồi đẳng cấp.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Đặt mua ngay</button>
            <button className="btn btn-secondary">Đặt lịch trải nghiệm</button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <img src="/assets/img/gemini2.png" alt="Dining Chair" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="chair-silhouette"></div>
            </div>
            <div className="floating-badge badge-1">
              <span className="badge-number">10+</span>
              <span className="badge-text">Năm chế tác ghế</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-number">100%</span>
              <span className="badge-text">Gỗ tự nhiên chuẩn FSC</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Gia đình đang sở hữu</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Tùy chọn hoàn thiện</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Hài lòng của khách hàng</p>
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
