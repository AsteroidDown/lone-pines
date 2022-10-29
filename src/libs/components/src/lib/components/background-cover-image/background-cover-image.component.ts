import { Component, Input } from "@angular/core";

@Component({
  selector: "background-cover-image",
  templateUrl: "./background-cover-image.component.html",
  styleUrls: ["./background-cover-image.component.scss"],
})
export class BackgroundCoverImageComponent {
  @Input() src = "";
}
