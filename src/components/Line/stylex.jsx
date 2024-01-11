import { styled } from "styled-components";

export const MovieRow = styled.div`
    margin-bottom: 20px;
`

export const LineName = styled.h3`
    font-size: 1.6em;
    padding: 0px 50px;
`

export const ListArea = styled.div`
`;

export const List = styled.div`
  transition: all ease 0.8s;
  display: flex;
  overflow-x: hidden;
  padding: 0px 0px 0px 30px;
`

export const NavigationLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 203px;
  background: #000000af;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  svg {
    font-size: 1.5em;
  }

`

export const NavigationRight = styled.div`
  position: absolute;
  width: 40px;
  height: 203px;
  background: #000000af;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  svg {
    font-size: 1.5em;
  }
`