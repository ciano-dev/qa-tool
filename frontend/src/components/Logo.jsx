import styled from "styled-components";
import logo from "../assets/smartly.svg";

const LogoContainer = styled.div`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${logo}), none;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 81.07px;
  width: 254.84px;
  top: 25%;
`;

export default function LogoComponent() {
  return <LogoContainer />;
}
