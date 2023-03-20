import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCcComponent } from './add-edit-cc.component';

describe('AddEditCcComponent', () => {
  let component: AddEditCcComponent;
  let fixture: ComponentFixture<AddEditCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
