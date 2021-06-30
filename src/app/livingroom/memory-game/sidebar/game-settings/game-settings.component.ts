import {Component} from '@angular/core';
import {BoardService} from "../../board/board.service";
import {NgForm} from "@angular/forms";
import {CardColorService} from "../../card-color.service";

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent {
  readonly chars = ['*', '#', '@', '&', '%', 'X', '?¿'];
  readonly defaultChar = this.chars[0];
  sizes = [1, 2, 3].map((x) => x * BoardService.MAX_OPEN_CARDS);
  defaultSize = this.sizes[2];
  ctrlColors = this.colorService.ctrlColors;

  constructor(private boardService: BoardService, public colorService: CardColorService) {
  }

  setChar(value: string): void {
    this.boardService.updateChar(value);
  }

  startNewGame(f: NgForm) {
    this.boardService.newGame(f.value.size);
  }
}
