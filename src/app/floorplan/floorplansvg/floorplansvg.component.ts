import { Component, OnInit } from '@angular/core';
import {ROOMS} from '../rooms';
import {Router} from "@angular/router";
import {Room} from '../room';

@Component({
  selector: 'app-floorplansvg',
  templateUrl: './floorplansvg.component.svg',
  styleUrls: ['./floorplansvg.component.css']
})
export class FloorplansvgComponent {
  rooms = ROOMS;

  constructor(private router: Router) {}

  navigate(room: Room): void {
    let path = room.path ? room.path : room.name.toLowerCase();
    this.router.navigate([path]);
  }
}
