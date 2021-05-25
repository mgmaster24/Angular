import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingAssignmentComponent } from './data-binding-assignment.component';

describe('DataBindingAssignmentComponent', () => {
  let component: DataBindingAssignmentComponent;
  let fixture: ComponentFixture<DataBindingAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingAssignmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
