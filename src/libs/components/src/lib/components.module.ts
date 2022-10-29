import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  BackgroundCoverImageComponent,
  ShowDetailsComponent,
  YoutubeEmbedComponent,
} from "./components";

@NgModule({
  declarations: [
    YoutubeEmbedComponent,
    BackgroundCoverImageComponent,
    ShowDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [
    YoutubeEmbedComponent,
    BackgroundCoverImageComponent,
    ShowDetailsComponent,
  ],
})
export class ComponentsModule {}
