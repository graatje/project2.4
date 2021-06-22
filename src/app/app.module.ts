import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewForumPostComponent } from './Forum/new-forum-post/new-forum-post.component';
import { ForumThreadComponent } from './Forum/forum-thread/forum-thread.component';
import { ForumBoardComponent } from './Forum/forum-board/forum-board.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { HttpClientModule } from '@angular/common/http';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FloorplansvgComponent } from './floorplan/floorplansvg/floorplansvg.component';

@NgModule({
  declarations: [
    AppComponent,
    KitchenComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeFormComponent,
    NewForumPostComponent,
    ForumThreadComponent,
    ForumBoardComponent,
    LoginscreenComponent,
    FloorplanComponent,
    LivingroomComponent,
    PageNotFoundComponent,
    FloorplansvgComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
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
