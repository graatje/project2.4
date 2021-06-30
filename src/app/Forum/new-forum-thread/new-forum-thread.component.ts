import { Component, OnInit } from '@angular/core';
import { Forumthread, Forumpost } from '../forumpost';
import { ForumThreadService } from '../forum-thread.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

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
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {

  }

  submitNewThread(): void{
    if (!this.title.trim() || !this.content.trim()){
      return;
    }
    let authorName = this.authService.getLoggedInUserName();
    const nw : Forumthread = {
      id: 0,
      author: authorName !== undefined? authorName : "Author not found",
      content: this.content,
      title: this.title,
      replies: []
    };

    this.threadService.addThread(nw).subscribe(thread => {
      this.router.navigate([`/studiekamer/prikbord/thread/${thread.id}`])
    });
  }

}

