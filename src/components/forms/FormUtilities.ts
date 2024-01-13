import { IUseInput } from "../../hooks/use-input/IUseInput";
import { InputType } from "../../hooks/use-input/InputType";

export function getValue(
  inputType: string,
  useInput: IUseInput<InputType>,
): string {
  switch (inputType) {
    case "text":
      return useInput.value.toString();
    default:
      return useInput.value.toString();
  }
}

export function determineStyleClass(
  useInput: IUseInput<InputType>,
  constant?: string,
  error?: string,
  success?: string,
): string {
  let result = constant ?? "";

  if (useInput.dirty) {
    if (useInput.valid) {
      result += ` ${success ?? ""}`;
    } else {
      result += ` ${error ?? ""}`;
    }
  }

  return result;
}
