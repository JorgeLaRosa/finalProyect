import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core'
import { AlumnosListComponent } from './alumnos-list.component';
import { SchoolZoomService } from '../../../core/services/school-zoom.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



describe('AlumnosListComponent', () => {
  let component: AlumnosListComponent;
  let fixture: ComponentFixture<AlumnosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), MatDialogModule],
      declarations: [AlumnosListComponent],
      providers: [AngularFireAuth
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Los cursos se renderizaron correctamente en la vista', () => {
    const fixture = TestBed.createComponent(AlumnosListComponent);
    const view = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(view.querySelector('div')).toBeTruthy();
  });

});
