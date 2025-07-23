import { useMemo } from "react";
import { useElementStore } from "../stores/elementStore";
import { findElement } from "../utils/elementUtils";

export const useSelectedElement = () => {
  const elements = useElementStore((state) => state.elements);
  const selectedElementId = useElementStore((state) => state.selectedElementId);

  return useMemo(() => {
    return findElement(elements, selectedElementId || "") || null;
  }, [elements, selectedElementId]);
};
