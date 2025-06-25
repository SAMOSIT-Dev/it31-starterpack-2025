import { createBrowserRouter } from "react-router";

import HomePage from "@/pages/home/page";
import RootLayout from "@/pages/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
