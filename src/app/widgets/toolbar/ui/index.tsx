import { FunctionComponent } from "react";
import { items } from "../tools";
import { Indicator } from "@features/indicator";
import { ToolItem } from "@features/tool-item";

export const ToolBar: FunctionComponent = () => {
  return (
    <div className="w-1/3 h-full bg-zinc-900 rounded-lg px-4 py-5 flex flex-col justify-between ">
      <div className="flex flex-col justify-between gap-3">
        {items.map((item, index) => (
          <ToolItem key={index} Icon={item.Icon} title={item.title} />
        ))}
      </div>

      <Indicator />
    </div>
  );
};
