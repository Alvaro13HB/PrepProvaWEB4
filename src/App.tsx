import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { RouteSoftware } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <RouteSoftware />
    </BrowserRouter>
  )
}