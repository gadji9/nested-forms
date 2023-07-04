import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IToolItem } from "@/app/features/tool-item";

export const DragginToolItemContext = createContext<{
  draggingToolItem: IToolItem | undefined;
  setDraggingToolItem: Dispatch<SetStateAction<IToolItem | undefined>>;
}>({
  draggingToolItem: undefined,
  setDraggingToolItem: () => undefined,
});

export const useDragginToolItemContext = () => {
  const context = useContext(DragginToolItemContext);

  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};
