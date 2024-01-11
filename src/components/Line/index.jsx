import React, { useState } from "react";
import { LineName, List, ListArea, MovieRow, NavigationLeft, NavigationRight } from "./stylex";
import Card from "../Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Line({ categoryName }) {

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth);
    let listW = 10 * 350;

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }

    setScrollX(x);
  }

  return (
    <MovieRow>
      <LineName>{ categoryName }</LineName>

      <NavigationLeft onClick={handleLeftArrow}>
        <FaChevronLeft />
      </NavigationLeft> 

      <NavigationRight onClick={handleRightArrow}>
        <FaChevronRight />
      </NavigationRight>

      <ListArea style={{
        width: 10 * 400
      }}>
        <List style={{
          marginLeft: scrollX
        }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
      </ListArea>
    </MovieRow>
  );
}
