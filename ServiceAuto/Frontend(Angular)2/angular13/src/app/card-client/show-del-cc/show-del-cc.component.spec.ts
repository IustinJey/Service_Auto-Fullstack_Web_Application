import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelCcComponent } from './show-del-cc.component';

describe('ShowDelCcComponent', () => {
  let component: ShowDelCcComponent;
  let fixture: ComponentFixture<ShowDelCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelCcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
