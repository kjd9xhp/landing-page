import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>TRIỆU THẦN CHIẾN</h3>
            <p>Triệu Hồi Thần Tướng - Chinh Phục Thiên Hạ</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Game</h4>
              <ul>
                <li>
                  <a href="#features">Tính Năng</a>
                </li>
                <li>
                  <a href="#characters">Thần Tướng</a>
                </li>
                <li>
                  <a href="#gallery">Hình Ảnh</a>
                </li>
                <li>
                  <a href="#download">Tải Game</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Hỗ Trợ</h4>
              <ul>
                <li>
                  <a href="#">Hướng Dẫn</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Liên Hệ</a>
                </li>
                <li>
                  <a href="#">Báo Lỗi</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Cộng Đồng</h4>
              <ul>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Pháp Lý</h4>
              <ul>
                <li>
                  <a href="#">Điều Khoản</a>
                </li>
                <li>
                  <a href="#">Chính Sách</a>
                </li>
                <li>
                  <a href="#">Bảo Mật</a>
                </li>
                <li>
                  <a href="#">Cookie</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Triệu Thần Chiến. All rights reserved.</p>
          <p>Made with ❤️ for gamers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
