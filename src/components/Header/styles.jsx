import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  padding: 20px 50px;
  background: ${(props) => props.theme.colors.background_color};
`;

export const Brand = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 30px;
  font-size: 1.3em;
  cursor: pointer;
`

export const SideRight = styled.div`
  display: flex;
  align-items: center;
`

export const SideLeft = styled.div`
  display: flex;
`