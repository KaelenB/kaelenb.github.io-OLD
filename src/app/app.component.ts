import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <mat-toolbar class="header">
      <a routerLink="">menu</a>&nbsp;
      <a routerLink="tetris">tetris</a>
    </mat-toolbar>
    <div class="body">
      <router-outlet></router-outlet>
    </div>`,
  styles: [
    `
      :host {
        top: 64px;
        position: absolute;
        width: 100%;
        height: calc(100% - 64px);

        .body {
          height: 100%;
        }
        .header {
          top: 0px;
          position: fixed;
          width: 100%;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = "kaelenb.github.io";
}
