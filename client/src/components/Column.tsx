import styled from "styled-components";

const ColumnOneContainer = styled.div`
  position: relative;
  height: 75vh;
  background-image: url(https://app.ad-lib.io/static/media/login_bg.cc32e048.svg);
  background-size: cover;
  display: flex;
  width: 100%;
  border-top-right-radius: ${(props) => (props.right ? "10px" : "unset")};
  border-bottom-right-radius: ${(props) => (props.right ? "10px" : "unset")};
  border-top-left-radius: ${(props) => (props.left ? "10px" : "unset")};
  border-bottom-left-radius: ${(props) => (props.left ? "10px" : "unset")}; ;
`;

export default function ColumnComponent({ left, right, children }) {
  return (
    <ColumnOneContainer left={left} right={right}>
      {children}
    </ColumnOneContainer>
  );
}
