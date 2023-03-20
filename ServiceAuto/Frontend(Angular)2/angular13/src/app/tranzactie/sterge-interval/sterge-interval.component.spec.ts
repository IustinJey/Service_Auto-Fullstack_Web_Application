import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergeIntervalComponent } from './sterge-interval.component';

describe('StergeIntervalComponent', () => {
  let component: StergeIntervalComponent;
  let fixture: ComponentFixture<StergeIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergeIntervalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StergeIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
