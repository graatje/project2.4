import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimingService {

  readonly PEEK_SECONDS = 10;

  private peekTimeRemainingSrc = new BehaviorSubject<number>(this.PEEK_SECONDS);
  peekTimeRemaining = this.peekTimeRemainingSrc.asObservable();

  peekIntervalID: any; // Should be NodeJS.Timeout, but Webstorm doesn't recognise the type.
  gameTimeIntervalID: any; // Should be NodeJS.Timeout, but Webstorm doesn't recognise the type.

  private gameStarted = false;

  private elapsedTimeSrc = new BehaviorSubject<number>(0);
  elapsedTime = this.elapsedTimeSrc.asObservable();

  constructor() {
  }

  startPeekTimer(closeCards: () => void): void {
    const frame = () => {
      this.peekTimeRemainingSrc.next(this.peekTimeRemainingSrc.value - 1);

      if (this.peekTimeRemainingSrc.value <= 0 && this.peekIntervalID !== null) {
        clearInterval(this.peekIntervalID);
        closeCards();
      }
    }
    let speed = 1000; // Update-speed in ms. Must be an integer.
    frame();
    this.peekIntervalID = setInterval(frame, speed);
  }

  resetPeekTimer(): void {
    if (this.peekIntervalID !== null) {
      clearInterval(this.peekIntervalID);
      this.peekIntervalID = null;
      this.peekTimeRemainingSrc.next(this.PEEK_SECONDS);
    }
  }

  resetGameTimeTimer() {
    this.stopTime();
    this.elapsedTimeSrc.next(0);
  }

  /**
   * Should be run for new game. Sets all timers to default, but does not start gametime yet.
   * Use TimingService#startGameTime for that.
   */
  prepareNewGame(): void {
    this.resetPeekTimer();
    this.resetGameTimeTimer();
    this.gameStarted = false;
  }

  startTime() {
    if (!this.gameStarted) {
      const tickTime = () => {
        this.elapsedTimeSrc.next(this.elapsedTimeSrc.value + 1);
      }

      this.gameStarted = true;

      // Times are rounded up, because timer immediately goes to 1 at start.
      // This is more fun, because one can say "my highscore is already great, but my real time is actually even slightly better!"
      tickTime();
      this.gameTimeIntervalID = setInterval(tickTime, 1000);
    }
  }

  /**
   * Returns the time and stops the game.
   */
  stopTime(): number {
    if (this.gameTimeIntervalID !== null) {
      clearInterval(this.gameTimeIntervalID);
      this.gameTimeIntervalID = null;
    }
    return this.elapsedTimeSrc.value;
  }
}
