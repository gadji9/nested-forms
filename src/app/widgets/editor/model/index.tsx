import { IToolItem } from "@features/tool-item";

import { GroupModel } from "@features/group/model";
import { InputModel } from "@features/input";

export class EditorModel {
  static insertElement(element: IToolItem, target: GroupModel) {
    if (element.title === "Инпут") {
      target.addInput(new InputModel());
    }

    if (element.title === "Форма") {
      target.addGroup(new GroupModel());
    }
  }
}
