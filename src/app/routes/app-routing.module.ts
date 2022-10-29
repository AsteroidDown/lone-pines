import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { appRoutes } from "./app-routing.routes";

const routes: Routes = appRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
