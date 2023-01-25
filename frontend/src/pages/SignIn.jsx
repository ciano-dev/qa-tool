import styled from "styled-components";
import backgroundImage from "../assets/backgroundOne.svg";
import { Col, Row, Layout, Form, Input, Checkbox } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Column from "../components/Column";
import Logo from "../components/Logo";
import Button from "../components/Button";
import SignInForm from "../sections/auth/signin/SignInForm";

// import { LoginForm } from "../sections/auth/login";

const LoginWrapper = styled(Layout)`
  background-image: url(${backgroundImage});
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  align-self: center;
  width: 85%;
  height: 75vh;
`;

const LoginFormInputUsername = styled(Input)`
  &.ant-input:hover,
  :focus,
  :focus-visible {
    border-color: transparent !important;
  }
`;

const LoginFormInputPassword = styled(Input)`
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: transparent !important;
  }
  &.ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper:focus-visible {
    border-color: transparent !important;
  }
`;

const LoginFormCheckbox = styled(Checkbox)`
  color: #fff;
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner {
    border-color: transparent !important;
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: transparent !important;
  }
  &.ant-checkbox:hover,
  .ant-checkbox:hover:focus,
  .ant-checkbox:focus-visible,
  .ant-checkbox-checked:after,
  .ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
    border-color: transparent !important;
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    background: linear-gradient(
      90deg,
      rgba(203, 43, 134, 1) 0%,
      rgba(155, 30, 124, 1) 35%,
      rgba(99, 16, 105, 1) 100%
    );
    border-color: transparent;
  }
`;

const LoginFormButton = styled(Button)`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(203, 43, 134, 1) 0%,
    rgba(155, 30, 124, 1) 35%,
    rgba(99, 16, 105, 1) 100%
  );
  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none !important;
    outline-offset: unset !important;
    transition: none !important;
  }
`;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <Row>
          <Col span={12}>
            <Column left={true}>
              <Logo />
              <Button title="Sign Up" />
            </Column>
          </Col>
          <Col span={12}>
            <SignInForm />
          </Col>
        </Row>
      </LoginContainer>
    </LoginWrapper>
  );
}
