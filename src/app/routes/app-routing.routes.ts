import { Route, Routes } from "@angular/router";
import { AboutPage, HomePage, ShowsPage, AlmaSoundPage } from "src/libs/pages";

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

const alma_sound: Route = {
  path: "alma",
  component: AlmaSoundPage,
  data: { animation: "Alma" },
};

export const appRoutes: Routes = [about, home, shows, alma_sound];
