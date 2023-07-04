"use client";

import { useState } from "react";

import { Editor } from "@widgets/editor/";
import { ToolBar } from "@widgets/toolbar/";
import { IToolItem } from "@features/tool-item";
import { DragginToolItemContext } from "./core/providers/dragging-tool-item";

export default function Home() {
  const [draggingToolItem, setDraggingToolItem] = useState<IToolItem>();

  return (
    <main className="w-full h-full lg:container flex py-5 flex pl-10 gap-10">
      <DragginToolItemContext.Provider
        value={{ draggingToolItem, setDraggingToolItem }}
      >
        <div className="w-full flex gap-10">
          <Editor />
          <ToolBar />
        </div>
      </DragginToolItemContext.Provider>
    </main>
  );
}
