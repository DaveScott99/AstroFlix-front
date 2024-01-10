import { styled } from "styled-components";

export const Container = styled.article`
  width: 350px;
  height: 200px;
  border-radius: 10px;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  user-select: none;
  border-radius: 10px;
  cursor: pointer;
`;
