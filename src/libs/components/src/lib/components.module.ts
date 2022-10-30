import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DirectivesModule } from "src/libs/directives/src/lib";
import {
  BackgroundCoverImageComponent,
  QuoteReviewComponent,
  ShowDetailsComponent,
  YoutubeEmbedComponent,
} from "./components";

@NgModule({
  declarations: [
    YoutubeEmbedComponent,
    BackgroundCoverImageComponent,
    ShowDetailsComponent,
    QuoteReviewComponent,
  ],
  imports: [CommonModule, DirectivesModule],
  exports: [
    YoutubeEmbedComponent,
    BackgroundCoverImageComponent,
    ShowDetailsComponent,
    QuoteReviewComponent,
  ],
})
export class ComponentsModule {}
