import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../rooms';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css']
})

export class FloorplanComponent implements OnInit {
  
  rooms = ROOMS;

  constructor() { }

  ngOnInit(): void {
  }

}