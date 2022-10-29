import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "youtube-embed",
  templateUrl: "/youtube-embed.component.html",
  styleUrls: ["./youtube-embed.component.scss"],
})
export class YoutubeEmbedComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() videoId: string | null = null;

  youtubeUrl = "https://www.youtube.com/embed/";
  videoUrl: SafeResourceUrl = "";

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youtubeUrl + this.videoId
    );
  }
}
