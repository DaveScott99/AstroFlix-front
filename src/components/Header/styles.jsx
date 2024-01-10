import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.background_color};
  
  border: 1px solid red;
`;
