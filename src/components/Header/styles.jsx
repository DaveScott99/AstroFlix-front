import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 999;
  padding: 20px 50px;
  background: transparent;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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