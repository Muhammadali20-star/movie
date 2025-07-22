import { NavLink, useNavigate } from "react-router-dom";
import photo from "@/assets/main-logo.svg";
import {
  HomeOutlined,
  MoonOutlined,
  SearchOutlined,
  SunOutlined,
  VideoCameraOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi"

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";
    document.body.classList.toggle("dark", isDarkMode);
    setIsDark(isDarkMode);
  }, []);

  const handleTheme = () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDark(isDark);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container mx-auto px-4 pt-4 mb-9 relative z-50">
      <div className="flex justify-between items-center">
        <img onClick={() => navigate("/")} src={photo} alt="logo" className="w-28 cursor-pointer"/>
        <div className="hidden sm:flex gap-8 text-sm">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
            <HomeOutlined className="text-lg" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
            <VideoCameraOutlined className="text-lg" />
            <span>Movies</span>
          </NavLink>
          <NavLink to="/saved" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
            <FiBookmark className="text-lg" />
            <span>Saved</span>
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
            <SearchOutlined className="text-lg" />
            <span>Search</span>
          </NavLink>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <button onClick={handleTheme} className="text-xl bg-white dark:bg-slate-900 rounded-[14px] py-2 px-3">
            {isDark ? <SunOutlined /> : <MoonOutlined />}
          </button>
          <button onClick={() => navigate("/register")} className="bg-[#C61F1F] w-32 h-12 px-3 py-1 rounded-xl">
            <span className="dark:text-white text-black">Sign in</span>
          </button>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 dark:text-white">
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="sm:hidden mt-6 flex flex-col gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => `flex items-center gap-2 ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}` }>
            <HomeOutlined />
            <span>Home</span>
          </NavLink>
          <NavLink to="/movies" onClick={() => setMenuOpen(false)} className={({ isActive }) => `flex items-center gap-2 ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
            <VideoCameraOutlined />
            <span>Movies</span>
          </NavLink>
          <NavLink to="/saved" onClick={() => setMenuOpen(false)} className={({ isActive }) =>`flex items-center gap-2 ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`
            }>
            <FiBookmark />
            <span>Saved</span>
          </NavLink>
          <NavLink to="/search" onClick={() => setMenuOpen(false)} className={({ isActive }) => `flex items-center gap-2 ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
            <SearchOutlined />
            <span>Search</span>
          </NavLink>
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-slate-800 mt-4">
            <button onClick={handleTheme} className="text-xl bg-white dark:bg-slate-800 rounded-[14px] py-2 px-3">
              {isDark ? <SunOutlined /> : <MoonOutlined />}
            </button>
            <button onClick={() => { navigate("/register"); setMenuOpen(false); }} className="bg-[#C61F1F] flex-1 h-10 px-3 py-1 rounded-xl"><span className="dark:text-white text-black text-sm">Sign in</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
