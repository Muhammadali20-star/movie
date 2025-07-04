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
        <div className="flex flex-col items-center">
          <HomeOutlined className="text-lg" />
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex flex-col items-center">
          <VideoCameraOutlined className="text-lg" />
          <NavLink to="/movies">Movies</NavLink>
        </div>
        <div className="flex flex-col items-center">
          <StarOutlined className="text-lg" />
          <NavLink to="/saved">Saved</NavLink>
        </div>
        <div className="flex flex-col items-center">
          <SearchOutlined className="text-lg" />
          <NavLink to="/search">Search</NavLink>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end gap-4">
        <button onClick={handleTheme} className="text-xl">{isDark ? <SunOutlined /> : <MoonOutlined />}</button>
        <button className='bg-[#C61F1F] w-32 h-12 px-3 py-1 rounded-xl'>
            <span className="dark:text-white text-black">Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);
