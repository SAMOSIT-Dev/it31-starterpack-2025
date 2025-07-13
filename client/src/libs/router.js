import { createBrowserRouter } from "react-router";

import HomePage from "@/pages/home/page";
import RootLayout from "@/pages/layout";
import LoginPage from "@/pages/login/page";
import ProfilePage from "@/pages/profile/page";
import TinderGamePage from "@/pages/tinder/page";
import ScheduleLandingPage from "@/pages/course/schedules/page";
import HouseSchedulePage from "@/pages/course/schedules/[house-id]/page";
import { AuthProvider } from "@/contexts/AuthContext";
import RootLayoutWithAuth from "@/layout/RootLayoutWithAuth";
import NotFoundPage from "@/pages/notfound/page";

export const router = createBrowserRouter([
  // 🟢 Routes No AuthProvider
  {
    path: "/",
    Component: RootLayoutWithAuth,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
    ],
  },
  // 🟢 Routes  AuthProvider

  {
    path: "/",
    Component: RootLayoutWithAuth,
    children: [
      { path: "profile", Component: ProfilePage },
      { path: "tinder", Component: TinderGamePage },
      { path: "course/houses", Component: ScheduleLandingPage },
      {
        path: "course/houses/:houseId/schedule",
        Component: HouseSchedulePage,
        // loader: houseScheduleLoader,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage
  }
]);
