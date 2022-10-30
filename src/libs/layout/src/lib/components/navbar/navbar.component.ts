import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { BreakpointObserver } from "@angular/cdk/layout";
import { map, tap } from "rxjs";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private breakpoints: BreakpointObserver
  ) {}

  currentUrl = "";
  basePage = "";
  expanded = false;
  showMenu = false;

  isMobile$ = this.breakpoints.observe("(max-width: 600px)").pipe(
    map(({ matches }) => matches),
    tap((matches) => {
      if (matches) this.expanded = false;
    })
  );

  toggleMenu() {
    if (this.expanded) {
      this.showMenu = false;
      setTimeout(() => (this.expanded = false), 500);
    } else {
      this.showMenu = true;
      this.expanded = true;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.currentUrl = value.url;
        this.basePage = this.currentUrl.split("/")[1];
      }
    });
  }
}
