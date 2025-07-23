import { create } from "zustand";
import type {
  UIElement,
  ElementType,
  GroupElement,
  TextElement,
  InputElement,
} from "../types/elements";
import {
  createElement,
  updateElementStyles,
  updateElementContent,
  findElement,
} from "../utils/elementUtils";

interface ElementState {
  elements: UIElement[];
  selectedElementId: string | null;
}

interface ElementActions {
  addElement: (type: ElementType) => void;
  selectElement: (id: string | null) => void;
  updateElementStyles: (
    elementId: string,
    styles:
      | Partial<GroupElement["styles"]>
      | Partial<TextElement["styles"]>
      | Partial<InputElement["styles"]>
  ) => void;
  updateElementContent: (elementId: string, content: string) => void;
  clearSelection: () => void;
}

export const useElementStore = create<ElementState & ElementActions>(
  (set, get) => ({
    elements: [],
    selectedElementId: null,

    addElement: (type: ElementType) => {
      const { elements, selectedElementId } = get();
      const selectedElement = findElement(elements, selectedElementId || "");

      let parentId: string | null = null;
      if (selectedElement?.type === "group") {
        parentId = selectedElement.id;
      } else if (selectedElement) {
        parentId = selectedElement.parentId;
      }

      const newElement = createElement(type, parentId);
      set((state) => ({
        elements: [...state.elements, newElement],
        selectedElementId: newElement.id,
      }));
    },

    selectElement: (id: string | null) => {
      set({ selectedElementId: id });
    },

    updateElementStyles: (
      elementId: string,
      styles:
        | Partial<GroupElement["styles"]>
        | Partial<TextElement["styles"]>
        | Partial<InputElement["styles"]>
    ) => {
      set((state) => ({
        elements: updateElementStyles(state.elements, elementId, styles),
      }));
    },

    updateElementContent: (elementId: string, content: string) => {
      set((state) => ({
        elements: updateElementContent(state.elements, elementId, content),
      }));
    },

    clearSelection: () => {
      set({ selectedElementId: null });
    },
  })
);
