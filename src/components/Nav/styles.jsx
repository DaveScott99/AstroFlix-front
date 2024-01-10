import { styled } from "styled-components";

export const MenuContainer = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.texts};
        font-weight: 500;
        font-size: .9em;
    }
`

export  const MenuItem = styled.li`
    text-decoration: none;
    margin-right: 10px;
`