import { IUseInput } from "./IUseInput";
import { IValidationResult } from "./IValidationResult";
import { useInput } from "./UseInput";

export function useTextInput(
  initial = "",
  validationFunc?: (value: string) => IValidationResult,
): IUseInput<string> {
  return useInput(initial, (element) => element.value, validationFunc);
}
