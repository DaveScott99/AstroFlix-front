import React from "react";
import { Body, Container, Header, Overlay, Title } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
  children,
  isOpen,
  setIsOpen
}) {

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "modal") {
        setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {isOpen ? (
        <Overlay id="modal" onClick={handleOutsideClick}>
          <Container>
            

            <Body>
                
                {children}
                
                <AiOutlineClose onClick={handleCloseModal} className="close--button" />

            </Body>

          </Container>
        </Overlay>
      ) : null}
    </>
  );
}
