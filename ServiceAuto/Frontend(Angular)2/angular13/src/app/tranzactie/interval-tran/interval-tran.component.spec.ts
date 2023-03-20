import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalTranComponent } from './interval-tran.component';

describe('IntervalTranComponent', () => {
  let component: IntervalTranComponent;
  let fixture: ComponentFixture<IntervalTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalTranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
