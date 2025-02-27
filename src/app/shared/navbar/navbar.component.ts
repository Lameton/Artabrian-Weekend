import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'artabrian-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  appRoutes: any[] = [];
  visibleSubMenu: string | null = null;

  ngOnInit(): void {
    this.appRoutes = routes.filter(route => route.path !== '**');
  }

  toggleSubMenu(menu: string): void {
    this.visibleSubMenu = this.visibleSubMenu === menu ? null : menu;
  }
}
