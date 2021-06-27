import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    BoardComponent,
    CardComponent
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoardModule {
}
