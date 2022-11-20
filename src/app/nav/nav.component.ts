import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  template: `
    <mat-toolbar>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu>
        <button mat-menu-item routerLink="">
          <mat-icon>home</mat-icon>Home
        </button>
        <button mat-menu-item routerLink="tetris">tetris</button>
      </mat-menu>
      kaelenb.github.io
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
