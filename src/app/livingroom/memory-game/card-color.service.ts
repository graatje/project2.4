import {Injectable} from '@angular/core';
import {CardColor} from "./sidebar/game-settings/cardColor";
import {CardStatus} from "./board/card";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardColorService {

  ctrlColors: CardColor[] = [
    {control: CardStatus.inactive, color: "#FF0000"},
    {control: CardStatus.active, color: "#008C00"},
    {control: CardStatus.found, color: "#800080"}
  ];

  private activeColorSrc = new BehaviorSubject<string>(this.ctrlColors[1].color)
  activeColor = this.activeColorSrc.asObservable();
  private inactiveColorSrc = new BehaviorSubject<string>(this.ctrlColors[0].color)
  inactiveColor = this.inactiveColorSrc.asObservable();
  private foundColorSrc = new BehaviorSubject<string>(this.ctrlColors[2].color)
  foundColor = this.foundColorSrc.asObservable();

  changeColor(status: CardStatus, color: string): void {
    switch (status) {
      case CardStatus.inactive:
        this.inactiveColorSrc.next(color);
        break;
      case CardStatus.active:
        this.activeColorSrc.next(color);
        break;
      case CardStatus.found:
        this.foundColorSrc.next(color);
        break;
    }

  }

  constructor() {
  }
}
