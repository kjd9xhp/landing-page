import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Progress, Tag, Button, Tabs } from "antd";
import {
  ArrowLeftOutlined,
  FireOutlined,
  ThunderboltOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./CharacterPage.css";

const CharacterPage = ({ characters }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find((char) => char.id === parseInt(id));

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [id]);

  if (!character) {
    return (
      <div className="character-page-error">
        <h2>Nhân vật không tồn tại</h2>
        <Button onClick={() => navigate("/")}>Quay lại trang chủ</Button>
      </div>
    );
  }

  const getRarityColor = (rarity) => {
    const colors = {
      Thường: "default",
      Hiếm: "blue",
      "Tinh Anh": "purple",
      "Sử Thi": "magenta",
      "Huyền Thoại": "gold",
      "Thần Thoại": "red",
      "Siêu Thần Thoại": "volcano",
    };
    return colors[rarity] || "default";
  };

  const getElementColor = (element) => {
    const colors = {
      Hỏa: "#ef4444",
      Thủy: "#3b82f6",
      Mộc: "#10b981",
      Kim: "#f59e0b",
      Thổ: "#92400e",
      Lôi: "#8b5cf6",
      Băng: "#06b6d4",
      Phong: "#10b981",
      Quang: "#fbbf24",
      Ám: "#6b21a8",
      "Hỗn Độn": "#ec4899",
      "Vũ Trụ": "#6366f1",
    };
    return colors[element] || "#f59e0b";
  };

  const getElementIcon = (element) => {
    const icons = {
      Hỏa: <FireOutlined />,
      Lôi: <ThunderboltOutlined />,
      default: <StarOutlined />,
    };
    return icons[element] || icons.default;
  };

  const elementColor = getElementColor(character.element);

  return (
    <div className="character-page" style={{ "--element-color": elementColor }}>
      {/* Animated Background Particles */}
      <div className="page-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Back Button */}
      <Button
        className="back-button"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/")}
        size="large"
      >
        Quay lại
      </Button>

      <div className="character-page-container">
        {/* Left Side - Information & Biography */}
        <div className="page-left">
          {/* Header */}

          {/* Tabs for Biography and Abilities */}
          <Tabs
            defaultActiveKey="1"
            size="large"
            className="character-tabs"
            items={[
              {
                key: "1",
                label: (
                  <span className="tab-label">
                    <span className="tab-icon">⚡</span>
                    Năng Lực
                  </span>
                ),
                children: (
                  <div className="tab-content">
                    {/* Character Header */}
                    <div className="page-header">
                      <div className="page-header-content">
                        <h1 className="page-name">{character.name}</h1>
                        <div
                          className="page-element-badge"
                          style={{ color: elementColor }}
                        >
                          {getElementIcon(character.element)}
                          <span>{character.element}</span>
                        </div>
                      </div>
                      <p className="page-title">{character.title}</p>
                      <div className="page-badges">
                        <Tag
                          color={getRarityColor(character.rarity)}
                          className="page-tag page-tag-rarity"
                        >
                          ⭐ {character.rarity}
                        </Tag>
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div className="page-stats">
                      <h3 className="page-section-title">
                        <span className="title-icon">📊</span>
                        Chỉ Số Năng Lực
                      </h3>
                      <div className="stats-grid">
                        <div className="stat-card">
                          <div className="stat-header">
                            <span className="stat-icon">⚔️</span>
                            <span className="stat-label">Tấn Công</span>
                          </div>
                          <div className="stat-value">
                            {character.stats.attack}
                          </div>
                          <Progress
                            percent={character.stats.attack}
                            strokeColor={{
                              "0%": "#f59e0b",
                              "100%": "#ef4444",
                            }}
                            showInfo={false}
                            strokeWidth={8}
                          />
                        </div>
                        <div className="stat-card">
                          <div className="stat-header">
                            <span className="stat-icon">🛡️</span>
                            <span className="stat-label">Phòng Thủ</span>
                          </div>
                          <div className="stat-value">
                            {character.stats.defense}
                          </div>
                          <Progress
                            percent={character.stats.defense}
                            strokeColor={{
                              "0%": "#3b82f6",
                              "100%": "#8b5cf6",
                            }}
                            showInfo={false}
                            strokeWidth={8}
                          />
                        </div>
                        <div className="stat-card">
                          <div className="stat-header">
                            <span className="stat-icon">✨</span>
                            <span className="stat-label">Kỹ Năng</span>
                          </div>
                          <div className="stat-value">
                            {character.stats.skill}
                          </div>
                          <Progress
                            percent={character.stats.skill}
                            strokeColor={{
                              "0%": "#10b981",
                              "100%": "#06b6d4",
                            }}
                            showInfo={false}
                            strokeWidth={8}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skills Section */}
                    {character.skills && character.skills.length > 0 && (
                      <div className="page-skills">
                        <h3 className="page-section-title">
                          <span className="title-icon">💫</span>
                          Kỹ Năng Đặc Biệt
                        </h3>
                        <div className="page-skills-list">
                          {character.skills.map((skill, index) => (
                            <div key={index} className="page-skill-card">
                              <div className="skill-card-glow"></div>
                              <h4 className="page-skill-name">{skill.name}</h4>
                              <p className="page-skill-desc">
                                {skill.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ),
              },
              {
                key: "2",
                label: (
                  <span className="tab-label">
                    <span className="tab-icon">📜</span>
                    Tiểu Sử
                  </span>
                ),
                children: (
                  <div className="tab-content">
                    {/* Biography Section */}
                    <div className="page-description">
                      <h3 className="page-section-title">
                        <span className="title-icon">📖</span>
                        Giới Thiệu
                      </h3>
                      <p className="page-text">{character.description}</p>
                    </div>

                    {/* Extended Biography */}
                    <div className="page-description">
                      <h3 className="page-section-title">
                        <span className="title-icon">🌟</span>
                        Xuất Thân
                      </h3>
                      <p className="page-text">
                        {character.name} sinh ra trong một thời kỳ hỗn loạn, khi
                        mà thiên địa linh khí đang dần cạn kiệt. Từ nhỏ,{" "}
                        {character.name} đã thể hiện tài năng phi thường trong
                        việc tu luyện {character.element} hệ pháp thuật. Dù xuất
                        thân từ một gia tộc tu tiên nhỏ bé, nhưng với ý chí kiên
                        cường và thiên phú vượt trội,
                        {character.name} đã vượt qua vô số thử thách để đạt đến
                        cảnh giới {character.title}.
                      </p>
                    </div>

                    <div className="page-description">
                      <h3 className="page-section-title">
                        <span className="title-icon">⚔️</span>
                        Hành Trình Tu Luyện
                      </h3>
                      <p className="page-text">
                        Trên con đường tu tiên đầy gian nan, {character.name} đã
                        trải qua vô số thử thách sinh tử. Từ việc chiến đấu với
                        yêu thú trong rừng sâu, đến việc tham gia các cuộc tranh
                        đấu giữa các tông phái, mỗi trận chiến đều giúp{" "}
                        {character.name} trưởng thành và mạnh mẽ hơn. Đặc biệt,
                        trong một lần khám phá di tích cổ đại, {character.name}{" "}
                        đã lĩnh ngộ được bí truyền về {character.element} hệ
                        pháp thuật, từ đó thực lực tăng vọt, đạt đến cảnh giới
                        mà ít người có thể chạm tới.
                      </p>
                    </div>

                    <div className="page-description">
                      <h3 className="page-section-title">
                        <span className="title-icon">🏆</span>
                        Thành Tựu
                      </h3>
                      <p className="page-text">
                        Với thực lực ở cảnh giới {character.title},{" "}
                        {character.name} đã trở thành một trong những cao thủ
                        được kính nể nhất trong giới tu tiên. Tấn công đạt{" "}
                        {character.stats.attack}, phòng thủ{" "}
                        {character.stats.defense}, và kỹ năng{" "}
                        {character.stats.skill} - những con số này đã chứng minh
                        sức mạnh tuyệt đối của {character.name}. Nhiều tông phái
                        lớn đã mời {character.name} gia nhập, nhưng{" "}
                        {character.name} vẫn giữ vững lập trường độc lập, chỉ
                        tập trung vào việc tu luyện và bảo vệ những người yếu
                        thế.
                      </p>
                    </div>

                    {character.lore && (
                      <div className="page-lore">
                        <h3 className="page-section-title">
                          <span className="title-icon">✨</span>
                          Huyền Thoại
                        </h3>
                        <p className="page-text page-lore-text">
                          Trong giới tu tiên, có một truyền thuyết kể rằng{" "}
                          {character.name} từng đơn thương độc mã đối đầu với
                          một đại yêu thú cổ đại, bảo vệ cho cả một vùng đất
                          khỏi bị tàn phá. Trận chiến kéo dài ba ngày ba đêm,
                          cuối cùng {character.name} đã chiến thắng nhờ vào sự
                          lĩnh ngộ sâu sắc về {character.element} hệ đạo pháp.
                          Từ đó, danh tiếng của {character.name}
                          vang dội khắp thiên hạ, được tôn vinh là một trong
                          những anh hùng vĩ đại nhất thời đại.
                        </p>
                      </div>
                    )}
                  </div>
                ),
              },
            ]}
          />
        </div>

        {/* Right Side - Character Image */}
        <div className="page-right">
          <div className="page-image-container">
            <div
              className="image-glow-effect"
              style={{
                background: `radial-gradient(circle, ${elementColor}40 0%, transparent 70%)`,
              }}
            ></div>
            <div
              className="page-image-wrapper"
              style={{
                boxShadow: `0 0 80px ${elementColor}60, 0 0 40px ${elementColor}40`,
                borderColor: elementColor,
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                className="page-character-image"
              />
              <div className="page-image-overlay"></div>
              <div
                className="image-border-glow"
                style={{
                  boxShadow: `inset 0 0 60px ${elementColor}30`,
                }}
              ></div>
            </div>
            {/* Character Name Badge on Image */}
            <div
              className="image-name-badge"
              style={{
                background: `linear-gradient(135deg, ${elementColor}90, ${elementColor}60)`,
                borderColor: elementColor,
              }}
            >
              <span>{character.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
