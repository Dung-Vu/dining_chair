import React from 'react';
import './Brand.css';

const Brand = () => {
  return (
    <section className="brand section-padding">
      <div className="container">
        <div className="brand-content">
          <div className="brand-text">
            <span className="subtitle">Về Chúng Tôi</span>
            <h2 className="heading-secondary">
              Nơi Truyền Thống<br />
              Gặp Gỡ Hiện Đại
            </h2>
            <p className="body-text">
              Bornario được thành lập với niềm đam mê tạo nên những món đồ nội thất 
              không chỉ đẹp mắt mà còn mang giá trị trường tồn. Mỗi chiếc ghế ăn của 
              chúng tôi là kết tinh của tay nghề thủ công tinh xảo, kết hợp cùng thiết 
              kế hiện đại và vật liệu cao cấp.
            </p>
            <p className="body-text">
              Chúng tôi tin rằng bữa ăn gia đình không chỉ là thời gian dùng bữa, mà là 
              khoảnh khắc kết nối, là nơi những câu chuyện được chia sẻ. Và chiếc ghế ăn 
              chính là người bạn đồng hành thầm lặng cho những khoảnh khắc quý giá ấy.
            </p>
            
            <div className="brand-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4>Gỗ Tự Nhiên Cao Cấp</h4>
                  <p>Được chọn lọc kỹ càng từ những nguồn gỗ bền vững</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div>
                  <h4>Thủ Công Tinh Xảo</h4>
                  <p>Mỗi sản phẩm được chế tác bởi nghệ nhân giàu kinh nghiệm</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h4>Bảo Hành Trọn Đời</h4>
                  <p>Cam kết chất lượng với chính sách bảo hành dài hạn</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="brand-images">
            <div className="brand-image-grid">
              <div className="brand-img brand-img-1">
                <div className="img-placeholder"></div>
              </div>
              <div className="brand-img brand-img-2">
                <div className="img-placeholder"></div>
              </div>
              <div className="quote-card">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="quote-icon">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p>
                  "Thiết kế là ngôn ngữ câm lặng nhưng mạnh mẽ nhất của sự sáng tạo"
                </p>
                <span className="quote-author">- Bornario Design Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
