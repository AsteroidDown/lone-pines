import { Route, Routes } from "@angular/router";
import { AboutPage, HomePage, ShowsPage } from "src/libs/pages";

const about: Route = {
  path: "about",
  component: AboutPage,
};

const home: Route = {
  path: "",
  component: HomePage,
};

const shows: Route = {
  path: "shows",
  component: ShowsPage,
};

export const appRoutes: Routes = [about, home, shows];
