import {Component} from '@angular/core';
import {HighscoreService} from "../../highscore.service";
import {Highscore} from "../../highscore";
import {TimingService} from "../../timing.service";

@Component({
  selector: 'app-timestats',
  templateUrl: './time-stats.component.html',
  styleUrls: ['./time-stats.component.css']
})
export class TimeStatsComponent {
  highscores: Highscore[] = [];
  avgTime = 0;
  elapsedTime = 0;

  constructor(private highscoreService: HighscoreService, private timingService: TimingService) {
    highscoreService.highscores.subscribe(highscores => this.highscores = highscores);
    highscoreService.averageTime.subscribe(avgTime => this.avgTime = avgTime);
    timingService.elapsedTime.subscribe(elapsedTime => this.elapsedTime = elapsedTime);
  }

}
