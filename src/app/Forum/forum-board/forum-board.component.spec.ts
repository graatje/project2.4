import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBoardComponent } from './forum-board.component';

describe('ForumBoardComponent', () => {
  let component: ForumBoardComponent;
  let fixture: ComponentFixture<ForumBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
