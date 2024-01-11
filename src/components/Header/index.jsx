import React from "react";
import { Brand, Container, SideLeft, SideRight } from "./styles";
import Nav from "../Nav";
import Search from "../Search";
import AccountButton from "../AccountButton";

export default function Header() {
  return (
    <Container>
      <SideLeft>
        <Brand>ASTROFLIX</Brand>
        <Nav />
      </SideLeft>

      <SideRight>
        <Search />
        <AccountButton />
      </SideRight>
    </Container>
  );
}
