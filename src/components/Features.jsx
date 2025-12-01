import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "⚔️",
      title: "Chiến Thuật Đỉnh Cao",
      description:
        "Kết hợp hàng trăm thần tướng với kỹ năng độc đáo để tạo nên đội hình bất bại",
    },
    {
      icon: "🎴",
      title: "Thu Thập Thẻ Bài",
      description:
        "Khám phá và sưu tầm hơn 300 lá bài thần tướng từ thần thoại Á Đông",
    },
    {
      icon: "🏆",
      title: "Đấu Trường PvP",
      description:
        "Thách đấu người chơi toàn cầu, leo rank và chứng tỏ bản lĩnh chiến thuật",
    },
    {
      icon: "✨",
      title: "Đồ Họa Tuyệt Đẹp",
      description:
        "Nghệ thuật thẻ bài được vẽ tay tinh xảo, hiệu ứng kỹ năng mãn nhãn",
    },
    {
      icon: "🎯",
      title: "Nhiệm Vụ Phong Phú",
      description:
        "Chinh phục các thử thách PvE, mở khóa câu chuyện huyền thoại",
    },
    {
      icon: "👥",
      title: "Bang Hội Sôi Động",
      description:
        "Tham gia bang hội, hợp tác cùng đồng đội chinh phục boss khổng lồ",
    },
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-title">
          <h2>Tính Năng Nổi Bật</h2>
          <p>
            Trải nghiệm game thẻ bài chiến thuật đỉnh cao với đồ họa tuyệt đẹp
          </p>
        </div>

        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
