import { Component, OnInit } from '@angular/core';
import {ROOMS} from '../../rooms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-floorplansvg',
  templateUrl: './floorplansvg.component.svg',
  styleUrls: ['./floorplansvg.component.css']
})
export class FloorplansvgComponent {
  rooms = ROOMS;
  svgWidth = 0;
  svgHeight = 0;
  readonly svgStrokeWidth = 3;
  readonly svgFontSize = 18;

  constructor(private router: Router) {
    let largestSvgWidth = 0;
    let largestSvgHeight = 0;

    for (const room of this.rooms) {
      if (room.y + room.height > largestSvgHeight) {
        largestSvgHeight = room.y + room.height;
      }
      if (room.x + room.width > largestSvgWidth) {
        largestSvgWidth = room.x + room.width;
      }
    }

    this.svgWidth = largestSvgWidth + this.svgStrokeWidth;
    this.svgHeight = largestSvgHeight + this.svgStrokeWidth;
  }

  navigateRoom(url: string): void {
    this.router.navigate([url.toLowerCase()]);
  }
}
