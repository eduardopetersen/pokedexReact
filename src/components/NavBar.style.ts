import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

type CustomLinkProps = {
    fontSize: number;
    lineHeight: number;
    color: string;
};

export const CustomLink = styled(Link)<CustomLinkProps>`
    font-weight: 400;
    font-size: ${(props)=> props.fontSize}px;
    line-height: ${(props)=> props.lineHeight}px;
    color: ${(props)=> props.color};
 `;
