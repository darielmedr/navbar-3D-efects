import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isMenuActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public updateMenuStatus(menuStatus: boolean): void {
    this.isMenuActive = menuStatus;
  }
}
