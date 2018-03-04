import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditCoursesComponent } from './create-or-edit-courses.component';

describe('CreateOrEditCoursesComponent', () => {
  let component: CreateOrEditCoursesComponent;
  let fixture: ComponentFixture<CreateOrEditCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
