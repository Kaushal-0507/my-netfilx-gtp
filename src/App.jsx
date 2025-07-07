import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Browser from "./components/Browser";
import { Provider } from "react-redux";
import Store from "./utils/appStore";
import Watch from "./components/Watch";
import Actor from "./components/Actor";
import GPTSearchPage from "./components/GPTSearchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/browser",
          element: <Browser />,
        },
        {
          path: "/gpt",
          element: <GPTSearchPage />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },

        {
          path: "/actor",
          element: <Actor />,
        },
      ],
    },
  ]);
  return (
    <Provider store={Store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
