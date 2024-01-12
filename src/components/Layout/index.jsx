import React from "react";
import { Main, Wrapper } from "./styles";
import Header from "../Header";

export default function Layout({ children }) {

    return (
        <Wrapper>

            <Header />

            <Main>
                { children }

            </Main>
        </Wrapper>
    );

}