import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./Signup.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 120%;
  background-color: #000;
  opacity: 0.8;
  position: absolute;
  z-index: -1;
  background-image: cover;
`;

export const Test = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/boards/login/background.png");
  position: absolute;
  z-index: -2;
`;

export const Signup = styled.div`
  width: 384px;
  height: 620px;
`;

export const SignupTitle = styled.div`
  margin-bottom: 40px;
  height: 44px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #fff;
`;

export const Information = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const EmailTitle = styled.div`
  margin-bottom: 12px;
  margin-top: 20px;
`;

export const EmailInput = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 16px;
  padding-left: 16px;
  margin-bottom: 12px;
  transition: 0.5s;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
    transition: 0.5s;
  }
`;

export const NameTitle = styled.div`
  margin-bottom: 12px;
  margin-top: 20px;
`;

export const NameInput = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 16px;
  padding-left: 16px;
  margin-bottom: 12px;
  transition: 0.5s;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
    transition: 0.5s;
  }
`;

export const PasswordTitle = styled.div`
  margin-bottom: 12px;
  margin-top: 20px;
`;

export const PasswordInput = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 16px;
  padding-left: 16px;
  margin-bottom: 12px;
  transition: 0.5s;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
    transition: 0.5s;
  }
`;

export const Password2Title = styled.div`
  margin-bottom: 12px;
  margin-top: 20px;
`;

export const Password2Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 16px;
  padding-left: 16px;
  transition: 0.5s;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
    transition: 0.5s;
  }
`;

export const SignupButton = styled.button`
  width: 384px;
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  border: none;
  color: #111;
  font-weight: bold;
  font-size: 16px;
  margin-top: 50px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${(props: ISubmitButtonProps) =>
    props.active ? "#ffd600" : ""};
`;

export const Error = styled.div`
  margin: 10px 0 -15px 0;
  font-size: 14px;
  line-height: 20px;
  color: #ff0000;
`;
