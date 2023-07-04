import { useDragginToolItemContext } from "@/app/core/providers/dragging-tool-item";
import {
  ForwardRefExoticComponent,
  FunctionComponent,
  DragEvent,
  memo,
  useContext,
} from "react";

export interface IToolItemProps {
  Icon: ForwardRefExoticComponent<any>;
  title: string;
}

export interface IToolItem {
  Icon: ForwardRefExoticComponent<any>;
  title: string;
}

const ToolItem: FunctionComponent<IToolItemProps> = memo(({ Icon, title }) => {
  const { setDraggingToolItem } = useDragginToolItemContext();

  function onDragStart(e: DragEvent<HTMLDivElement>) {
    setDraggingToolItem({ title, Icon });
  }

  return (
    <div
      className="flex border-2 border-neutral-400 rounded-lg p-1 items-center gap-5 hover:opacity-70 cursor-pointer"
      draggable
      onDragStart={onDragStart}
    >
      <Icon className="w-12" fill="#a8a7a3" />
      <div className="text-2xl text-white ">{title}</div>
    </div>
  );
});

ToolItem.displayName = "ToolItem";
export { ToolItem };
