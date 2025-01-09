import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GameDeatilsPage from "./pages/GameDeatilsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDeatilsPage /> },
    ],
  },
]);

export default router;
