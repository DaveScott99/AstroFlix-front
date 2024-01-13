import { styled } from "styled-components";

export const InfoContainer = styled.section`
    width: 100%;
    height: 600px;
`;

export const Header = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #181818 10%, transparent 90%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 50px;
`;

export const MovieLogo = styled.img`
    width: 400px;
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    user-select: none;
`

export const Content = styled.div`
    padding: 0px 50px;
    display: flex;
    margin-top: -40px;
    background: linear-gradient(to bottom, #181818 10%, transparent 90%);
`

export const LeftSide = styled.div`
    width: 63%;
`

export const RightSide = styled.div`
    width: 37%;
`

export const MovieName = styled.div`
  font-size: 60px;
  font-weight: bold;
  max-width: 60%;
`;

export const AvarageAndYear = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Avarage = styled.div`
  color: #46d369;
  margin-right: 15px;
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const Year = styled.div`
  display: inline-block;
  margin-right: 15px;
  font-size: .9em;
  font-weight: 500;
  color: #c9c9c9a0;
`;

export const FeaturedSeasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Description = styled.div`
  margin-top: 15px;
  font-size: 1em;
  font-weight: 500;
  color: ${(props) => props.theme.colors.texts};
`;

export const Buttons = styled.div`

  margin-bottom: 70px;
  display: flex;
  align-items: center;

  svg {
    font-size: 3em;
  }

  .featured--watchbutton {
    font-size: 1.5em;
    font-weight: bold;
    padding: 5px 45px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .featured--watchbutton {
    background-color: #fff;
    color: #000;
  }

  .featured--watchbutton:hover {
    opacity: 0.7;
  }

`;

export const Genres = styled.div`
  font-size: 1em;
  font-weight: 500;
  color: #d4d4d4;
`;
