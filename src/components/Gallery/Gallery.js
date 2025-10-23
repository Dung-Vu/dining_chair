import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    { id: 'gemini', span: 'large', title: 'Modern Living' },
    { id: 'gemini', span: 'small', title: 'Detail Shot' },
    { id: 'gemini', span: 'medium', title: 'Classic Design' },
    { id: 'gemini1', span: 'medium', title: 'Craftsmanship' },
    { id: 'gemini1', span: 'small', title: 'Texture' },
    { id: 'gemini1', span: 'large', title: 'Dining Space' }
  ];

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="subtitle">Thư Viện Ảnh</span>
          <h2 className="heading-secondary">
            Khoảnh Khắc<br />
            Đẳng Cấp
          </h2>
          <p className="body-text gallery-description">
            Từng góc nhìn, từng chi tiết đều kể một câu chuyện về sự hoàn mỹ 
            trong thiết kế và chất lượng vượt trội.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className={`gallery-item ${item.span}`}>
              <div className="gallery-image">
                <div className="image-placeholder">
                    <img src={`/assets/img/${item.id}.png`} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-instagram">
          <div className="instagram-header">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--ivory-white)"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--ivory-white)" strokeWidth="2"></line>
            </svg>
            <div>
              <h3>Theo dõi chúng tôi</h3>
              <p>@bornario_official</p>
            </div>
          </div>
          <button className="btn btn-secondary">Theo dõi trên Instagram</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
