import React from "react";
import { Container, Title } from "./styles";
import Line from "../../components/Line";

export default function Hub({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Line  categoryName="Populares na AstroFlix"/>
      <Line  categoryName="Suspense e ficção científica"/>
    </Container>
  );
}
