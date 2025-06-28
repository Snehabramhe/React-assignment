import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-[#613FDD] text-white hover:bg-[#5333c5] focus:ring-[#613FDD]",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border border-[#EAEAEA] bg-white text-[#0F0C1B] hover:bg-gray-50 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-2.5 py-1.5 text-xs rounded",
    md: "px-2.5 py-2 text-sm rounded-lg",
    lg: "px-4 py-2.5 text-base rounded-lg",
  };

  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={`${iconSizeClasses[size]} mr-2 flex-shrink-0`}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={`${iconSizeClasses[size]} ml-2 flex-shrink-0`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
