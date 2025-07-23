import type { InputElement } from "../../types/elements";

const InputSettings: React.FC<{
  element: InputElement;
  onStyleChange: (styles: Partial<InputElement["styles"]>) => void;
}> = ({ element, onStyleChange }) => (
  <div className="space-y-4">
    <h3 className="text-md font-medium text-gray-800 capitalize">인풋 설정</h3>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        텍스트 크기
      </label>
      <input
        type="text"
        value={element.styles.fontSize?.toString() || ""}
        onChange={(e) => onStyleChange({ fontSize: e.target.value })}
        placeholder="16px"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        텍스트 굵기
      </label>
      <select
        value={element.styles.fontWeight?.toString() || "400"}
        onChange={(e) => onStyleChange({ fontWeight: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="300">Light</option>
        <option value="400">Normal</option>
        <option value="500">Medium</option>
        <option value="600">Semi Bold</option>
        <option value="700">Bold</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        텍스트 색상
      </label>
      <input
        type="color"
        value={element.styles.color?.toString() || "#000000"}
        onChange={(e) => onStyleChange({ color: e.target.value })}
        className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        배경색
      </label>
      <input
        type="color"
        value={element.styles.backgroundColor?.toString() || "#ffffff"}
        onChange={(e) => onStyleChange({ backgroundColor: e.target.value })}
        className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
      />
    </div>
  </div>
);

export default InputSettings;
