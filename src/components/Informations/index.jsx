import React from "react";
import { TiStar } from "react-icons/ti";
import {
  Avarage,
  AvarageAndYear,
  Buttons,
  Content,
  Description,
  Genres,
  Header,
  InfoContainer,
  LeftSide,
  MovieLogo,
  RightSide,
  Year,
} from "./styles";
import { GoPlusCircle } from "react-icons/go";

export default function Informations({ movieInfo }) {
  let firstDate = new Date(movieInfo.release_date);
  let genres = [];
  for (let i in movieInfo.genres) {
    genres.push(movieInfo.genres[i].name);
  }

  console.log(movieInfo)

  return (
    <InfoContainer
      style={{
        borderRadius: "5px 5px 0px 0px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,
      }}
    >
      <Header>
        <MovieLogo src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWnxRF-g-wqXUJn1lHpNDcOPH1ezMrJDenDHQ6uNTxLiN4-OP7kSOu8Dxz66Uk_lRJP0FgRFYmOSNjfsBU41LNlvSdurVcxZ1Xjd_HeZgpnd.png?r=604" />

        <Buttons>
          <a href={`/watch/`} className="featured--watchbutton">
            ► Assistir
          </a>
          <GoPlusCircle />
        </Buttons>

      </Header>

      <Content>
        <LeftSide>
          <AvarageAndYear>
            <Avarage>
                {Math.round(movieInfo.vote_average).toFixed(1)} <TiStar />
            </Avarage>

            <Year>{firstDate.getFullYear()}</Year>
          </AvarageAndYear>

          <Description>
            {movieInfo.overview}
          </Description>
        </LeftSide>

        <RightSide>
          <Genres>Gêneros: {genres.join(", ")}</Genres>
        </RightSide>
      </Content>
    </InfoContainer>
  );
}
