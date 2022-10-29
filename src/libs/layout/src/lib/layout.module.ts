import { NgModule } from "@angular/core";
import {
  IconLinkComponent,
  NavbarComponent,
  PageLinkComponent,
} from "./components";
import { LayoutComponent } from "./pages";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    PageLinkComponent,
    IconLinkComponent,
  ],
  imports: [FontAwesomeModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
