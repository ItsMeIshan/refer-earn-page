import "./init";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReferScreen from "./components/Refer&EarnScreen.jsx";
import FriendsReffered from "./components/FriendsRefferedScreen.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ReferScreen />,
      },
      {
        path: "/friendsReferred",
        element: <FriendsReffered />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
