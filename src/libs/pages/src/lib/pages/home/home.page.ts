import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";

@Component({
  selector: "home",
  templateUrl: "home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private breakpoints: BreakpointObserver) {}

  isMobile$ = this.breakpoints
    .observe("(max-width: 600px)")
    .pipe(map(({ matches }) => matches));

  windowHeight = 0;

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }
}
