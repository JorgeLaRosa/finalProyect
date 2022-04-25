import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class SchoolZoomService {
  public students!: any[];
  private studentObservable: Observable<any[]>;
  private coursesObservable: Observable<any[]>;


  constructor(public firestore: AngularFirestore) {

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
    //var index = studentData.indexOf(studentData.id)
    this.firestore.collection('students').doc(studentData.id).update(studentData)
  }

  // COURSES Services

  getCourses() {
    console.log(this.coursesObservable)
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
}
