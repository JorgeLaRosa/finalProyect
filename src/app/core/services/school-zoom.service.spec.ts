import { TestBed } from '@angular/core/testing';
import { InjectionToken } from '@angular/core';
import { SchoolZoomService } from './school-zoom.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('CoursesService', () => {
    let service: SchoolZoomService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AngularFireModule.initializeApp(environment.firebase)],
            providers: [AngularFireAuth]
        });
        service = TestBed.inject(SchoolZoomService);
    });

    it('El servicio existe', () => {
        expect(service).toBeTruthy();
    });

    it('El servicio carga datos correctamente', () => {
        service.obtenerStudents().subscribe((data) => {
            expect(data.length).toBeGreaterThan(0)
        })

    })
});
