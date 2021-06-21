import { Component, OnInit } from '@angular/core';
import {ROOMS} from '../rooms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-floorplansvg',
  templateUrl: './floorplansvg.component.svg',
  styleUrls: ['./floorplansvg.component.css']
})
export class FloorplansvgComponent {
  rooms = ROOMS;

  constructor(private router: Router) {}

  navigate(name: string): void {
    this.router.navigate([name.toLowerCase()]);
  }
}
