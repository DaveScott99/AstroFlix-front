import React from "react";
import {
  FeaturedButtons,
  FeaturedContainer,
  FeaturedDescription,
  FeaturedGenres,
  FeaturedHorizontal,
  FeaturedInfo,
  FeaturedName,
  FeaturedPoints,
  FeaturedVertical,
  FeaturedYear,
} from "./styles";
import { TiStar } from "react-icons/ti";

export default function Featured({ item }) {
  console.log(item);

  let firstDate = new Date(item.release_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <FeaturedContainer
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeaturedVertical>
        <FeaturedHorizontal>
          <FeaturedName>{item.title}</FeaturedName>

          <FeaturedInfo>
            <FeaturedPoints>
              {Math.round(item.vote_average).toFixed(1)} <TiStar />
            </FeaturedPoints>

            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
          </FeaturedInfo>

          <FeaturedDescription>
            <p>{item.overview}</p>
          </FeaturedDescription>

          <FeaturedButtons>
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ► Assistir
            </a>
            <a href={`/info/${item.id}`} className="featured--infobutton">
              Mais informações
            </a>
          </FeaturedButtons>

          <FeaturedGenres>
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </FeaturedGenres>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </FeaturedContainer>
  );
}
