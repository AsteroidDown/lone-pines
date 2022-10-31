import { BreakpointObserver } from "@angular/cdk/layout";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { map, tap } from "rxjs";

@Component({
  selector: "quote-review",
  templateUrl: "./quote-review.component.html",
  styleUrls: ["./quote-review.component.scss"],
})
export class QuoteReviewComponent implements OnInit {
  constructor(private breakpoints: BreakpointObserver) {}

  @ViewChild("image")
  private imageElement?: ElementRef<HTMLDivElement>;
  imageInView = false;

  @Input() imageSrc = "";
  @Input() imagePosition = "";
  @Input() quote = "";
  @Input() quoter = "";

  flexDirection = "";
  isMobile = false;

  @HostListener("window:scroll", ["$event"])
  scrolledIntoView() {
    if (this.imageElement && !this.imageInView) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.imageInView = topShown && bottomShown;
    }
  }

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
