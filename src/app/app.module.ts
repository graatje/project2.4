import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewForumPostComponent } from './new-forum-post/new-forum-post.component';
import { ForumThreadComponent } from './forum-thread/forum-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    NewForumPostComponent,
    ForumThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
