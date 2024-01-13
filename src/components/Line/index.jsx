import React, { useState } from "react";
import {
  LineName,
  List,
  ListArea,
  MovieRow,
  NavigationLeft,
  NavigationRight,
} from "./stylex";
import Card from "../Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './styles.css';

export default function Line({ categoryName, movieList }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = movieList.length * 220;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 80;
    }
    setScrollX(x);
  };

  return (
    <MovieRow className="movie-row">
      <LineName>{categoryName}</LineName>

      <NavigationLeft onClick={handleLeftArrow} className="navLeft">
        <FaChevronLeft />
      </NavigationLeft>

      <NavigationRight onClick={handleRightArrow} className="navRight">
        <FaChevronRight />
      </NavigationRight>

      <ListArea
        style={{
          width: movieList.length * 220,
        }}
      >
        <List
          style={{
            marginLeft: scrollX,
          }}
        >
          {movieList.length > 0 &&
            movieList.map((item, key) => <Card key={key} movieInfo={item} />)}
        </List>
      </ListArea>

    </MovieRow>

    
  );
}
