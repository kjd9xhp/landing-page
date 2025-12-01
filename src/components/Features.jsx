import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "⚔️",
      title: "Chiến Thuật Đỉnh Cao",
      description:
        "Xây dựng đội hình chiến thuật độc đáo với hàng trăm combo kỹ năng",
    },
    {
      icon: "🎴",
      title: "Thu Thập Thẻ Bài",
      description:
        "Hơn 300 thẻ bài với thiết kế tuyệt đẹp và hiệu ứng độc quyền",
    },
    {
      icon: "🏆",
      title: "Đấu Trường PvP",
      description:
        "Thách đấu người chơi thực và leo rank trong mùa giải toàn server",
    },
    {
      icon: "✨",
      title: "Đồ Họa Tuyệt Đẹp",
      description: "Hiệu ứng kỹ năng mãn nhãn với công nghệ đồ họa hiện đại",
    },
    {
      icon: "🎯",
      title: "Nhiệm Vụ Phong Phú",
      description: "Khám phá câu chuyện sâu sắc qua hàng trăm nhiệm vụ PvE",
    },
    {
      icon: "👥",
      title: "Bang Hội Sôi Động",
      description: "Tham gia bang hội, chiến đấu boss và nhận thưởng hấp dẫn",
    },
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-title scroll-animate fade-up">
          <h2>Tính Năng Nổi Bật</h2>
          <p>Trải nghiệm gameplay đỉnh cao với đồ họa tuyệt đẹp</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card glass-card scroll-animate fade-up delay-${
                (index % 6) + 1
              }`}
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
