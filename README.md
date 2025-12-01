# Triệu Thần Chiến - Landing Page

Landing page cho game thẻ bài "Triệu Thần Chiến" (Summoning Gods War) - một game thẻ bài chiến thuật với chủ đề thần thoại Á Đông.

## 🎮 Demo

[Live Demo](http://localhost:3000) (khi chạy local)

## ✨ Features

- 🏔️ **Hero Section**: Background động với floating card animations
- ⚔️ **Features Section**: 6 tính năng game chính
- 🎴 **Characters Carousel**: 19 cấp độ tu tiên với Ant Design Carousel
- 🖼️ **Gallery**: 6 screenshots game với Ant Design Image preview
- 📢 **CTA Section**: Download buttons và social links
- 📱 **Fully Responsive**: Desktop → Tablet → Mobile

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Ant Design 5** - UI components
- **CSS3** - Styling với glassmorphism effects
- **Google Fonts** - Noto Serif SC + Noto Sans

## 📦 Installation

```bash
# Clone repository
git clone <your-repo-url>
cd LandingPage

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
LandingPage/
├── public/
│   └── images/          # Game images (8 files, ~5MB)
│       ├── hero-bg.png
│       ├── hero-card-1.png
│       ├── battle.png
│       ├── collection.png
│       ├── pvp.png
│       ├── campaign.png
│       ├── guild.png
│       └── event.png
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx/css
│   │   ├── Features.jsx/css
│   │   ├── Characters.jsx/css
│   │   ├── Gallery.jsx/css
│   │   ├── CTA.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Design Features

- **Dark Premium Theme**: Deep navy background với gold accents
- **Glassmorphism**: Semi-transparent cards với backdrop blur
- **Smooth Animations**: Fade, float, shimmer effects
- **Gradient Text**: Vibrant gradient cho titles
- **Responsive Grid**: Flexbox + CSS Grid layouts

## 🎯 19 Cultivation Realms

Game features complete cultivation progression system:

1. Phàm Nhân (Mortal)
2. Tu Sĩ (Cultivator)
3. Thầy Bùa (Talisman Master)
4. Thầy Pháp (Spell Master)
5. Pháp Sư (Mage)
6. Đại Pháp Sư (Grand Mage)
7. Pháp Vương (Dharma King)
8. Tán Tiên (Scattered Immortal)
9. Địa Tiên (Earth Immortal)
10. Chân Tiên (True Immortal)
11. Thiên Tiên (Celestial Immortal)
12. Tiểu Thần (Lesser God)
13. Thượng Thần (High God)
14. Tiểu Thánh (Lesser Saint)
15. Đại Thánh (Great Saint)
16. Thánh Tổ (Saint Ancestor)
17. Kim Tiên (Golden Immortal)
18. Thái Ấy (Primordial)
19. Hỗn Nguyên Đại La (Primordial Chaos Supreme)

## 📝 License

MIT License - feel free to use for your projects!

## 👤 Author

Phước Nguyễn

## 🙏 Acknowledgments

- Design inspiration: Black Myth Wukong, Marvel Rivals
- UI Components: Ant Design
- Fonts: Google Fonts (Noto Serif SC, Noto Sans)
