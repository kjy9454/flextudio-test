import type {
  GroupElement,
  TextElement,
  InputElement,
} from "../types/elements";
import GroupSettings from "./settings/GroupSettings";
import InputSettings from "./settings/InputSettings";
import TextSettings from "./settings/TextSettings";

interface SettingsProps {
  selectedElement: GroupElement | TextElement | InputElement | null;
  handleContentChange: (content: string) => void;
  handleStyleChange: (
    styles:
      | Partial<GroupElement["styles"]>
      | Partial<TextElement["styles"]>
      | Partial<InputElement["styles"]>
  ) => void;
}

const Settings: React.FC<SettingsProps> = ({
  selectedElement,
  handleContentChange,
  handleStyleChange,
}) => {
  if (!selectedElement) {
    return (
      <div className="bg-white p-6 w-80">
        <h2 className="text-lg font-medium text-gray-900 mb-4">설정</h2>
        <p className="text-gray-500">요소를 선택하여 속성을 편집하세요</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 border-gray-200 w-80">
      <h2 className="text-lg font-medium text-gray-900 mb-4 min-w-60">설정</h2>
      {selectedElement.type === "group" && (
        <GroupSettings
          element={selectedElement as GroupElement}
          onStyleChange={handleStyleChange}
        />
      )}
      {selectedElement.type === "text" && (
        <TextSettings
          element={selectedElement as TextElement}
          onContentChange={handleContentChange}
          onStyleChange={handleStyleChange}
        />
      )}
      {selectedElement.type === "input" && (
        <InputSettings
          element={selectedElement as InputElement}
          onStyleChange={handleStyleChange}
        />
      )}
    </div>
  );
};

export default Settings;
