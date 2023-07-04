import { HTMLInputTypeAttribute } from "react";
import { makeAutoObservable } from "mobx";
import { InputModel } from "@/app/features/input";
import { GroupModel } from "@/app/features/group";

export class IndicatorModel {
  element: InputModel | GroupModel | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setElement(element: InputModel | GroupModel) {
    this.element = element;
  }
}

export const IndicatorStore = new IndicatorModel();
