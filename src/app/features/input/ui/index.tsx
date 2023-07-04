import { observer } from "mobx-react-lite";
import { ChangeEvent, FunctionComponent, MouseEvent } from "react";
import { IndicatorStore } from "@features/indicator/";
import { InputModel } from "../model";

export const Input: FunctionComponent<{ input: InputModel }> = observer(
  ({ input }) => {
    function onChange(e: ChangeEvent<HTMLInputElement>) {
      input.setValue(e.target.value);
    }
    function onClick(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
      e.stopPropagation();
      IndicatorStore.setElement(input);
    }

    return (
      <>
        <div className="mb-2" onClick={onClick}>
          <label className="block">{input.label}</label>
          <input
            type={input.type}
            id="example2"
            className="p-2 text-white outline-none bg-transparent border-b-2 border-white"
            value={input.value}
            onChange={onChange}
          />
        </div>
      </>
    );
  }
);
