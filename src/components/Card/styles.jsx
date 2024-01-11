import { styled } from "styled-components";

export const Container = styled.article`
  border-radius: 5px;

  display: inline-block;
  transform: scale(.9);

  :hover {
    transform: scale(1.1);
  }

 :hover, :not(:hover) {
    transition: transform 250ms ease;
    transition-delay: .2s;
  }
`;

export const CoverImage = styled.img`
  width: 350px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  user-select: none;
  border-radius: 5px;
  cursor: pointer;
`;
