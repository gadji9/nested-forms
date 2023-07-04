import React from "react";

import { Group, GroupModel, GroupStore } from "@features/group";
import { Input } from "@features/input";
import { useDragginToolItemContext } from "@/app/core/providers/dragging-tool-item";

export function useGenerate(): React.ReactElement[] {
  const { draggingToolItem, setDraggingToolItem } = useDragginToolItemContext();

  const groups = GroupStore.groups;

  let html: React.ReactElement[] = [];
  for (let index = 0; index < groups.length; index++) {
    const group = groups[index];
    html.push(
      <Group
        group={group}
        draggingToolItem={draggingToolItem}
        setDraggingToolItem={setDraggingToolItem}
        key={group.id}
      >
        {helper(group).map((Item) => Item)}
        {group.inputs.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </Group>
    );
  }

  function helper({ groups }: GroupModel): React.ReactElement[] {
    let html: React.ReactElement[] = [];
    for (let index = 0; index < groups.length; index++) {
      const group = groups[index];

      html.push(
        <Group
          group={group}
          draggingToolItem={draggingToolItem}
          setDraggingToolItem={setDraggingToolItem}
          key={group.id}
        >
          {helper(group).map((Item) => Item)}
          {group.inputs.map((input) => (
            <Input key={input.id} input={input} />
          ))}
        </Group>
      );
    }

    return html;
  }

  return html;
}
