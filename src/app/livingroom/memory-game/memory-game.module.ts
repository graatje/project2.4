import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MemoryGameComponent} from './memory-game.component';
import {BoardModule} from "./board/board.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MemoryHeaderModule} from "./header/memory-header.module";

@NgModule({
  declarations: [
    MemoryGameComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    SidebarModule,
    NgbModule,
    MemoryHeaderModule
  ],
  providers: [],
  bootstrap: [MemoryGameComponent]
})
export class MemoryGameModule {
}
