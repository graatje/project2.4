import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForumThreadComponent } from './new-forum-thread.component';

describe('NewForumThreadComponent', () => {
  let component: NewForumThreadComponent;
  let fixture: ComponentFixture<NewForumThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewForumThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForumThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
