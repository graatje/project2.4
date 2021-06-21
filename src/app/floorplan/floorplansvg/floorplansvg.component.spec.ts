import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorplansvgComponent } from './floorplansvg.component';

describe('FloorplansvgComponent', () => {
  let component: FloorplansvgComponent;
  let fixture: ComponentFixture<FloorplansvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorplansvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorplansvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
