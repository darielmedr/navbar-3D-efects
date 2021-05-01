import { Component, Input, OnInit } from '@angular/core';

export interface LinkItems {
  name: string,
  path: string
}

@Component({
  selector: 'app-nav-bar-ddd',
  templateUrl: './nav-bar-ddd.component.html',
  styleUrls: ['./nav-bar-ddd.component.scss']
})
export class NavBarDDDComponent implements OnInit {

  @Input()
  public linkItems: Array<LinkItems> = [
    { name: 'Home', path: 'home' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'About', path: 'about' },
  ];

  public isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateMenu(): void {
    this.isActive = !this.isActive;
  }
}
