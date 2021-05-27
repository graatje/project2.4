import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';
import { THREADS } from './mock-threads';
import { Forumpost } from './forumpost';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewForumpostService {

  getPosts(id: number): Observable<Forumpost[]> {
    const posts = (THREADS.find(thread => thread.id === id)?.replies)!;
    return of(posts);
  }

  addPost(post: Forumpost): void{
    console.log("Added post to list.");
    let updated = this.incrementPostID(post);
    POSTS.push(updated);
  }

  private incrementPostID(post: Forumpost) : Forumpost{
    let updated: Forumpost = post;
    let highest=0;

    for (let i = 0; i < POSTS.length; i++) {
      if (POSTS[i].id > highest){
        highest = POSTS[i].id;
      }
    }
    updated.id = highest+1;
    return updated;
  }

  constructor() { }
}
