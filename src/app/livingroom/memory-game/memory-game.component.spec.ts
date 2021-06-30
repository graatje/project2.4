import {TestBed} from '@angular/core/testing';
import {MemoryGameComponent} from './memory-game.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MemoryGameComponent
      ],
    }).compileComponents();
  });

  it('should create the memory-game', () => {
    const fixture = TestBed.createComponent(MemoryGameComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'memory-game'`, () => {
    const fixture = TestBed.createComponent(MemoryGameComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('memory-game');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MemoryGameComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('memory-game memory-game is running!');
  });
});
