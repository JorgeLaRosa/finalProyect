import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InjectionToken } from '@angular/core'
import { AlumnosListComponent } from './alumnos-list.component';

describe('AlumnosListComponent', () => {
  let component: AlumnosListComponent;
  let fixture: ComponentFixture<AlumnosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosListComponent],
      providers: [InjectionToken]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
