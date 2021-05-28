import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { ForumBoardComponent } from './Forum/forum-board/forum-board.component';
import { ForumThreadComponent } from './Forum/forum-thread/forum-thread.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginscreenComponent },
  { path: 'plattegrond', component: FloorplanComponent },
  { path: 'navigation', component: FloorplanComponent },
  { path: 'woonkamer', component: LivingroomComponent },
// { path: 'woonkamer/memory', component: MemoryGameComponent }
  { path: 'studyroom/noticeboard', component: ForumBoardComponent},
  { path: 'studyroom/noticeboard/:id', component: ForumThreadComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
