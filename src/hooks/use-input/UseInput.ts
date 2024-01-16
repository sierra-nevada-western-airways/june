import { useState } from "react";
import { IValidationResult } from "./IValidationResult";
import { IUseInput } from "./IUseInput";
import { InputType } from "./InputType";

export function useInput<TInputType extends InputType>(
  initial: TInputType,
  mappingFunction: (element: HTMLInputElement) => TInputType,
  validationFunction?: (value: TInputType) => IValidationResult,
): IUseInput<TInputType> {
  const [value, updateValue] = useState<TInputType>(initial);
  const [isValid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isDirty, setDirty] = useState<boolean>(false);

  const setValue = (event: React.FormEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;
    const value = mappingFunction(element);
    updateValue(value);
    setDirty(true);

    if (validationFunction) {
      const result = validationFunction(value);
      setValid(element.validity.valid && result.valid);
      setError(result.error === "" ? element.validationMessage : result.error);
    } else {
      setValid(element.validity.valid);
      setError(element.validationMessage);
    }
  };

  const setValidationResult = (result: IValidationResult): void => {
    setValid(result.valid);
    setError(result.error);
  };

  return {
    value,
    setValue,
    isValid,
    setValidationResult,
    error,
    isDirty,
  };
}
