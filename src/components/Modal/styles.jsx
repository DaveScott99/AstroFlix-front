import { styled } from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.72);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Container = styled.div`
    background: ${props => props.theme.colors.background_modal};
    color: ${props => props.theme.colors.texts};
    border-radius: 5px;

    width: 100%;
    
    max-width: 920px;
    min-width: 300px;

    height: 100%;
    max-height: 930px;

    position: relative;

`;

export const Title = styled.h2`
    font-size: 1.2em;
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .close--button {
        cursor: pointer;
        color: ${(props) => props.theme.colors.texts};
        background-color: ${(props) => props.theme.colors.background_color};
        font-size: 2.5em;
        position: absolute;
        top: 0;
        right: 20px;
        margin-top: 20px;
        border-radius: 50%;
        padding: 7px;
    }
`;
