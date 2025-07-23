import { useElementStore } from "../stores/elementStore";
import type {
  ElementType,
  GroupElement,
  TextElement,
  InputElement,
} from "../types/elements";
import { useShallow } from "zustand/react/shallow";

export const useElements = () => {
  const {
    elements,
    addElement,
    selectElement,
    updateElementStyles,
    updateElementContent,
    clearSelection,
    selectedElementId,
  } = useElementStore(
    useShallow((state) => ({
      elements: state.elements,
      addElement: state.addElement,
      selectElement: state.selectElement,
      updateElementStyles: state.updateElementStyles,
      updateElementContent: state.updateElementContent,
      clearSelection: state.clearSelection,
      selectedElementId: state.selectedElementId,
    }))
  );

  const handleAddElement = (type: ElementType) => {
    addElement(type);
  };

  const handleElementClick = (id: string) => {
    selectElement(id);
  };

  const handleStyleChange = (
    styles: Partial<
      GroupElement["styles"] | TextElement["styles"] | InputElement["styles"]
    >
  ) => {
    if (!selectedElementId) return;
    updateElementStyles(selectedElementId, styles);
  };

  const handleContentChange = (content: string) => {
    if (!selectedElementId) return;
    updateElementContent(selectedElementId, content);
  };

  const handleBackgroundClick = () => {
    clearSelection();
  };

  return {
    elements,
    handleAddElement,
    handleElementClick,
    handleStyleChange,
    handleContentChange,
    handleBackgroundClick,
  };
};
