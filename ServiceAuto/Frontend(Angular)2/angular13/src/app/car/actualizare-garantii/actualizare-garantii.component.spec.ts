import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizareGarantiiComponent } from './actualizare-garantii.component';

describe('ActualizareGarantiiComponent', () => {
  let component: ActualizareGarantiiComponent;
  let fixture: ComponentFixture<ActualizareGarantiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizareGarantiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizareGarantiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
