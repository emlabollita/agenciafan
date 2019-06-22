import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  {
    path: "walkthrough",
    loadChildren: "./walkthrough/walkthrough.module#WalkthroughPageModule"
  },
  { path: "news", loadChildren: "./news/news.module#NewsPageModule" },
  {
    path: "getting-started",
    loadChildren:
      "./getting-started/getting-started.module#GettingStartedPageModule"
  },
  { path: "auth/login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "auth/signup",
    loadChildren: "./signup/signup.module#SignupPageModule"
  },
  { path: "quizz", loadChildren: "./quizz/quizz.module#QuizzPageModule" },
  {
    path: "gallery-of-fame",
    loadChildren:
      "./gallery-of-fame/gallery-of-fame.module#GalleryOfFamePageModule"
  },
  {
    path: "results",
    loadChildren: "./results/results.module#ResultsPageModule"
  },
  {
    path: "auth/forgot-password",
    loadChildren:
      "./forgot-password/forgot-password.module#ForgotPasswordPageModule"
  },
  { path: "app", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "contact-card",
    loadChildren: "./contact-card/contact-card.module#ContactCardPageModule"
  },
  {
    path: "forms-and-validations",
    loadChildren:
      "./forms/validations/forms-validations.module#FormsValidationsPageModule"
  },
  {
    path: "forms-filters",
    loadChildren: "./forms/filters/forms-filters.module#FormsFiltersPageModule"
  },
  {
    path: "page-not-found",
    loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule"
  },
  {
    path: "showcase",
    loadChildren: "./showcase/showcase.module#ShowcasePageModule"
  },
  { path: "**", redirectTo: "page-not-found" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
