import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCreatorComponent } from './courses-creator.component';

describe('CoursesCreatorComponent', () => {
  let component: CoursesCreatorComponent;
  let fixture: ComponentFixture<CoursesCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
