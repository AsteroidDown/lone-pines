import { Component, Input, OnInit } from "@angular/core";
import {
  IconDefinition,
  faEnvelope,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faSpotify,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "icon-link",
  templateUrl: "./icon-link.component.html",
  styleUrls: ["./icon-link.component.scss"],
})
export class IconLinkComponent implements OnInit {
  @Input() icon: string | null = null;
  @Input() link: string | null = null;
  color: string | null = null;

  hovered = false;
  faIcon!: IconDefinition;
  faDefault = faCoffee;

  ngOnInit() {
    switch (this.icon) {
      case "instagram":
        this.faIcon = faInstagram;
        this.color = "#E1306C";
        break;
      case "email":
        this.faIcon = faEnvelope;
        this.color = "#FF0000";
        break;
      case "youtube":
        this.faIcon = faYoutube;
        this.color = "#FF0000";
        break;
      case "spotify":
        this.faIcon = faSpotify;
        this.color = "#1DB954";
        break;
      case "facebook":
        this.faIcon = faFacebook;
        this.color = "#3b5998";
        break;
      default:
        this.faIcon = faCoffee;
        this.color = "#0000FF";
    }

    this.faIcon.icon[0] = 350;
    this.faIcon.icon[1] = 350;
  }
}
