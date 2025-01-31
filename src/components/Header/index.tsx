import { SHeader } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <SHeader>
            <a href="/"><img src="src/assets/react.svg" alt="logo" /></a>
            <div>
                <Link to="listar">Listar</Link>
                <Link to="cadastrar">Cadastrar</Link>
            </div>
        </SHeader>
    );
};