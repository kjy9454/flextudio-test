import Header from "./components/Header";
import Preview from "./components/Preview";
import Settings from "./components/Settings";
import { useElements } from "./hooks/useElements";
import { useSelectedElement } from "./hooks/useSelectedElement";

export default function App() {
  const {
    elements,
    handleAddElement,
    handleElementClick,
    handleStyleChange,
    handleContentChange,
    handleBackgroundClick,
  } = useElements();

  const selectedElement = useSelectedElement();

  return (
    <div className="h-screen flex flex-col">
      <Header handleAddElement={handleAddElement} />
      <div className="flex-1 flex">
        <Preview
          elements={elements}
          selectedElementId={selectedElement?.id || null}
          handleBackgroundClick={handleBackgroundClick}
          handleElementClick={handleElementClick}
          handleContentChange={handleContentChange}
        />
        <Settings
          selectedElement={selectedElement}
          handleStyleChange={handleStyleChange}
          handleContentChange={handleContentChange}
        />
      </div>
    </div>
  );
}
