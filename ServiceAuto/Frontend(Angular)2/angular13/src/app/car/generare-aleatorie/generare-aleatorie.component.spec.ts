import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerareAleatorieComponent } from './generare-aleatorie.component';

describe('GenerareAleatorieComponent', () => {
  let component: GenerareAleatorieComponent;
  let fixture: ComponentFixture<GenerareAleatorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerareAleatorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerareAleatorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
