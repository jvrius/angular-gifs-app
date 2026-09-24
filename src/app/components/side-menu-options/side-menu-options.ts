import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {}
