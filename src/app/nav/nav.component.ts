import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  template: `
    <mat-toolbar>
      <a routerLink="">menu</a>&nbsp;
      <a routerLink="tetris">tetris</a>
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
          top: 0px;
          position: fixed;
          width: 100%;
      }
    `,
  ],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
