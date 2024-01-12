import React, { useEffect, useState } from "react";
import { Container, Lines, Title } from "./styles";
import Line from "../../components/Line";
import Tmdb from "../../util/Tmdb";
import Featured from "../../components/Featured";

export default function Hub({ title }) {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'action');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');

      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  return (
    <Container>

      {featuredData &&
        <Featured item={featuredData} />
      }

      <Title>{title}</Title>

      <Lines>
        {movieList.map((item, key) => (
            <Line key={key} categoryName={item.title} movieList={item.items.results}/>
        ))}
      </Lines>
      
    </Container>
  );
}
