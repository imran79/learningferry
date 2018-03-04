import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditTutorialsComponent } from './create-or-edit-tutorials.component';

describe('CreateOrEditTutorialsComponent', () => {
  let component: CreateOrEditTutorialsComponent;
  let fixture: ComponentFixture<CreateOrEditTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
