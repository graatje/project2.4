// import { Injectable } from '@angular/core';
// import { Forumpost, Forumthread } from './forumpost';
// import { Observable, of } from 'rxjs';
// import { ForumThreadService } from './forum-thread.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewForumpostService {

//   currentThread: Forumthread = {id:0, title:'', author: '', content: '', replies: []};

//   constructor(private threadService : ForumThreadService) { }

//   getPosts(id: number): Observable<Forumpost[]> {
//     const posts = (THREADS.find(thread => thread.id === id)?.replies)!;
//     return of(posts);
//   }

//   getThreadOriginalPost(id?: number): Observable<Forumthread> {
//     this.currentThread = THREADS.find(thread => thread.id === id)!;
//     return of(this.currentThread);
//   }

//   addPost(post: Forumpost): void{
//     let updated = this.incrementPostID(post);
//     this.currentThread?.replies.push(updated);
//   }

//   private incrementPostID(post: Forumpost) : Forumpost{
//     let updated: Forumpost = post;
//     let highest=0;

//     for (let i = 0; i < this.currentThread.replies.length; i++) {
//       if (this.currentThread.replies[i].id > highest){
//         highest = POSTS[i].id;
//       }
//     }


//     updated.id = highest+1;
//     return updated;
//   }


// }
