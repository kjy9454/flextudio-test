import type { UIElement } from "../types/elements";
import ElementRenderer from "./ElementRenderer";

interface PreviewProps {
  elements: UIElement[];
  selectedElementId: string | null;
  handleBackgroundClick: () => void;
  handleElementClick: (id: string) => void;
  handleContentChange: (content: string) => void;
}

const Preview: React.FC<PreviewProps> = ({
  elements,
  selectedElementId,
  handleBackgroundClick,
  handleElementClick,
  handleContentChange,
}) => {
  const rootElements: UIElement[] = elements.filter(
    (el) => el.parentId === null
  );

  return (
    <div
      className="flex-1 p-6 overflow-auto"
      onClick={() => handleBackgroundClick()}
    >
      <h2 className="text-lg font-medium text-gray-900 mb-4">Preview</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-4 min-h-[600px]">
        {rootElements.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            요소를 추가해주세요
          </div>
        ) : (
          <div className="space-y-4">
            {rootElements.map((element) => (
              <ElementRenderer
                key={element.id}
                element={element}
                elements={elements}
                selectedElementId={selectedElementId}
                handleElementClick={handleElementClick}
                handleContentChange={handleContentChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
