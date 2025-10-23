import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column footer-about">
              <div className="footer-logo">
                <h2>BORNARIO</h2>
                <span>Luxury Dining</span>
              </div>
              <p className="footer-description">
                Nơi nghệ thuật chế tác gặp gỡ thiết kế hiện đại, 
                tạo nên những sản phẩm nội thất đẳng cấp cho không gian sống của bạn.
              </p>
              <div className="footer-social">
                <a href="https://fb.com/dinhdung521" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://fb.com/dinhdung521" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--pure-white)"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--pure-white)" strokeWidth="2"></line>
                  </svg>
                </a>
                <a href="https://fb.com/dinhdung521" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="https://fb.com/dinhdung521" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Sản phẩm</h3>
              <ul>
                <li><a href="#collection">Bộ sưu tập mới</a></li>
                <li><a href="#collection">Ghế hiện đại</a></li>
                <li><a href="#collection">Ghế cổ điển</a></li>
                <li><a href="#collection">Ghế tối giản</a></li>
                <li><a href="#collection">Phụ kiện</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Công ty</h3>
              <ul>
                <li><a href="#home">Về chúng tôi</a></li>
                <li><a href="#gallery">Showroom</a></li>
                <li><a href="#reviews">Đánh giá</a></li>
                <li><a href="#contact">Tuyển dụng</a></li>
                <li><a href="#contact">Tin tức</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Hỗ trợ</h3>
              <ul>
                <li><a href="#contact">Liên hệ</a></li>
                <li><a href="#contact">Chính sách bảo hành</a></li>
                <li><a href="#contact">Vận chuyển</a></li>
                <li><a href="#contact">Đổi trả</a></li>
                <li><a href="#contact">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column footer-newsletter">
              <h3>Nhận tin mới nhất</h3>
              <p>Đăng ký để nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email của bạn" />
                <button type="submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Bornario. Tất cả quyền được bảo lưu.</p>
            <div className="footer-links">
              <a href="#contact">Chính sách bảo mật</a>
              <span>•</span>
              <a href="#contact">Điều khoản sử dụng</a>
              <span>•</span>
              <a href="#contact">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
