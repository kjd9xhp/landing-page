import React, { useState } from "react";
import { Image, Modal } from "antd";
import "./Gallery.css";

const Gallery = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const screenshots = [
    {
      id: 1,
      title: "Giao Diện Chiến Đấu",
      description: "Trải nghiệm chiến đấu mượt mà với hiệu ứng kỹ năng đẹp mắt",
      image: "/images/battle.png",
    },
    {
      id: 2,
      title: "Bộ Sưu Tập Thẻ",
      description: "Quản lý và nâng cấp hàng trăm thần tướng trong bộ sưu tập",
      image: "/images/collection.png",
    },
    {
      id: 3,
      title: "Đấu Trường PvP",
      description: "Thách đấu người chơi thực và leo rank toàn server",
      image: "/images/pvp.png",
    },
    {
      id: 4,
      title: "Chiến Dịch PvE",
      description: "Khám phá câu chuyện huyền thoại qua các chiến dịch",
      image: "/images/campaign.png",
    },
    {
      id: 5,
      title: "Bang Hội",
      description: "Tham gia bang hội và chiến đấu cùng đồng đội",
      image: "/images/guild.png",
    },
    {
      id: 6,
      title: "Sự Kiện Đặc Biệt",
      description: "Tham gia các sự kiện giới hạn để nhận thưởng độc quyền",
      image: "/images/event.png",
    },
  ];

  const handlePreview = (screenshot) => {
    setPreviewImage(screenshot.image || "");
    setPreviewTitle(screenshot.title);
    setPreviewOpen(true);
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-title">
          <h2>Hình Ảnh Game</h2>
          <p>Khám phá thế giới Triệu Thần Chiến qua những hình ảnh tuyệt đẹp</p>
        </div>

        <div className="gallery-grid-antd">
          <Image.PreviewGroup>
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className="gallery-item-antd"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="gallery-image-antd"
                  preview={{
                    mask: (
                      <div className="preview-mask">
                        <h4>{screenshot.title}</h4>
                        <p>{screenshot.description}</p>
                      </div>
                    ),
                  }}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
