import { TestBed } from '@angular/core/testing';
import { InjectionToken } from '@angular/core';
import { SchoolZoomService } from './school-zoom.service';

describe('CoursesService', () => {
    let service: SchoolZoomService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InjectionToken]
        });
        service = TestBed.inject(SchoolZoomService);
    });

    it('El servicio existe', () => {
        expect(service).toBeTruthy();
    });

    // it('El servicio carga datos correctamente', () => {
    //     service.obtenerStudents().subscribe((data) => {
    //         expect(data.length).toBeGreaterThan(0)
    //     })

    // })


});
