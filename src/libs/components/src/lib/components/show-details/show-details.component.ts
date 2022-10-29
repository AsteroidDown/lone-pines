import { Component, Input } from "@angular/core";

@Component({
  selector: "show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.scss"],
})
export class ShowDetailsComponent {
  @Input() date = "";
  @Input() title = "";
  @Input() location = "";
  @Input() with = "";
}
