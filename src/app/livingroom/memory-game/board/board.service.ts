import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Card, CardStatus} from "./card";
import {TimingService} from "../timing.service";
import {HighscoreService} from "../highscore.service";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  // TODO: This isn't configurable in the settings, but has great potential to be. Maybe if we got time remaining for development.
  static readonly MAX_OPEN_CARDS = 2;

  private openCards: Card[] = [];

  private charSrc = new BehaviorSubject<string>('*');
  char = this.charSrc.asObservable();
  private cardsSrc = new BehaviorSubject<Card[][]>([]);
  cards = this.cardsSrc.asObservable();
  private foundCardPairsSrc = new BehaviorSubject<number>(0);
  foundCardPairs = this.foundCardPairsSrc.asObservable();

  maxCardPairsToFind = 0;

  constructor(private timingService: TimingService, private highscoreService: HighscoreService) {
  }

  updateChar(char: string) {
    this.charSrc.next(char);
  }

  newGame(size: number) {
    this.reset();
    this.timingService.prepareNewGame();
    this.fillBoard(size);
  }

  fillBoard(size: number) {
    let nextLetterFunction = this.nextLetter(size);

    let cards: Card[][] = [];

    for (let y = 0; y < size; y++) {
      cards[y] = [];
      for (let x = 0; x < size; x++) {
        cards[y][x] = new Card(nextLetterFunction());
      }
    }
    this.cardsSrc.next(cards);
    this.maxCardPairsToFind = size * size / BoardService.MAX_OPEN_CARDS; // bv: bord van 4x4 = 16, 2 kaarten, dus 8 paren
  }

  public generateAlphabetString(count: number): string {
    let alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let newArray = [];
    for (let letter of alphabetArray) {
      newArray.push(letter.repeat(count));
    }
    return newArray.join('');
  }

  private nextLetter(size: number): any {
    let letterArray = this.generateAlphabetString(BoardService.MAX_OPEN_CARDS).substring(0, size * size).split('');
    let idx = 0;
    letterArray = BoardService.shuffle(letterArray);
    return () => {
      return letterArray[idx++];
    }
  }

  cardClicked(card: Card): void {
    this.timingService.startTime();
    // Check if card is already in list.
    if (this.openCards.includes(card) || card.status !== CardStatus.inactive) {
      return;
    }

    this.closeCardsAfterLimit();
    this.openCards.push(card);
    card.status = CardStatus.active;

    if (this.openCards.length === BoardService.MAX_OPEN_CARDS) {
      this.checkCards(this.openCards);
    } else if (this.openCards.length === 1) {
      this.timingService.resetPeekTimer();
    }
  }

  private closeCardsAfterLimit() {
    if (this.openCards.length >= BoardService.MAX_OPEN_CARDS) {
      this.closeCards();
    }
  }

  closeCards() {
    this.setCardsStatus(this.openCards, CardStatus.inactive);
    this.openCards = [];
  }

  /**
   * Marks cards as found if they are equal.
   * From: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
   */
  private checkCards(cards: Card[]): void {
    let areCardsEqual = cards.every((card, i, cardArray) => card.letter === cardArray[0].letter);
    if (areCardsEqual) {
      this.setCardsStatus(this.openCards, CardStatus.found);
      this.openCards = [];
      this.foundCardPairsSrc.next(this.foundCardPairsSrc.value + 1);

      this.checkWin();

    } else {
      this.timingService.startPeekTimer(() => this.closeCards());
    }
  }

  private checkWin() {
    if (this.maxCardPairsToFind == this.foundCardPairsSrc.value) {
      // Hurray, game is over!
      this.highscoreService.addNewTime(this.timingService.stopTime());
    }
  }

  private setCardsStatus(cards: Card[], status: CardStatus): void {
    cards.forEach(card => card.status = status);
  }

  /**
   * knuth array shuffle
   * from https://bost.ocks.org/mike/shuffle/
   */
  private static shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  private reset() {
    this.closeCards();
    this.foundCardPairsSrc.next(0);
  }
}
