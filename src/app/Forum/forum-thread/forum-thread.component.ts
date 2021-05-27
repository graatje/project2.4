import { Component, OnInit } from '@angular/core';
import { Forumpost } from '../forumpost';
import { NewForumpostService } from '../new-forumpost.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.css']
})
export class ForumThreadComponent implements OnInit {

  id: number= 0;
  posts: Forumpost[] = [];

  constructor(
    private postService: NewForumpostService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public addNewPost(post: Forumpost) : void {
    this.posts.push(post);
  }

  getPosts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPosts(id).subscribe(posts => this.posts = posts);
  }

}
