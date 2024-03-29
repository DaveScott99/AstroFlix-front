import { styled } from "styled-components";

export const FeaturedContainer = styled.section`
  height: 100vh;
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  padding-bottom: 150px;
  padding-top: 50px;
`;

export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;
  max-width: 60%;
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const FeaturedPoints = styled.div`
  color: #46d369;
  margin-right: 15px;
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const FeaturedYear = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedSeasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const FeaturedButtons = styled.div`
  margin-top: 15px;


  .featured--watchbutton,
  .featured--infobutton {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
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

  .featured--infobutton {
    background-color: #333;
    color: #fff;
  }

  .featured--watchbutton:hover,
  .featured--infobutton:hover {
    opacity: 0.7;
  }

`;

export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
`;
