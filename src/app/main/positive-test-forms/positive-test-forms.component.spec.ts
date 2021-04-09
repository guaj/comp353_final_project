import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveTestFormsComponent } from './positive-test-forms.component';

describe('PositiveTestFormsComponent', () => {
  let component: PositiveTestFormsComponent;
  let fixture: ComponentFixture<PositiveTestFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositiveTestFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveTestFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
