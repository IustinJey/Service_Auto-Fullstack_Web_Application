import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTComponent } from './add-edit-t.component';

describe('AddEditTComponent', () => {
  let component: AddEditTComponent;
  let fixture: ComponentFixture<AddEditTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
