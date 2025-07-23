import React, { memo } from "react";
import type { UIElement } from "../types/elements";

interface ElementRendererProps {
  element: UIElement;
  elements: UIElement[];
  selectedElementId: string | null;
  handleElementClick: (id: string) => void;
  handleContentChange: (content: string) => void;
}

const ElementRenderer: React.FC<ElementRendererProps> = ({
  element,
  elements,
  selectedElementId,
  handleElementClick,
  handleContentChange,
}) => {
  const isSelected = selectedElementId === element.id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleElementClick(element.id);
  };
  const childElements = elements.filter((el) => el.parentId === element.id);

  const baseClass = `
    relative cursor-pointer transition-all duration-200
    ${isSelected ? "ring-2 ring-blue-500 ring-offset-2" : ""}
  `;

  if (element.type === "group") {
    const groupStyles = {
      ...element.styles,
    };

    return (
      <div
        className={`${baseClass} border border-gray-200 rounded-lg p-4 min-h-[100px] overflow-auto`}
        style={groupStyles}
        onClick={handleClick}
      >
        <div className="text-xs text-gray-500 mb-2 pointer-events-none">
          그룹 {element.id.split("-")[1]}
        </div>
        <div className="space-y-2">
          {childElements.map((child) => (
            <ElementRenderer
              key={child.id}
              element={child}
              elements={elements}
              selectedElementId={selectedElementId}
              handleElementClick={handleElementClick}
              handleContentChange={handleContentChange}
            />
          ))}
        </div>
      </div>
    );
  }

  if (element.type === "text") {
    return (
      <p
        className={`${baseClass} inline-block px-2 py-1 rounded`}
        style={element.styles}
        onClick={handleClick}
      >
        {element.content}
      </p>
    );
  }

  if (element.type === "input") {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      handleContentChange(e.target.value);
    };

    const handleInputClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      handleElementClick(element.id);
      const target = e.target as HTMLInputElement;
      setTimeout(() => target.focus(), 0);
    };

    return (
      <input
        className={`${baseClass} border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        style={element.styles}
        value={element.value}
        onChange={handleInputChange}
        placeholder="인풋요소"
        onClick={handleInputClick}
      />
    );
  }

  return null;
};

export default memo(ElementRenderer);
