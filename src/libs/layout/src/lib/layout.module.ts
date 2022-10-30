import { NgModule } from "@angular/core";
import {
  IconLinkComponent,
  NavbarComponent,
  PageLinkComponent,
} from "./components";
import { LayoutComponent } from "./pages";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DirectivesModule } from "src/libs/directives/src/lib";
import { NgPipesModule } from "ngx-pipes";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    PageLinkComponent,
    IconLinkComponent,
  ],
  imports: [
    CommonModule,
    NgPipesModule,
    FontAwesomeModule,
    MatIconModule,
    DirectivesModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
