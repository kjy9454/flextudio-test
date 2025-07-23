import type {
  UIElement,
  GroupElement,
  TextElement,
  InputElement,
  ElementType,
} from "../types/elements";

let groupIdCounter = 1;
let textIdCounter = 1;
let inputIdCounter = 1;

export const createElement = (
  type: ElementType,
  parentId: string | null = null
): UIElement => {
  const baseElement = {
    id: `${type}-${
      type === "group"
        ? groupIdCounter++
        : type === "text"
        ? textIdCounter++
        : inputIdCounter++
    }`,
    type,
    parentId,
  };

  switch (type) {
    case "group":
      return {
        ...baseElement,
        type: "group",
        styles: {
          width: "300px",
          height: "200px",
          backgroundColor: "#f3f4f6",
        },
      } as GroupElement;

    case "text":
      return {
        ...baseElement,
        type: "text",
        content: "텍스트요소",
        styles: {
          color: "#000000",
          fontSize: "16px",
          fontWeight: "400",
        },
      } as TextElement;

    case "input":
      return {
        ...baseElement,
        type: "input",
        value: "",
        styles: {
          fontSize: "16px",
          fontWeight: "400",
          color: "#000000",
          backgroundColor: "#ffffff",
        },
      } as InputElement;

    default:
      throw new Error(`Unknown element type: ${type}`);
  }
};

export const updateElementStyles = <T extends UIElement>(
  elements: UIElement[],
  elementId: string,
  newStyles: Partial<T["styles"]>
): UIElement[] => {
  return elements.map((el) => {
    if (el.id === elementId) {
      return {
        ...el,
        styles: { ...el.styles, ...newStyles },
      } as UIElement;
    }
    return el;
  });
};

export const updateElementContent = (
  elements: UIElement[],
  elementId: string,
  content: string
): UIElement[] => {
  return elements.map((el) => {
    if (el.id === elementId) {
      if (el.type === "text") {
        return { ...el, content };
      } else if (el.type === "input") {
        return { ...el, value: content };
      }
    }
    return el;
  });
};

export const findElement = (
  elements: UIElement[],
  elementId: string
): UIElement | undefined => {
  return elements.find((el) => el.id === elementId);
};
