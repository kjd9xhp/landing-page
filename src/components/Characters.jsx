import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel as AntCarousel, Card, Progress, Tag, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CharacterBio from "./CharacterBio";
import { charactersData } from "../data/charactersData";
import "./Characters.css";

const Characters = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [bioCharacter, setBioCharacter] = useState(null);
  const [bioVisible, setBioVisible] = useState(false);
  const carouselRef = React.useRef(null);

  const characters = charactersData;

  // Group characters into slides of 4
  const groupedCharacters = [];
  for (let i = 0; i < characters.length; i += 4) {
    groupedCharacters.push(characters.slice(i, i + 4));
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

  return (
    <section id="characters" className="section characters">
      <div className="container">
        <div className="section-title scroll-animate fade-up">
          <h2>Thần Tướng Huyền Thoại</h2>
          <p>Triệu hồi các anh hùng từ thần thoại và lịch sử Á Đông</p>
        </div>

        <div className="antd-carousel-wrapper scroll-animate scale">
          <Button
            className="carousel-nav-btn prev"
            shape="circle"
            size="large"
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current?.prev()}
          />

          <AntCarousel
            ref={carouselRef}
            autoplay={false}
            autoplaySpeed={4000}
            dots={{ className: "custom-dots" }}
            effect="scrollx"
            speed={800}
            easing="ease-in-out"
            pauseOnHover={true}
          >
            {groupedCharacters.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div className="characters-grid">
                  {group.map((char) => (
                    <Card
                      key={char.id}
                      hoverable
                      className="character-card-antd"
                      onClick={() => {
                        navigate(`/character/${char.id}`);
                      }}
                      cover={
                        <div className="card-cover">
                          {char.image ? (
                            <img
                              src={char.image}
                              alt={char.name}
                              className="character-image"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          ) : (
                            <div className="card-placeholder">
                              <span className="card-name-large">
                                {char.name}
                              </span>
                            </div>
                          )}
                        </div>
                      }
                    >
                      <div className="card-tags">
                        <Tag color={getRarityColor(char.rarity)}>
                          {char.rarity}
                        </Tag>
                        <Tag color="cyan">{char.element}</Tag>
                      </div>
                      <Card.Meta title={char.name} description={char.title} />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </AntCarousel>

          <Button
            className="carousel-nav-btn next"
            shape="circle"
            size="large"
            icon={<RightOutlined />}
            onClick={() => carouselRef.current?.next()}
          />
        </div>

        {selectedCard && (
          <Card
            className="character-details-antd glass-card"
            title={selectedCard.name}
          >
            <p className="detail-title">{selectedCard.title}</p>
            <p className="detail-description">{selectedCard.description}</p>

            <div className="stats-antd">
              <div className="stat-item">
                <span className="stat-label">Tấn Công</span>
                <Progress
                  percent={selectedCard.stats.attack}
                  strokeColor={{
                    "0%": "#f59e0b",
                    "100%": "#ef4444",
                  }}
                  format={(percent) => `${percent}`}
                />
              </div>
              <div className="stat-item">
                <span className="stat-label">Phòng Thủ</span>
                <Progress
                  percent={selectedCard.stats.defense}
                  strokeColor={{
                    "0%": "#f59e0b",
                    "100%": "#ef4444",
                  }}
                  format={(percent) => `${percent}`}
                />
              </div>
              <div className="stat-item">
                <span className="stat-label">Kỹ Năng</span>
                <Progress
                  percent={selectedCard.stats.skill}
                  strokeColor={{
                    "0%": "#f59e0b",
                    "100%": "#ef4444",
                  }}
                  format={(percent) => `${percent}`}
                />
              </div>
            </div>
          </Card>
        )}

        {/* Character Biography Modal */}
        <CharacterBio
          character={bioCharacter}
          visible={bioVisible}
          onClose={() => setBioVisible(false)}
        />
      </div>
    </section>
  );
};

export default Characters;
