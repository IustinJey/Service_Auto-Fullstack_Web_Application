import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelTComponent } from './show-del-t.component';

describe('ShowDelTComponent', () => {
  let component: ShowDelTComponent;
  let fixture: ComponentFixture<ShowDelTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
