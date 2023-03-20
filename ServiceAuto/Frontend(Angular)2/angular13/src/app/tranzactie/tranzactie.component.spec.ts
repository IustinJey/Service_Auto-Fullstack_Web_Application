import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranzactieComponent } from './tranzactie.component';

describe('TranzactieComponent', () => {
  let component: TranzactieComponent;
  let fixture: ComponentFixture<TranzactieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranzactieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranzactieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
