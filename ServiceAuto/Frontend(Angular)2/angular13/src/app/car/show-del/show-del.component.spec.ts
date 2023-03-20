import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelComponent } from './show-del.component';

describe('ShowDelComponent', () => {
  let component: ShowDelComponent;
  let fixture: ComponentFixture<ShowDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
