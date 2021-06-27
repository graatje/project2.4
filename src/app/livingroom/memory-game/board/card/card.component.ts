import {Component, Input} from '@angular/core';
import {Card, CardStatus} from "../card";
import {BoardService} from "../board.service";
import {CardColorService} from "../../card-color.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public CardStatus = CardStatus;
  @Input() card!: Card;
  inactiveCardChar: string = '';

  // trust me!
  activeColor!: string;
  inactiveColor!: string;
  foundColor!: string;

  constructor(private boardService: BoardService, public colorService: CardColorService) {
    this.boardService.char.subscribe(char => this.inactiveCardChar = char);
    this.colorService.activeColor.subscribe(activeColor => this.activeColor = activeColor);
    this.colorService.inactiveColor.subscribe(inactiveColor => this.inactiveColor = inactiveColor);
    this.colorService.foundColor.subscribe(foundColor => this.foundColor = foundColor);
  }

}
