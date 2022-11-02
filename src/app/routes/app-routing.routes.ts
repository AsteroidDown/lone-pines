import { Route, Routes } from "@angular/router";
import { AboutPage, HomePage, ShowsPage } from "src/libs/pages";

const about: Route = {
  path: "about",
  component: AboutPage,
  data: { animation: "About" },
};

const home: Route = {
  path: "",
  component: HomePage,
  data: { animation: "Home" },
};

const shows: Route = {
  path: "shows",
  component: ShowsPage,
  data: { animation: "Shows" },
};

export const appRoutes: Routes = [about, home, shows];
