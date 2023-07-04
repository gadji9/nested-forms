import { observer } from "mobx-react-lite";
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  DragEvent,
  MouseEvent,
} from "react";
import { EditorModel } from "@widgets/editor";
import { GroupModel } from "@features/group";
import { IToolItem } from "@features/tool-item";
import { IndicatorStore } from "@features/indicator";

export const Group: FunctionComponent<{
  children?: React.ReactNode;
  group: GroupModel;
  draggingToolItem: IToolItem | undefined;
  setDraggingToolItem: Dispatch<SetStateAction<IToolItem | undefined>>;
}> = observer(({ children, group, draggingToolItem, setDraggingToolItem }) => {
  //
  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    if (!draggingToolItem) {
      return;
    }

    EditorModel.insertElement(draggingToolItem, group);

    setDraggingToolItem(undefined);
  }

  function onDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function onClick(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    e.stopPropagation();
    IndicatorStore.setElement(group);
  }

  return (
    <>
      <div
        className="mb-2"
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={onClick}
      >
        <label className="block">{group.label}</label>
        <div className="min-w-[100px] min-h-[100px] border-2 border-white bg-transparent p-5 mb-2">
          {children}
        </div>
      </div>
    </>
  );
});
