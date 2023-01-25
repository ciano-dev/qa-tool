import styled from "styled-components";
import backgroundImage from "../assets/backgroundOne.svg";
import { Col, Row, Layout } from "antd";
import { useState } from "react";
import Column from "../components/Column";
import Logo from "../components/Logo";
import Button from "../components/Button";
import SignUpForm from "../sections/auth/signup/SignUpForm";

// import { SignUpForm } from "../sections/auth/login";

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

export default function SignUp() {
  return (
    <LoginWrapper>
      <LoginContainer>
        <Row>
          <Col span={12}>
            <SignUpForm />
          </Col>
          <Col span={12}>
            <Column right={true}>
              <Logo />
              <Button title="Sign In" />
            </Column>
          </Col>
        </Row>
      </LoginContainer>
    </LoginWrapper>
  );
}
