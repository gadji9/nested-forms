import { FunctionComponent, DragEvent, useContext } from "react";

import { observer } from "mobx-react-lite";

import { GroupModel, GroupStore } from "@features/group";
import { useDragginToolItemContext } from "@/app/core/providers/dragging-tool-item";
import { useGenerate } from "../lib/generator";

export const Editor: FunctionComponent = observer(() => {
  const generatedElements = useGenerate();
  const { draggingToolItem, setDraggingToolItem } = useDragginToolItemContext();
  function onDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function onDrop() {
    if (!draggingToolItem) {
      return;
    }
    const newGroup = new GroupModel();

    GroupStore.addGroup(newGroup);
    setDraggingToolItem(undefined);
  }

  return (
    <div className="text-slate-100 p-4 mx-auto rounded-lg border-2 border-cyan-500 h-full w-full">
      <div
        id="field"
        className="w-full h-full outline-none"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {generatedElements}
      </div>
    </div>
  );
});
