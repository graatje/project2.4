import { Component, OnInit } from '@angular/core';
import { ForumThreadService } from '../forum-thread.service';
import { Forumthread } from '../forumpost';

@Component({
  selector: 'app-forum-board',
  templateUrl: './forum-board.component.html',
  styleUrls: ['./forum-board.component.css']
})
export class ForumBoardComponent implements OnInit {

  threads: Forumthread[] = [];

  constructor(private threadService: ForumThreadService) { }

  ngOnInit(): void {
    this.threadService.getThreads().subscribe(threads => {
      this.threads = threads
      console.log(this.threads);
    });
  }

}
