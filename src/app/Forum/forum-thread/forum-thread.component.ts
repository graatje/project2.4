import { Component, OnInit } from '@angular/core';
import { Forumpost, Forumthread } from '../forumpost';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ForumThreadService } from '../forum-thread.service';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.css']
})
export class ForumThreadComponent implements OnInit {

  idString : string|null = "";
  id?: number;
  posts: Forumpost[] = [];
  originalPost: Forumthread = {id:0, title:'', author:'', content:'', replies:[]};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private threadService: ForumThreadService,
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => this.idString = params.get("id"));
    this.id = Number.parseInt(this.idString? this.idString : "");

    this.threadService.getThreadByID(this.id).subscribe(thread => {
      // console.log(thread);
      this.originalPost = thread;
      this.getPosts();
    });

  }

  getPosts(): void {
    this.posts = this.originalPost.replies;
  }

}
