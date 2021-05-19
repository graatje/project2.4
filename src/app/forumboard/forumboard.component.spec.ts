import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumboardComponent } from './forumboard.component';

describe('ForumboardComponent', () => {
  let component: ForumboardComponent;
  let fixture: ComponentFixture<ForumboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
