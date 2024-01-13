import { IUseInput } from "../../hooks/use-input/IUseInput";
import { InputType } from "../../hooks/use-input/InputType";
import { determineStyleClass, getValue } from "./FormUtilities";

export const BaseCharacterInput: React.FC<BaseCharacterInputProperties> = ({
  errorClass,
  inputStaticClass,
  id,
  placeholder,
  required,
  successClass,
  type,
  useInput,
}) => {
  return (
    <input
      className={determineStyleClass(
        useInput,
        inputStaticClass,
        errorClass,
        successClass,
      )}
      id={id}
      placeholder={placeholder}
      onChange={useInput.setValue}
      onFocus={useInput.setValue}
      onInput={useInput.setValue}
      required={required}
      type={type}
      value={getValue(type, useInput)}
    />
  );
};

interface BaseCharacterInputProperties {
  errorClass: string;
  inputStaticClass: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  successClass: string;
  type: string;
  useInput: IUseInput<InputType>;
}
