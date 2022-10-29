import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/libs/components";
import { AboutPage, HomePage, ShowsPage } from "./pages";
import { MatDividerModule } from "@angular/material/divider";
@NgModule({
  declarations: [AboutPage, HomePage, ShowsPage],
  imports: [ComponentsModule, MatDividerModule],
  exports: [AboutPage, HomePage, ShowsPage],
})
export class PagesModule {}
