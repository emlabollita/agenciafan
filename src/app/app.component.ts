import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: [
    "./side-menu/styles/side-menu.scss",
    "./side-menu/styles/side-menu.shell.scss",
    "./side-menu/styles/side-menu.responsive.scss"
  ]
})
export class AppComponent {
  appPages = [
    {
      title: "Novedades",
      url: "/app/categories",
      icon: "./assets/sample-icons/side-menu/categories.svg"
    },
    {
      title: "Resultados",
      url: "/results",
      icon: "./assets/sample-icons/side-menu/profile.svg"
    },
    {
      title: "Salón de la fama",
      url: "/gallery-of-fame",
      icon: "./assets/sample-icons/side-menu/profile.svg"
    },
    {
      title: "Trivias",
      url: "/quizz",
      icon: "./assets/sample-icons/side-menu/profile.svg"
    },
    {
      title: "Perfil",
      url: "/app/user",
      icon: "./assets/sample-icons/side-menu/profile.svg"
    }
  ];

  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await SplashScreen.hide();
    } catch (err) {
      console.log("This is normal in a browser", err);
    }
  }
}
