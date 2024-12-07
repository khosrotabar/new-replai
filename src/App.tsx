import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NewChat from "./pages/NewChat";
import DashBoard from "./pages/DashBoard";
import Chat from "./pages/Chat";

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
    {
      path: "/chat/*",
      element: <Chat />,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
