import styled from "styled-components";
import {Link} from "react-scroll";

export const Button = styled(Link)`
    border-radius: 6px;
    background: rgb(57, 148, 255);
    white-space: nowrap;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    height: 56px;
    padding-right: 40px;
    padding-left: 40px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(0, 118, 255);
        text-decoration: none;
        color: #fff;
    }
`;