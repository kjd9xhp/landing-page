import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  HomeOutlined,
  ThunderboltOutlined,
  UserOutlined,
  PictureOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  const updateNavbar = useCallback(() => {
    const scrollY = window.scrollY;

    // Update scrolled state
    setScrolled(scrollY > 50);

    // Active section detection - optimized
    const sections = ["hero", "features", "characters", "gallery", "download"];

    // If at the very top, always set hero as active
    if (scrollY < 100) {
      setActiveSection("hero");
      ticking.current = false;
      return;
    }

    const scrollPosition = scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }

    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateNavbar();
        });
        ticking.current = true;
      }
    };

    // Initial call
    updateNavbar();

    // Passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateNavbar]);

  const scrollToSection = (sectionId) => {
    // Special case for hero - scroll to absolute top
    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
      return;
    }

    // For other sections, use offset
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { key: "hero", icon: <HomeOutlined />, label: "Trang Chủ" },
    { key: "features", icon: <ThunderboltOutlined />, label: "Tính Năng" },
    { key: "characters", icon: <UserOutlined />, label: "Thần Tướng" },
    { key: "gallery", icon: <PictureOutlined />, label: "Hình Ảnh" },
    { key: "download", icon: <DownloadOutlined />, label: "Tải Game" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container container">
        <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
          <span className="logo-text">Triệu Thần Chiến</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${
                activeSection === item.key ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.key)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`mobile-nav-item ${
              activeSection === item.key ? "active" : ""
            }`}
            onClick={() => scrollToSection(item.key)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
