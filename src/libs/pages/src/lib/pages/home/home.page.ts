import { BreakpointObserver } from "@angular/cdk/layout";
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { map } from "rxjs";

@Component({
  selector: "home",
  templateUrl: "home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private breakpoints: BreakpointObserver) {}

  @ViewChild("title")
  private titleElement?: ElementRef<HTMLDivElement>;
  titleInView = false;

  @HostListener("window:load", ["$event"])
  @HostListener("window:scroll", ["$event"])
  @HostListener("window:loadeddata", ["$event"])
  scrolledIntoView() {
    if (this.titleElement && !this.titleInView) {
      const rect = this.titleElement.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.titleInView = topShown && bottomShown;
    }
  }

  isMobile$ = this.breakpoints
    .observe("(max-width: 600px)")
    .pipe(map(({ matches }) => matches));

  windowHeight = 0;

  ngOnInit() {
    this.windowHeight = window.innerHeight;
    setTimeout(() => this.scrolledIntoView(), 100);
  }
}
