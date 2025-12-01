import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section id="download" className="section cta">
      <div className="cta-background">
        <div className="cta-gradient"></div>
      </div>

      <div className="container">
        <div className="cta-content scroll-animate fade-up">
          <h2>Sẵn Sàng Bước Vào Cuộc Chiến?</h2>
          <p className="cta-subtitle">
            Tải ngay để nhận 10 lượt triệu hồi miễn phí!
          </p>
          <p>
            Tải game ngay hôm nay và nhận ngay 10 lượt triệu hồi miễn phí cùng
            thần tướng huyền thoại độc quyền cho tân thủ!
          </p>

          <div
            className="cta-buttons fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#" className="btn btn-primary btn-large">
              <span>Tải Game Miễn Phí</span>
            </a>
            <a href="#" className="btn btn-secondary btn-large">
              <span>Đăng Ký Nhận Thưởng</span>
            </a>
          </div>

          <div
            className="platform-icons fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="platform">
              <span className="platform-icon">🍎</span>
              <span>iOS</span>
            </div>
            <div className="platform">
              <span className="platform-icon">🤖</span>
              <span>Android</span>
            </div>
            <div className="platform">
              <span className="platform-icon">💻</span>
              <span>PC</span>
            </div>
          </div>

          <div
            className="social-links fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <p>Theo dõi chúng tôi:</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                📘 Facebook
              </a>
              <a href="#" className="social-icon">
                📷 Instagram
              </a>
              <a href="#" className="social-icon">
                🎮 Discord
              </a>
              <a href="#" className="social-icon">
                ▶️ YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
