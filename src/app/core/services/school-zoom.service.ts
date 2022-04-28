import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CdkNoDataRow } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})

export class SchoolZoomService {
  public students!: any[];
  private studentObservable: Observable<any[]>;
  private coursesObservable: Observable<any[]>;
  private student!: AngularFirestoreDocument<any>;


  constructor(public firestore: AngularFirestore,) {

    this.studentObservable = firestore.collection('students').snapshotChanges();

    this.coursesObservable = firestore.collection('courses').snapshotChanges();
  }

  obtenerStudents() {
    return this.studentObservable;
  }

  createNewStudent(newStudentData: any) {
    this.firestore.collection('students').add(newStudentData)
  }

  deleteSelectedStudent(studentId: string) {
    this.firestore.collection('students').doc(studentId).delete()
  }

  updateStudent(studentData: any) {
    delete studentData.id
    this.firestore.collection('students').doc(studentData.id).update(studentData)
  }

  // COURSES Services

  getCourses() {
    return this.coursesObservable
  }

  createNewCourse(data: any) {
    this.firestore.collection('courses').add(data)
  }

  //INSCRIPTION Services
  newRegister(data: any) {
    this.firestore.collection('courses').doc(data.courseId).update({
      enrolledStudents: [data.studentId]
    })
    this.firestore.collection('students').doc(data.studentId).update({
      curso: [data.courseId]
    })
  }


  //Perfil Usuario LLama a data x su Id
  obtenerStudentsFiltered() {
    var student = this.firestore.collection('students').doc('6NpZKQ8HoNZKutp1otdM').valueChanges()
    return student;
  }

}
