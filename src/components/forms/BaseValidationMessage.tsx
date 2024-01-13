import { IUseInput } from "../../hooks/use-input/IUseInput";
import { InputType } from "../../hooks/use-input/InputType";
import { determineStyleClass } from "./FormUtilities";

export const BaseValidationMessage: React.FC<
  BaseValidationMessageProperties
> = ({ errorClass, validationMessageClass, successClass, useInput }) => {
  return (
    <p
      className={determineStyleClass(
        useInput,
        validationMessageClass,
        errorClass,
        successClass,
      )}
      style={{
        visibility: useInput.valid || !useInput.dirty ? "hidden" : "visible",
      }}
    >
      {useInput.valid || !useInput.dirty ? "valid" : useInput.error}
    </p>
  );
};

interface BaseValidationMessageProperties {
  errorClass?: string;
  validationMessageClass?: string;
  successClass?: string;
  useInput: IUseInput<InputType>;
}
