import { Component } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {SideMenuComponent} from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    SideMenuComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}