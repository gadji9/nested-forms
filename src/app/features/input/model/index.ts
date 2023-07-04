import { HTMLInputTypeAttribute } from "react";
import { makeAutoObservable } from "mobx";

export class InputModel {
  id: number | string;
  label: string = "email";
  value: any = "";
  type: HTMLInputTypeAttribute = "text";

  constructor() {
    this.id = Date.now();
    makeAutoObservable(this);
  }

  setValue(val: any) {
    this.value = val;
  }

  setLabel(label: string) {
    this.label = label;
  }

  setType(type: HTMLInputTypeAttribute) {
    this.type = type;
  }
}

export const InputStore = new InputModel();
