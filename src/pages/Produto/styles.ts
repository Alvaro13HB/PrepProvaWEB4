import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SSection = styled.section`
    table {
        margin-top: 2rem;
    }
    table, tr, td, th {
        border: 1px solid ${colors.black};
        border-collapse: collapse;
        padding: 1rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`