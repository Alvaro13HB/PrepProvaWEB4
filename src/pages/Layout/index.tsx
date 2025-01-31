import { Outlet } from "react-router-dom";
import { SMain } from "./styles";
import { ComponentHeader } from "../../components";

export const Layout = () => {
    return(
        <>
            <ComponentHeader />
            <SMain>
                <Outlet />
            </SMain>
        </>
    )
}