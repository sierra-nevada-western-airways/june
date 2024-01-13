import { ReactNode } from "react";
import { IUseInput } from "../../hooks/use-input/IUseInput";
import { InputType } from "../../hooks/use-input/InputType";
import { BaseLabel } from "./BaseLabel";
import { BaseValidationMessage } from "./BaseValidationMessage";

export const BaseInputTemplate: React.FC<BaseInputTemplateProperties> = ({
  errorClass,
  id,
  innerWrapperClass,
  labelClass,
  labelText,
  outerWrapperClass,
  successClass,
  useInput,
  validationMessageClass,
  children,
}) => {
  return (
    <div className={outerWrapperClass}>
      <div>
        <BaseLabel labelClass={labelClass} id={id} text={labelText} />
      </div>
      <div className={innerWrapperClass}>{children}</div>
      <BaseValidationMessage
        errorClass={errorClass}
        successClass={successClass}
        useInput={useInput}
        validationMessageClass={validationMessageClass}
      />
    </div>
  );
};

interface BaseInputTemplateProperties {
  children: ReactNode;
  errorClass: string;
  id: string;
  innerWrapperClass: string;
  labelClass: string;
  labelText: string;
  outerWrapperClass: string;
  successClass: string;
  useInput: IUseInput<InputType>;
  validationMessageClass: string;
}
