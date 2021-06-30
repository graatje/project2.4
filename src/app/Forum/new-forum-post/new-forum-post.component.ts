import { Component, OnInit } from '@angular/core';
import { Forumpost } from '../forumpost';
import { FormsModule } from '@angular/forms';
import { ForumThreadComponent } from '../forum-thread/forum-thread.component';
import { ForumThreadService } from '../forum-thread.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-new-forum-post',
  templateUrl: './new-forum-post.component.html',
  styleUrls: ['./new-forum-post.component.css']
})
export class NewForumPostComponent implements OnInit {

  postInfo: Forumpost = {
    id: 0,
    author: 'Author',
    content: ''
  };
  idString: string|null = "";

  constructor(
    private threadService: ForumThreadService,
    private route: ActivatedRoute,
    private authService : AuthService
    ) { }

  ngOnInit(): void {
    //TODO: Get Author name from login details
  }

  onSendClick(): void {
    let authorName = this.authService.getLoggedInUserName();

    const info: Forumpost = {
      id: this.postInfo.id,
      author: authorName !== undefined? authorName : "Author not found",
      content: this.postInfo.content
    };

    this.route.paramMap.subscribe(params => this.idString = params.get("id"));
    let id = Number.parseInt(this.idString? this.idString : "");

    this.threadService.addCommentToThread(id, info);


    this.resetPostInfo();
  }

  resetPostInfo(): void{
    this.postInfo.author = "Author";
    this.postInfo.content="";
  }

}
