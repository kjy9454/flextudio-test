import React, { type ReactNode } from "react";
import type { ElementType } from "../types/elements";

interface HeaderProps {
  handleAddElement: (type: ElementType) => void;
}

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ handleAddElement }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 shadow">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-900">Flextudio</h1>
        <div className="flex items-center gap-2 ml-8">
          <Button onClick={() => handleAddElement("group")}>그룹추가</Button>
          <Button onClick={() => handleAddElement("text")}>텍스트추가</Button>
          <Button onClick={() => handleAddElement("input")}>인풋추가</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
