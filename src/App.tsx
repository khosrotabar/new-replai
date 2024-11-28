import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewChat from "./pages/NewChat";
import DashBoard from "./pages/DashBoard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/new-chat",
      element: <NewChat />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
