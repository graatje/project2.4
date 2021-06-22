import { Component, OnInit } from '@angular/core';
import { Forumthread, Forumpost } from '../forumpost';
import { ForumThreadService } from '../forum-thread.service';

@Component({
  selector: 'app-new-forum-thread',
  templateUrl: './new-forum-thread.component.html',
  styleUrls: ['./new-forum-thread.component.css']
})
export class NewForumThreadComponent implements OnInit {

  title: string = "";
  content: string = "";

  threads: Forumthread[] = [];

  constructor(/*private threadService: ForumThreadService*/) { }

  ngOnInit(): void {

  }

  submitNewThread(): void{
    if (!this.title.trim() || !this.content.trim()){
      return;
    }

    const nw : Forumthread = {
      id: 0,
      author: "placeholder name",
      content: this.content,
      title: this.title,
      replies: []
    };

    //this.threadService.addThread(nw).subscribe(thread => this.threads.push(thread));
  }

}

