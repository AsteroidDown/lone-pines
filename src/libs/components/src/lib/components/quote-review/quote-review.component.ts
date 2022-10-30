import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, Input, OnInit } from "@angular/core";
import { map, tap } from "rxjs";

@Component({
  selector: "quote-review",
  templateUrl: "./quote-review.component.html",
  styleUrls: ["./quote-review.component.scss"],
})
export class QuoteReviewComponent implements OnInit {
  constructor(private breakpoints: BreakpointObserver) {}

  @Input() imageSrc = "";
  @Input() imagePosition = "";
  @Input() quote = "";
  @Input() quoter = "";

  flexDirection = "";
  isMobile = false;

  isMobile$ = this.breakpoints.observe("(max-width: 600px)").pipe(
    map(({ matches }) => matches),
    tap((matches) => (this.isMobile = matches))
  );

  getFlexDirection(mobile: boolean | null) {
    if (mobile) {
      if (this.flexDirection === "row-reverse") return "column-reverse";
      else if (this.flexDirection === "row") return "column";
      else return this.flexDirection;
    } else return this.flexDirection;
  }

  ngOnInit() {
    switch (this.imagePosition) {
      case "above":
        this.flexDirection = "column";
        break;
      case "below":
        this.flexDirection = "column-reverse";
        break;
      case "right":
        this.flexDirection = "row-reverse";
        break;
      default:
        this.flexDirection = "row";
    }
  }
}
