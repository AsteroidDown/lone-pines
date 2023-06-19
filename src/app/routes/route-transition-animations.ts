import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const routeTransitionAnimations = trigger("routeAnimations", [
  transition("Home => Shows, Home => About, Home => Alma, Shows => About, Shows => Alma, About => Alma", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
      }),
    ]),
    query(":enter", [style({ right: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("0.5s ease-out", style({ right: "100%" }))]),
      query(":enter", [animate("0.5s ease-out", style({ right: "0%" }))]),
    ]),
    query(":enter", animateChild()),
  ]),
  transition("Alma => About, Alma => Shows, Alma => Home, About => Shows, About => Home, Shows => Home", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }),
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("0.5s ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("0.5s ease-out", style({ left: "0%" }))]),
    ]),
    query(":enter", animateChild()),
  ]),
]);
