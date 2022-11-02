import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "youtube-embed",
  templateUrl: "./youtube-embed.component.html",
  styleUrls: ["./youtube-embed.component.scss"],
})
export class YoutubeEmbedComponent implements OnInit, AfterViewInit {
  constructor(private sanitizer: DomSanitizer) {}

  @ViewChild("title")
  private titleElement?: ElementRef<HTMLDivElement>;
  titleInView = false;

  @ViewChild("videoBox") videoBox: ElementRef | null = null;
  @Input() videoId: string | null = null;

  @HostListener("window:scroll", ["$event"])
  scrolledIntoView() {
    if (this.titleElement && !this.titleInView) {
      const rect = this.titleElement.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.titleInView = topShown && bottomShown;
    }
  }

  youtubeUrl = "https://www.youtube.com/embed/";
  videoUrl: SafeResourceUrl = "";

  videoBoxWidth = 0;
  videoBoxHeight = 0;

  resizeVideoBox() {
    const windowWidth = window.innerWidth;
    const widthPercentage = windowWidth > 600 ? 0.7 : 0.9;
    this.videoBoxWidth = windowWidth * widthPercentage;

    const ratio = 9 / 16;
    this.videoBoxHeight = this.videoBoxWidth * ratio;
  }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youtubeUrl + this.videoId
    );
    this.resizeVideoBox();
  }

  ngAfterViewInit() {
    this.resizeVideoBox();
  }
}
