import { useId } from "react";
import { IUseInput } from "../../hooks/use-input/IUseInput";
import { BaseCharacterInput } from "./BaseCharacterInput";
import { BaseInputTemplate } from "./BaseInputTemplate";

const TextInput: React.FC<TextInputProperties> = ({
  placeholder,
  useInput,
}) => {
  const id = useId();

  return (
    <BaseInputTemplate
      errorClass="is-invalid"
      id={id}
      innerWrapperClass=""
      labelClass="form-label"
      labelText={placeholder}
      outerWrapperClass="mb-3"
      successClass="is-valid"
      useInput={useInput}
      validationMessageClass=""
    >
      <BaseCharacterInput
        errorClass="is-invalid"
        inputStaticClass="form-control"
        id={id}
        placeholder={placeholder}
        required
        successClass="is-valid"
        type="text"
        useInput={useInput}
      />
    </BaseInputTemplate>
  );
};

interface TextInputProperties {
  placeholder: string;
  useInput: IUseInput<string>;
}

export default TextInput;
