import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./components/views/Inicio";
import { Administrador } from "./components/views/Administrador";
import { Error404 } from "./components/views/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrar" element={<Administrador></Administrador>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
