import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/libs/components";
import { AboutPage, HomePage, ShowsPage } from "./pages";
import { MatDividerModule } from "@angular/material/divider";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "src/libs/directives/src/lib";
@NgModule({
  declarations: [AboutPage, HomePage, ShowsPage],
  imports: [CommonModule, MatDividerModule, ComponentsModule, DirectivesModule],
  exports: [AboutPage, HomePage, ShowsPage],
})
export class PagesModule {}
