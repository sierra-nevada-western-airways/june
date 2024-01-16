import { IUseInput } from "../../hooks/use-input/IUseInput";
import { InputType } from "../../hooks/use-input/InputType";

export function getValue(
  inputType: string,
  useInput: IUseInput<InputType>,
): string {
  switch (inputType) {
    case "text":
    case "number": {
      return useInput.value.toString();
    }
    case "date": {
      return new Date(useInput.value).toISOString();
    }
    default: {
      return useInput.value.toString();
    }
  }
}

export function determineStyleClass(
  useInput: IUseInput<InputType>,
  constant?: string,
  error?: string,
  success?: string,
): string {
  let result = constant ?? "";

  if (useInput.isDirty) {
    result += useInput.isValid ? ` ${success ?? ""}` : ` ${error ?? ""}`;
  }

  return result;
}
