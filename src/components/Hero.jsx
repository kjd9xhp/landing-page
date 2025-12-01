import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-text fade-in-up">
          <h1 className="hero-title">TRIỆU THẦN CHIẾN</h1>
          <p className="hero-subtitle">
            Triệu Hồi Thần Tướng - Chinh Phục Thiên Hạ
          </p>
          <p className="hero-description">
            Khám phá thế giới thần thoại Á Đông đầy mê hoặc. Thu thập hàng trăm
            thần tướng huyền thoại, xây dựng đội hình chiến thuật độc đáo và
            thống trị đấu trường thẻ bài!
          </p>

          <div className="hero-cta">
            <a href="#download" className="btn btn-primary">
              <span>Chơi Ngay</span>
            </a>
            <a href="#features" className="btn btn-secondary">
              <span>Khám Phá</span>
            </a>
          </div>
        </div>

        <div className="hero-visual float">
          <div className="card-showcase">
            <div className="showcase-card card-1"></div>
            <div className="showcase-card card-2"></div>
            <div className="showcase-card card-3"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
