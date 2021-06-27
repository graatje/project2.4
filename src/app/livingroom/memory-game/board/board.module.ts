import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';



@NgModule({
    declarations: [
        BoardComponent
    ],
    exports: [
        BoardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BoardModule { }
