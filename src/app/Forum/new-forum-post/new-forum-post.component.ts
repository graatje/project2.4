import { Component, OnInit } from '@angular/core';
import { Forumpost } from '../forumpost';
import { FormsModule } from '@angular/forms';
import { ForumThreadComponent } from '../forum-thread/forum-thread.component';
import { ForumThreadService } from '../forum-thread.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //TODO: Get Author name from login details
  }

  onSendClick(): void {
    const info: Forumpost = {
      id: this.postInfo.id,
      author: this.postInfo.author,
      content: this.postInfo.content
    };

    this.route.paramMap.subscribe(params => this.idString = params.get("id"));
    let id = Number.parseInt(this.idString? this.idString : "");

    let p = new Promise(() =>{
      this.threadService.addCommentToThread(id, info);
    }).then(() => {
      location.reload();
    })


    this.resetPostInfo();
  }

  resetPostInfo(): void{
    this.postInfo.author = "Author";
    this.postInfo.content="";
  }

}
