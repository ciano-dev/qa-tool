import { Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled(Button)`
  border-radius: 20px;
  bottom: 35px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 50%;
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

export default function ButtonComponent({ title }) {
  const navigate = useNavigate();
  return (
    <ButtonContainer
      type="primary"
      onClick={() => navigate(`/${title.replace(/\s+/g, "").toLowerCase()}`)}
    >
      {title}
    </ButtonContainer>
  );
}
