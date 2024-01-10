import React from "react";
import { MenuContainer, MenuItem } from "./styles";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <MenuContainer>
      <MenuItem>
        <Link to="/">
            Início
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/movies">
            Filmes
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/series">
            Series
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/my-list">
            Minha lista
        </Link>
      </MenuItem>
    </MenuContainer>
  );
}
