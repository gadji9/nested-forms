import { observer } from "mobx-react-lite";
import { ChangeEvent, FunctionComponent } from "react";
import { InputModel } from "../../input";
import { IndicatorStore } from "../model";
export const Indicator: FunctionComponent = observer(() => {
  function onLabelChange(e: ChangeEvent<HTMLInputElement>) {
    if (IndicatorStore.element) {
      IndicatorStore.element.setLabel(e.target.value);
    }
  }

  function onTypeChange(e: ChangeEvent<HTMLInputElement>) {
    if (IndicatorStore.element instanceof InputModel) {
      IndicatorStore.element.setType(e.target.value);
    }
  }
  return (
    IndicatorStore.element && (
      <div className="w-full h-[300px] bg-white p-5">
        <div className="w-full flex gap-5">
          label:
          <input
            type="text"
            value={IndicatorStore.element.label}
            onChange={onLabelChange}
          />
        </div>
        {IndicatorStore.element instanceof InputModel && (
          <div className="w-full flex gap-5">
            type:
            <input
              type="text"
              value={IndicatorStore.element.type!}
              onChange={onTypeChange}
            />
          </div>
        )}
      </div>
    )
  );
});
