import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Authentication from "./pages/Authentication";
import Currencies, { loader as currenciesLoader } from "./pages/Currencies";
import Home from "./pages/Home";
import CurrencyDetail from "./pages/CurrencyDetail";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import ErrorElement from "./pages/ErrorElement";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />} errorElement={<ErrorElement />}>
          <Route index element={<Home />} />
          <Route path="currencies">
            <Route index element={<Currencies />} loader={currenciesLoader} />
            <Route path=":id" element={<CurrencyDetail />} />
          </Route>
          <Route path="login" element={<Authentication />} />
          <Route path="about" element={<About />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
