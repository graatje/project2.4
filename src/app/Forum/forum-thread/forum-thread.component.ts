import { Component, OnInit } from '@angular/core';
import { Forumpost, Forumthread } from '../forumpost';
import { NewForumpostService } from '../new-forumpost.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.css']
})
export class ForumThreadComponent implements OnInit {

  id?: number;
  posts: Forumpost[] = [];
  originalPost: Forumthread = {id:0, title:'', OP:'', post:'', replies:[]};

  constructor(
    private postService: NewForumpostService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getPosts();
    this.postService.getThreadOriginalPost(this.id).subscribe(Opost => this.originalPost = Opost);
  }

  getPosts(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPosts(this.id).subscribe(posts => this.posts = posts);
  }

}
