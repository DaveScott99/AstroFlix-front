import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;
  padding: 20px 10px;
  background: ${(props) => props.theme.colors.background_color};
  color: ${(props) => props.theme.colors.texts};

  border: 1px solid red;

  a {
    text-decoration: none;
  }
`;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.theme.colors.background_color};
  color: ${(props) => props.theme.colors.texts};
  padding: 20px;
  border: 1px solid red;
`;
