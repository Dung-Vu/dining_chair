import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Nguyễn Minh Anh',
      role: 'Kiến trúc sư',
      rating: 5,
      comment: 'Chất lượng vượt ngoài mong đợi! Những chiếc ghế không chỉ đẹp mà còn vô cùng thoải mái. Tôi đã sử dụng cho nhiều dự án và khách hàng luôn hài lòng.',
      image: 1
    },
    {
      id: 2,
      name: 'Trần Đức Huy',
      role: 'Chủ nhà hàng',
      rating: 5,
      comment: 'Bornario đã giúp không gian nhà hàng của tôi thăng hạng đáng kể. Thiết kế sang trọng, bền bỉ theo thời gian. Rất đáng để đầu tư!',
      image: 2
    },
    {
      id: 3,
      name: 'Lê Thu Hương',
      role: 'Nhà thiết kế nội thất',
      rating: 5,
      comment: 'Tôi luôn tin tưởng lựa chọn Bornario cho các dự án của mình. Sự chú ý đến từng chi tiết và cam kết về chất lượng thật sự ấn tượng.',
      image: 3
    }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews section-padding" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="subtitle">Đánh Giá Khách Hàng</span>
          <h2 className="heading-secondary">
            Trải Nghiệm<br />
            Thực Tế
          </h2>
        </div>

        <div className="reviews-content">
          <div className="review-slider">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`review-item ${index === activeReview ? 'active' : ''}`}
              >
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                
                <p className="review-comment">"{review.comment}"</p>
                
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    <div className="avatar-placeholder"></div>
                  </div>
                  <div className="reviewer-details">
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="review-controls">
            <button className="control-btn" onClick={prevReview}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="review-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeReview ? 'active' : ''}`}
                  onClick={() => setActiveReview(index)}
                ></button>
              ))}
            </div>
            
            <button className="control-btn" onClick={nextReview}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="reviews-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>4.9/5.0</h3>
            <p>Đánh giá trung bình</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>5,000+</h3>
            <p>Khách hàng tin tưởng</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>98%</h3>
            <p>Tỷ lệ hài lòng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
