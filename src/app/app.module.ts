import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { LivingroomComponent } from './livingroom/livingroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    FloorplanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
