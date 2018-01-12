import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoreditcourseComponent } from './createoreditcourse.component';

describe('CreateoreditcourseComponent', () => {
  let component: CreateoreditcourseComponent;
  let fixture: ComponentFixture<CreateoreditcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateoreditcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoreditcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
