import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "page-link",
  templateUrl: "./page-link.component.html",
  styleUrls: ["./page-link.component.scss"],
})
export class PageLinkComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() selected = false;
  @Input() routeTo: string | null = null;

  goToPage() {
    if (this.routeTo || this.routeTo === "") {
      this.router.navigate([this.routeTo], { relativeTo: this.route });
    } else {
      console.log("No route specified");
    }
  }
}
