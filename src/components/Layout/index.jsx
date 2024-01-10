import React from "react";
import { Header, Main, Wrapper } from "./styles";

export default function Layout({ children }) {

    return (
        <Wrapper>

            <Header>
                Header
            </Header>

            <Main>
                { children }
            </Main>
            
        </Wrapper>
    );

}