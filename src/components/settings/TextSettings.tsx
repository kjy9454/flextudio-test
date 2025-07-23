import type { TextElement } from "../../types/elements";

const TextSettings: React.FC<{
  element: TextElement;
  onContentChange: (content: string) => void;
  onStyleChange: (styles: Partial<TextElement["styles"]>) => void;
}> = ({ element, onContentChange, onStyleChange }) => (
  <div className="space-y-4">
    <h3 className="text-md font-medium text-gray-800 capitalize">
      텍스트 설정
    </h3>
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
        텍스트 크기
      </label>
      <input
        type="text"
        value={element.styles.fontSize?.toString() || ""}
        onChange={(e) => onStyleChange({ fontSize: e.target.value })}
        placeholder="200px"
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
        텍스트 내용
      </label>
      <input
        type="text"
        value={element.content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Enter text..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default TextSettings;
