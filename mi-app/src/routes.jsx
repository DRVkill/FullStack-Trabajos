import { createBrowserRouter } from "react-router-dom";
import Fomulario from "./pages/Formulario"
import App from "./App";

export const routes = createBrowserRouter(
    [
        {
            path : "/",
            element: <App/>
        },
        {
            path:"/Formulario",
            element:<Fomulario/>
        }
    ]
)

