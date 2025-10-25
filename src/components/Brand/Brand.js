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
              Bornario ra đời để kiến tạo chiếc ghế ăn trung tâm của mọi bàn tiệc. 
              Từng đường cong được tính toán bởi nghệ nhân, kết hợp công nghệ ép đệm 
              hiện đại để giữ tư thế chuẩn và êm ái trong suốt bữa ăn dài.
            </p>
            <p className="body-text">
              Dịch vụ đo dáng, phối màu vải và hoàn thiện gỗ theo yêu cầu giúp chiếc ghế 
              hòa hợp trọn vẹn với không gian sống của bạn, từ phòng ăn gia đình đến 
              showroom cao cấp.
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
                  <p>Lựa chọn óc chó, sồi, tần bì đạt chứng nhận nguồn gốc bền vững</p>
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
                  <p>Mộng gỗ khóa, bo cạnh hoàn thiện thủ công cho độ bền vượt trội</p>
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
                  <p>Bảo hành khung trọn đời, bảo dưỡng tại nhà định kỳ miễn phí</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="brand-images">
            <div className="brand-image-grid">
              <div className="brand-img brand-img-1">
  <img src="/assets/img/gemini.png" alt="Brand 1" className="img-placeholder" />
</div>
              <div className="brand-img brand-img-2">
  <img src="/assets/img/gemini1.png" alt="Brand 2" className="img-placeholder" />
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
