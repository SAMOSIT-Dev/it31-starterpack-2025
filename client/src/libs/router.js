import { createBrowserRouter } from "react-router";

import HomePage from "@/pages/home/page";
import RootLayout from "@/pages/layout";
import LoginPage from "@/pages/login/page";
import ProfilePage from "@/pages/profile/page";
import TinderGamePage from "@/pages/tinder/page";
import ScheduleLandingPage from "@/pages/course/schedules/page";
import HouseSchedulePage from "@/pages/course/schedules/[house-id]/page";
import { houseScheduleLoader } from "@/pages/course/schedules/[house-id]/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/profile",
        Component: ProfilePage,
      },
      {
        path: "/tinder",
        Component: TinderGamePage,
      },
      {
        path: "/course/schedules",
        Component: ScheduleLandingPage,
      },
      {
        path: "/course/schedule/:houseId",
        Component: HouseSchedulePage,
        loader: houseScheduleLoader,
      },
    ],
  },
]);