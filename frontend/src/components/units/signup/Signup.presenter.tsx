import {
  Background,
  Test,
  Wrapper,
  Signup,
  Error,
  SignupTitle,
  Information,
  EmailTitle,
  EmailInput,
  NameTitle,
  NameInput,
  PasswordTitle,
  PasswordInput,
  Password2Title,
  Password2Input,
  SignupButton,
} from "./Signup.styles";
import { useState } from "react";
import { INPUTS_INIT } from "./Signup.container";

interface ILoginUIProps {
  onClickUpdate: MouseEventHandler<HTMLButtonElement> | undefined;
  active: boolean;
  inputsErrors: typeof INPUTS_INIT;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupUI(props) {
  const { isEdit, setIsEdit } = useState("");
  return (
    <>
      <Background></Background>
      <Test></Test>
      <Wrapper>
        <Signup>
          <SignupTitle>회원가입</SignupTitle>
          <Information>
            <EmailTitle>이메일</EmailTitle>
            <EmailInput
              placeholder="이메일을 입력해주세요."
              type="text"
              name="email"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.email}</Error>
            <NameTitle>이름</NameTitle>
            <NameInput
              placeholder="이름을 입력해주세요."
              type="text"
              name="name"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.name}</Error>
            <PasswordTitle>비밀번호</PasswordTitle>
            <PasswordInput
              placeholder="비밀번호를 입력해주세요."
              type="text"
              name="password"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.password}</Error>
            <Password2Title>비밀번호 확인</Password2Title>
            <Password2Input
              placeholder="비밀번호를 입력해주세요."
              type="text"
              name="repassword"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.repassword}</Error>
          </Information>
          <SignupButton
            onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            회원가입하기
            {isEdit ? "회원가입하기" : ""}
          </SignupButton>
        </Signup>
      </Wrapper>
    </>
  );
}
