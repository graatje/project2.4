import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { ForumBoardComponent } from './Forum/forum-board/forum-board.component';
import { ForumThreadComponent } from './Forum/forum-thread/forum-thread.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService as guard } from './_services/auth-guard.service';
import { AuthService } from './_services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginscreenComponent },
  { path: 'plattegrond', component: FloorplanComponent, canActivate: [guard] },
  { path: 'navigation', component: FloorplanComponent, canActivate: [guard] },
  { path: 'woonkamer', component: LivingroomComponent, canActivate: [guard] },
// { path: 'woonkamer/memory', component: MemoryGameComponent }
  { path: 'studyroom/noticeboard', component: ForumBoardComponent, canActivate: [guard] },
  { path: 'studyroom/noticeboard/:id', component: ForumThreadComponent, canActivate: [guard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [guard, AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
