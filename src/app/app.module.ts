import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PagesModule } from "src/libs/pages";
import { LayoutModule } from "src/libs/layout";
import { AppRoutingModule } from "./routes/app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ComponentsModule } from "src/libs/components";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,

    // Material
    MatIconModule,

    // Custom
    LayoutModule,
    PagesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
