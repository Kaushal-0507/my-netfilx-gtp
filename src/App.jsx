import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Browser from "./components/Browser";
import { Provider } from "react-redux";
import Store from "./utils/appStore";

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
