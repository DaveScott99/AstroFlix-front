import Card from "../../components/Card";
import { Cards, Container, Title } from "./styles";

export default function Hub({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  );
}
