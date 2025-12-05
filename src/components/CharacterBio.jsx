import React from "react";
import { Modal, Progress, Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./CharacterBio.css";

const CharacterBio = ({ character, visible, onClose }) => {
  if (!character) return null;

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

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width="90vw"
      style={{ top: 20, maxWidth: 1400 }}
      className="character-bio-modal"
      closeIcon={<CloseOutlined style={{ fontSize: 24, color: "#fff" }} />}
    >
      <div className="bio-container">
        {/* Left Side - Character Image */}
        <div className="bio-left">
          <div
            className="bio-image-wrapper"
            style={{
              boxShadow: `0 0 40px ${getElementColor(character.element)}40`,
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              className="bio-character-image"
            />
            <div className="bio-image-overlay"></div>
          </div>
          <div className="bio-badges">
            <Tag color={getRarityColor(character.rarity)} className="bio-tag">
              {character.rarity}
            </Tag>
            <Tag
              color="cyan"
              className="bio-tag"
              style={{
                backgroundColor: `${getElementColor(character.element)}20`,
                borderColor: getElementColor(character.element),
                color: "#fff",
              }}
            >
              {character.element}
            </Tag>
          </div>
        </div>

        {/* Right Side - Character Info */}
        <div className="bio-right">
          <div className="bio-header">
            <h1 className="bio-name">{character.name}</h1>
            <p className="bio-title">{character.title}</p>
          </div>

          {/* Stats Section */}
          <div className="bio-stats">
            <h3 className="bio-section-title">Chỉ Số Năng Lực</h3>
            <div className="bio-stat-item">
              <span className="bio-stat-label">Tấn Công</span>
              <Progress
                percent={character.stats.attack}
                strokeColor={{
                  "0%": "#f59e0b",
                  "100%": "#ef4444",
                }}
                format={(percent) => `${percent}`}
              />
            </div>
            <div className="bio-stat-item">
              <span className="bio-stat-label">Phòng Thủ</span>
              <Progress
                percent={character.stats.defense}
                strokeColor={{
                  "0%": "#3b82f6",
                  "100%": "#8b5cf6",
                }}
                format={(percent) => `${percent}`}
              />
            </div>
            <div className="bio-stat-item">
              <span className="bio-stat-label">Kỹ Năng</span>
              <Progress
                percent={character.stats.skill}
                strokeColor={{
                  "0%": "#10b981",
                  "100%": "#06b6d4",
                }}
                format={(percent) => `${percent}`}
              />
            </div>
          </div>

          {/* Biography Section */}
          <div className="bio-description">
            <h3 className="bio-section-title">Tiểu Sử</h3>
            <p className="bio-text">{character.description}</p>
            {character.biography && (
              <p className="bio-text bio-extended">{character.biography}</p>
            )}
          </div>

          {/* Skills Section */}
          {character.skills && character.skills.length > 0 && (
            <div className="bio-skills">
              <h3 className="bio-section-title">Kỹ Năng Đặc Biệt</h3>
              <div className="bio-skills-grid">
                {character.skills.map((skill, index) => (
                  <div key={index} className="bio-skill-card">
                    <h4 className="bio-skill-name">{skill.name}</h4>
                    <p className="bio-skill-desc">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lore Section */}
          {character.lore && (
            <div className="bio-lore">
              <h3 className="bio-section-title">Huyền Thoại</h3>
              <p className="bio-text bio-lore-text">{character.lore}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CharacterBio;
