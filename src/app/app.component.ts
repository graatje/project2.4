import {ApplicationRef, Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StuDorm';
  isInstalled = this.swUpdate.isEnabled;
  isStable = true;

  ngOnInit(): void {
    this.ref.isStable.subscribe((isStable => this.isStable = isStable));
  }

  constructor(private swUpdate: SwUpdate, private ref: ApplicationRef) {}
}
