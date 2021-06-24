import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewForumPostComponent } from './Forum/new-forum-post/new-forum-post.component';
import { ForumThreadComponent } from './Forum/forum-thread/forum-thread.component';
import { ForumBoardComponent } from './Forum/forum-board/forum-board.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { HttpClientModule } from '@angular/common/http';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NewForumThreadComponent } from './Forum/new-forum-thread/new-forum-thread.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FloorplansvgComponent } from './floorplan/floorplansvg/floorplansvg.component';

@NgModule({
  declarations: [
    AppComponent,
    NewForumPostComponent,
    ForumThreadComponent,
    ForumBoardComponent,
    LoginscreenComponent,
    FloorplanComponent,
    LivingroomComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ChatroomComponent,
    NewForumThreadComponent,
    FloorplansvgComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
