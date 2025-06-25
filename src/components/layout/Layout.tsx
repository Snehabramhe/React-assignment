import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-[rgba(242,244,250,1)] border border-[rgba(0,0,0,0.37)] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
