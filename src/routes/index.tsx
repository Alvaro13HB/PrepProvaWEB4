import { Routes, Route } from "react-router-dom";
import { PageHome, PageLayout, PageCadastrar, PageProduto } from "../pages";

export function RouteSoftware() {
    return(
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="/cadastrar" element={<PageCadastrar />} />    
                <Route path="/listar" element={<PageProduto />} />
            </Route>
        </Routes>
    )
}