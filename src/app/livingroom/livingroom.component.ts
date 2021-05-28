import { Component, OnInit } from '@angular/core';
import { GAMES } from '../games';
import { Room } from '../room';


@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit, Room {
  
  constructor() { }
  
  id = 2;
  name = "Woonkamer";

  games = GAMES;

  ngOnInit(): void {
  }

}
