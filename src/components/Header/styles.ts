import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    background-color: ${colors.primary};
    img {
        padding: 1rem;
        height: 5rem;
        transition: all 0.4s;
    }
    img:hover {
        scale: 1.2;
    }
    div {
        height: 5rem;
        display: flex;
        align-items: center;    
        a{
            display: flex;
            align-items: center;
            height: 5rem;
            padding: 0 1rem;    
            text-decoration: none;
            color: ${colors.white};
            font-size: 1rem;
            font-weight: 600;
        }
        a:hover {
            background-color: ${colors.secondary};  
        }
    }
`