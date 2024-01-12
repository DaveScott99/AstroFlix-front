import React from "react";
import { Container, CoverImage } from "./styles";

export default function Card({ movieInfo }) {
  return (
    <Container>
      <CoverImage
        src={`https://image.tmdb.org/t/p/w300` + movieInfo.poster_path}
        alt={movieInfo.name}
      />
    </Container>
  );
}
