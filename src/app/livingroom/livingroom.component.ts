import { Component, OnInit } from '@angular/core';
import { GAMES } from '../games';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {

  constructor() { }

  games = GAMES;

  ngOnInit(): void {
  }

}
