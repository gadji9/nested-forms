import { InputModel } from "../../input";
import { makeAutoObservable } from "mobx";

export class GroupModel {
  id: number | string;
  label: string = "email";
  groups: GroupModel[] = [];
  inputs: InputModel[] = [];

  constructor() {
    this.id = Date.now();
    makeAutoObservable(this);
  }

  addGroup(group: GroupModel) {
    this.groups.push(group);
  }

  addInput(input: InputModel) {
    this.inputs.push(input);
  }

  setLabel(label: string) {
    this.label = label;
  }
}

export const GroupStore = new GroupModel();
