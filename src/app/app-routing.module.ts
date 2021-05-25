import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { FloorplanComponent } from './floorplan/floorplan.component';

const routes: Routes = [
  { path: '', component: LoginscreenComponent },
  { path: 'navigation', component: FloorplanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }