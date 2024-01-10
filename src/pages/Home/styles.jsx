import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Cards = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 30px;
`;