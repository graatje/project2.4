import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts';
import { Forumpost } from '../forumpost';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { NewForumpostService } from '../new-forumpost.service';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.css']
})
export class ForumThreadComponent implements OnInit {

  id: number= 0;
  posts: Forumpost[] = [];

  constructor(private postService: NewForumpostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public addNewPost(post: Forumpost) : void {
    this.posts.push(post);
  }



  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}
