import React, { useEffect, useState } from "react";
import { Container, CoverImage } from "./styles";
import Modal from "../Modal";
import Informations from "../Informations";
import Tmdb from "../../util/Tmdb";

export default function Card({ movieInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {

      let chosenInfo = await Tmdb.getMovieInfo(movieInfo.id, 'movie');

      setSelectedData(chosenInfo);
    }
    loadAll();
  }, [movieInfo.id])

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Informations movieInfo={selectedData} />
      </Modal>
      <Container onClick={() => setIsOpen(!isOpen)}>
        <CoverImage
          src={`https://image.tmdb.org/t/p/w300` + movieInfo.poster_path}
          alt={movieInfo.name}
        />
      </Container>
    </>
  );
}
