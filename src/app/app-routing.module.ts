import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { ForumBoardComponent } from './Forum/forum-board/forum-board.component';
import { ForumThreadComponent } from './Forum/forum-thread/forum-thread.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewForumThreadComponent } from './Forum/new-forum-thread/new-forum-thread.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginscreenComponent },
  { path: 'navigation', component: FloorplanComponent },
  { path: 'studiekamer/prikbord', component: ForumBoardComponent},
  { path: 'studiekamer/prikbord/nieuw', component: NewForumThreadComponent},
  { path: 'studiekamer/prikbord/thread/:id', component: ForumThreadComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }