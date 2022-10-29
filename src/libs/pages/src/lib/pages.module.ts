import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/libs/components";
import { AboutPage, HomePage } from "./pages";

@NgModule({
  declarations: [AboutPage, HomePage],
  imports: [ComponentsModule],
  exports: [AboutPage, HomePage],
})
export class PagesModule {}
