import { styled } from "styled-components";

export const MovieRow = styled.div`
    margin-bottom: 20px;
    overflow-x: hidden;
`

export const LineName = styled.h3`
    font-size: 1.6em;
    padding: 10px 50px;
`

export const ListArea = styled.div`

`;

export const List = styled.div`
  transition: all ease 0.8s;
  display: flex;
  padding: 0px 0px 0px 40px;
  width: 100vw;
`

export const NavigationLeft = styled.div`
  position: absolute;
  width: 50px;
  height: 320px;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;

  svg {
    font-size: 1.5em;
  }

`

export const NavigationRight = styled.div`
  position: absolute;
  width: 50px;
  height: 320px;
  background: rgba(0, 0, 0, 0.6);
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;

  svg {
    font-size: 1.5em;
  }
`