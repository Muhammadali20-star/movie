import React, { type FC, type ReactNode } from "react";
import logo from "@/assets/vite.svg";

export const Loading: FC = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-black justify-center items-center">
      <img src={logo} alt="logo" className="w-20 h-20 mb-3" />
      <p className="text-gray-600 text-sm dark:text-gray-300">Yuklanmoqda...</p>
    </div>
  );
};

interface SuspenseProps {
  children: ReactNode;
}

export const Suspense: FC<SuspenseProps> = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
