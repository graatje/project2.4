import { Component, OnInit } from '@angular/core';
import { Forumthread, Forumpost } from '../forumpost';
import { ForumThreadService } from '../forum-thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-forum-thread',
  templateUrl: './new-forum-thread.component.html',
  styleUrls: ['./new-forum-thread.component.css']
})
export class NewForumThreadComponent implements OnInit {

  title: string = "";
  content: string = "";

  constructor(
    private threadService: ForumThreadService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  submitNewThread(): void{
    if (!this.title.trim() || !this.content.trim()){
      return;
    }

    const nw : Forumthread = {
      id: 0,
      author: "placeholder name", //TODO: Set the name of the logged-in person here!
      content: this.content,
      title: this.title,
      replies: []
    };

    this.threadService.addThread(nw).subscribe(thread => {
      this.router.navigate([`/studiekamer/prikbord/thread/${thread.id}`])
    });
  }

}

