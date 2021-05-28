import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './interceptor';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
