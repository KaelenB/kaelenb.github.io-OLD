import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<app-nav></app-nav>
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
      }
    `,
  ],
})
export class AppComponent {
  title = "kaelenb.github.io";
}
