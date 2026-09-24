import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from './components/side-menu-header/side-menu-header';
import { SideMenuOptions } from './components/side-menu-options/side-menu-options';
import { SideMenuHistory } from './components/side-menu-history/side-menu-history';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenuHeader, SideMenuOptions, SideMenuHistory],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
