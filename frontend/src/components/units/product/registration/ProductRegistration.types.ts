import { ChangeEvent } from "react";
import { INPUTS_INIT } from "./ProductRegistration.container";

export interface IRegistrationProps {
  isEdit?: boolean;
}

export interface IRegistrationUIProps {
  isOpen: boolean;
  isEdit?: boolean;
  active: boolean;
  zipcode: string;
  address: string;
  inputsErrors: typeof INPUTS_INIT;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFiles: (file: File, index: number) => void;
}

export interface ISubmitButtonProps {
  active: boolean;
}
