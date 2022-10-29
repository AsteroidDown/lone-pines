import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  currentUrl = "";
  basePage = "";

  ngOnInit() {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.currentUrl = value.url;
        this.basePage = this.currentUrl.split("/")[1];
      }
    });
  }
}
