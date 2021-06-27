import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemoryHeaderComponent} from './memory-header.component';

describe('HeaderComponent', () => {
  let component: MemoryHeaderComponent;
  let fixture: ComponentFixture<MemoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
