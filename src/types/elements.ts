import type { CSSProperties } from "react";

export type ElementType = "group" | "text" | "input";

export interface BaseElement {
  id: string;
  type: ElementType;
  parentId: string | null;
}

export interface GroupElement extends BaseElement {
  type: "group";
  styles: {
    width: CSSProperties["width"];
    height: CSSProperties["height"];
    backgroundColor?: CSSProperties["backgroundColor"];
  };
}

export interface TextElement extends BaseElement {
  type: "text";
  content: string;
  styles: {
    color: CSSProperties["color"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
}

export interface InputElement extends BaseElement {
  type: "input";
  value: string;
  styles: {
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
    color: CSSProperties["color"];
    backgroundColor: CSSProperties["backgroundColor"];
  };
}

export type UIElement = GroupElement | TextElement | InputElement;
