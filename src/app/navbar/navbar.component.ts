import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed:boolean;

  constructor() {
    this.isNavbarCollapsed = true;
  }
  

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
