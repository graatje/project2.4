import { Component, OnInit } from '@angular/core';
import { Forumthread } from '../forumpost';
import { THREADS } from '../mock-threads';

@Component({
  selector: 'app-forum-board',
  templateUrl: './forum-board.component.html',
  styleUrls: ['./forum-board.component.css']
})
export class ForumBoardComponent implements OnInit {

  threads: Forumthread[] = THREADS;

  constructor() { }

  ngOnInit(): void {
  }

}
