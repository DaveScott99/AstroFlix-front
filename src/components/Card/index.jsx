import React from "react";
import { Container, CoverImage } from "./styles";

export default function Card() {
  return (
    <Container>
      <CoverImage
        src="https://i0.wp.com/jornal.usp.br/wp-content/uploads/2023/04/Interstellar_resized.png?fit=800%2C420&ssl=1"
        alt="Cover image"
      />
    </Container>
  );
}
