import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import NavbarOnlyLayout from "./layouts/NavbarOnlyLayout";
import Home from "./pages/Home";

function RouterPage({ nhost }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <DefaultLayout nhost={nhost}>
            <Home nhost={nhost} />
          </DefaultLayout>
        </Route>
        <Route path="/app">
          <NavbarOnlyLayout nhost={nhost} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
