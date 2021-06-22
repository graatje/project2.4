import { Component, OnInit } from '@angular/core';
import { ROOMS } from './rooms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css']
})

export class FloorplanComponent implements OnInit {

  rooms = ROOMS;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

}
