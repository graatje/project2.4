import { Component, OnInit } from '@angular/core';
import { Forumpost } from '../forumpost';
import { FormsModule } from '@angular/forms';
import { ForumThreadComponent } from '../forum-thread/forum-thread.component';
import { NewForumpostService } from '../new-forumpost.service';

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

  constructor(private postService: NewForumpostService) { }

  ngOnInit(): void {
    //TODO: Get Author name from login details
  }

  onSendClick(): void {
    const info: Forumpost = {
      id: this.postInfo.id,
      author: this.postInfo.author,
      content: this.postInfo.content
    };
    this.postService.addPost(info);
    this.resetPostInfo();
  }

  resetPostInfo(): void{
    this.postInfo.author = "Author";
    this.postInfo.content="";
  }

}
