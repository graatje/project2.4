import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeStatsComponent} from './time-stats/time-stats.component';
import {SidebarComponent} from './sidebar.component';
import {GameSettingsComponent} from './game-settings/game-settings.component';
import {FormsModule} from "@angular/forms";
import {FormatTimePipe} from './game-settings/format-delta.pipe';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    TimeStatsComponent,
    SidebarComponent,
    GameSettingsComponent,
    FormatTimePipe
  ],
  exports: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class SidebarModule {
}
