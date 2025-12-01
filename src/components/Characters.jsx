import React, { useState, useEffect } from "react";
import { Carousel as AntCarousel, Card, Progress, Tag, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Characters.css";

const Characters = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const carouselRef = React.useRef(null);

  const characters = [
    {
      id: 1,
      name: "Phàm Nhân",
      title: "Khởi Đầu Tu Luyện",
      rarity: "Thường",
      element: "Thổ",
      description:
        "Người phàm bắt đầu hành trình tu tiên, nền tảng của mọi tu sĩ.",
      stats: { attack: 10, defense: 10, skill: 10 },
    },
    {
      id: 2,
      name: "Tu Sĩ",
      title: "Luyện Khí Kỳ",
      rarity: "Thường",
      element: "Mộc",
      description: "Bước đầu tiên trên con đường tu tiên, tích lũy linh khí.",
      stats: { attack: 20, defense: 15, skill: 18 },
    },
    {
      id: 3,
      name: "Thầy Bùa",
      title: "Phù Lục Sư",
      rarity: "Hiếm",
      element: "Kim",
      description: "Sử dụng phù chú để triệu hồi và phòng thủ.",
      stats: { attack: 30, defense: 25, skill: 35 },
    },
    {
      id: 4,
      name: "Thầy Pháp",
      title: "Pháp Thuật Sư",
      rarity: "Hiếm",
      element: "Thủy",
      description: "Thông thạo các pháp thuật cơ bản, kiểm soát ngũ hành.",
      stats: { attack: 40, defense: 30, skill: 45 },
    },
    {
      id: 5,
      name: "Pháp Sư",
      title: "Ngũ Hành Chưởng",
      rarity: "Tinh Anh",
      element: "Hỏa",
      description: "Tinh thông ngũ hành pháp thuật, sức mạnh vượt trội.",
      stats: { attack: 50, defense: 40, skill: 55 },
    },
    {
      id: 6,
      name: "Đại Pháp Sư",
      title: "Thiên Địa Linh",
      rarity: "Tinh Anh",
      element: "Lôi",
      description: "Đại pháp sư với khả năng điều khiển thiên địa linh khí.",
      stats: { attack: 60, defense: 50, skill: 65 },
    },
    {
      id: 7,
      name: "Pháp Vương",
      title: "Vạn Pháp Tôn",
      rarity: "Sử Thi",
      element: "Phong",
      description: "Pháp vương thống lĩnh vạn pháp, uy quyền chấn động.",
      stats: { attack: 70, defense: 60, skill: 75 },
    },
    {
      id: 8,
      name: "Tán Tiên",
      title: "Nhập Tiên Đạo",
      rarity: "Sử Thi",
      element: "Băng",
      description: "Bước vào cảnh giới tiên nhân, siêu thoát phàm tục.",
      stats: { attack: 75, defense: 65, skill: 80 },
    },
    {
      id: 9,
      name: "Địa Tiên",
      title: "Địa Linh Chưởng",
      rarity: "Huyền Thoại",
      element: "Thổ",
      description: "Địa tiên nắm giữ quyền năng đại địa, bất khả xâm phạm.",
      stats: { attack: 80, defense: 75, skill: 85 },
    },
    {
      id: 10,
      name: "Chân Tiên",
      title: "Chân Tiên Cảnh",
      rarity: "Huyền Thoại",
      element: "Kim",
      description: "Chân tiên với thần thông quảng đại, trường sinh bất tử.",
      stats: { attack: 85, defense: 80, skill: 88 },
    },
    {
      id: 11,
      name: "Thiên Tiên",
      title: "Thiên Giới Tôn",
      rarity: "Huyền Thoại",
      element: "Quang",
      description: "Thiên tiên cai quản thiên giới, uy quyền vô song.",
      stats: { attack: 88, defense: 85, skill: 90 },
    },
    {
      id: 12,
      name: "Tiểu Thần",
      title: "Thần Linh Sơ",
      rarity: "Thần Thoại",
      element: "Lôi",
      description: "Tiểu thần với thần lực ban đầu, bước vào thần giới.",
      stats: { attack: 90, defense: 87, skill: 92 },
    },
    {
      id: 13,
      name: "Thượng Thần",
      title: "Thượng Giới Chủ",
      rarity: "Thần Thoại",
      element: "Hỏa",
      description:
        "Thượng thần chưởng quản thượng giới, quyền năng tối thượng.",
      stats: { attack: 92, defense: 90, skill: 94 },
    },
    {
      id: 14,
      name: "Tiểu Thánh",
      title: "Thánh Đạo Nhập",
      rarity: "Thần Thoại",
      element: "Phong",
      description: "Tiểu thánh lĩnh ngộ thánh đạo, siêu việt thần linh.",
      stats: { attack: 94, defense: 92, skill: 95 },
    },
    {
      id: 15,
      name: "Đại Thánh",
      title: "Thánh Giả Tôn",
      rarity: "Thần Thoại",
      element: "Thủy",
      description: "Đại thánh với thánh lực vô biên, đứng đầu muôn linh.",
      stats: { attack: 95, defense: 94, skill: 96 },
    },
    {
      id: 16,
      name: "Thánh Tổ",
      title: "Vạn Thánh Tổ",
      rarity: "Siêu Thần Thoại",
      element: "Ám",
      description: "Thánh tổ khai sáng thánh đạo, tổ sư muôn đời.",
      stats: { attack: 97, defense: 95, skill: 97 },
    },
    {
      id: 17,
      name: "Kim Tiên",
      title: "Kim Thân Bất Hoại",
      rarity: "Siêu Thần Thoại",
      element: "Kim",
      description: "Kim tiên với kim thân bất hoại, bất diệt vĩnh hằng.",
      stats: { attack: 98, defense: 97, skill: 98 },
    },
    {
      id: 18,
      name: "Thái Ấy",
      title: "Thái Sơ Chí Tôn",
      rarity: "Siêu Thần Thoại",
      element: "Hỗn Độn",
      description: "Thái ấy cảnh giới, hỗn độn chưa khai, vạn vật chi tổ.",
      stats: { attack: 99, defense: 98, skill: 99 },
    },
    {
      id: 19,
      name: "Hỗn Nguyên Đại La",
      title: "Vũ Trụ Chí Tôn",
      rarity: "Siêu Thần Thoại",
      element: "Vũ Trụ",
      description:
        "Hỗn nguyên đại la, chí tôn vô thượng, chưởng quản vạn giới.",
      stats: { attack: 100, defense: 100, skill: 100 },
    },
  ];

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
            autoplay
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
                      onClick={() => setSelectedCard(char)}
                      cover={
                        <div className="card-cover">
                          <div className="card-placeholder">
                            <span className="card-name-large">{char.name}</span>
                          </div>
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
      </div>
    </section>
  );
};

export default Characters;
