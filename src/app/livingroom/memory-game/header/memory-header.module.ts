import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemoryHeaderComponent} from './memory-header.component';
import {NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MemoryHeaderComponent
  ],
  exports: [
    MemoryHeaderComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ]
})
export class MemoryHeaderModule {
}
