import type { GroupElement } from "../../types/elements";

const GroupSettings: React.FC<{
  element: GroupElement;
  onStyleChange: (styles: Partial<GroupElement["styles"]>) => void;
}> = ({ element, onStyleChange }) => (
  <div className="space-y-4">
    <h3 className="text-md font-medium text-gray-800 capitalize">
      그룹 {element.id.split("-")[1]} 요소 설정
    </h3>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        너비
      </label>
      <input
        type="text"
        value={element.styles.width?.toString() || ""}
        onChange={(e) => onStyleChange({ width: e.target.value })}
        placeholder="300px"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        높이
      </label>
      <input
        type="text"
        value={element.styles.height?.toString() || ""}
        onChange={(e) => onStyleChange({ height: e.target.value })}
        placeholder="200px"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default GroupSettings;
