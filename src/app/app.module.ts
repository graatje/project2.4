import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { KitchenComponent } from './Keuken/kitchen/kitchen.component';
import { RecipesComponent } from './Keuken/recipes/recipes.component';
import { RecipeDetailComponent } from './Keuken/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './Keuken/recipe-form/recipe-form.component';
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
import { RegisterComponent } from './register/register.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NewForumThreadComponent } from './Forum/new-forum-thread/new-forum-thread.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FloorplansvgComponent } from './floorplan/floorplansvg/floorplansvg.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MemoryGameComponent} from './livingroom/memory-game/memory-game.component';
import {BoardModule} from './livingroom/memory-game/board/board.module';
import {MemoryHeaderModule} from './livingroom/memory-game/header/memory-header.module';
import {SidebarModule} from "./livingroom/memory-game/sidebar/sidebar.module";

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
    RegisterComponent,
    ChatroomComponent,
    NewForumThreadComponent,
    FloorplansvgComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MemoryGameComponent,
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
    }),
    BoardModule,
    MemoryHeaderModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
