import { NavLink, useNavigate } from "react-router-dom";
import photo from '@/assets/main-logo.svg';
import {
  HomeOutlined,
  MoonOutlined,
  SearchOutlined,
  StarOutlined,
  SunOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
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

  return (
    <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 mb-9 gap-4 sm:gap-0">
      <div className="flex justify-center sm:justify-start">
        <img onClick={() => navigate("/")} src={photo} alt="logo" className="w-28" />
      </div>
      <div className="flex justify-center flex-wrap gap-6 sm:gap-8 text-sm">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
          <HomeOutlined className="text-lg" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/movies" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
          <VideoCameraOutlined className="text-lg" />
          <span>Movies</span>
        </NavLink>

        <NavLink to="/saved" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
          <StarOutlined className="text-lg" />
          <span>Saved</span>
        </NavLink>

        <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}`}>
          <SearchOutlined className="text-lg" />
          <span>Search</span>
        </NavLink>
      </div>
      <div className="flex justify-center sm:justify-end gap-4">
        <button onClick={handleTheme} className="text-xl bg-white dark:bg-slate-900 rounded-[14px] py-2 px-3">{isDark ? <SunOutlined /> : <MoonOutlined />}</button>
        <button onClick={()=> navigate("/register")} className='bg-[#C61F1F] w-32 h-12 px-3 py-1 rounded-xl'>
            <span className="dark:text-white text-black">Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);
