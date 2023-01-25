import { Layout, Form, Button, Input, Checkbox, notification } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useState } from "react";
import { useAppContext } from "../../../contexts/appContext";
import apiService from "../../../api/apiService";

const SignInFormWrapper = styled(Layout)`
  background: transparent;
  width: 50%;
  height: auto;
  margin: 25vh auto;
  padding: 10px;
`;

const SignInFormInputIconMailOutlined = styled(MailOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignInFormInputIconLockOutlined = styled(LockOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignInFormInputIconEyeOutlined = styled(EyeOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignInFormInputIconEyeInvisibleOutlined = styled(EyeInvisibleOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignInFormInputUsernamePassword = styled(Input)`
  &.ant-input-affix-wrapper {
    border-color: transparent;
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: transparent !important;
  }
`;

const SignInFormCheckbox = styled(Checkbox)`
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

const SignInFormButton = styled(Button)`
  width: 100%;
  border-radius: 20px;
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

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { user, setCurrentUser } = useAppContext();

  const [api, contextHolder] = notification.useNotification();

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const onFinish = async (values) => {
    try {
      const request = await apiService.post("/signin", values);
      if (request.data.success)
        api["success"]({
          message: "Sign In Successfully",
          description: "You are successfully sign in!",
        });
    } catch (error) {
      api["error"]({
        message: "Sign In Failed",
        description: error.response.data.error,
      });
    }
  };

  return (
    <SignInFormWrapper>
      {contextHolder}
      <Form
        name="Sign In"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              type: "email",
              message: "The input is not valid Email!",
            },
          ]}
        >
          <SignInFormInputUsernamePassword
            prefix={<SignInFormInputIconMailOutlined />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <SignInFormInputUsernamePassword
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            prefix={<SignInFormInputIconLockOutlined />}
            suffix={
              showPassword ? (
                <SignInFormInputIconEyeOutlined onClick={handleShowPassword} />
              ) : (
                <SignInFormInputIconEyeInvisibleOutlined
                  onClick={handleShowPassword}
                />
              )
            }
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <SignInFormCheckbox>Remember me</SignInFormCheckbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <SignInFormButton type="primary" htmlType="submit">
            Sign In
          </SignInFormButton>
        </Form.Item>
      </Form>
    </SignInFormWrapper>
  );
}
