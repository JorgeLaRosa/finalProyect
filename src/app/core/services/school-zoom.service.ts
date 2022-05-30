import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { where, FieldValue, updateDoc } from 'firebase/firestore';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';


@Injectable({
  providedIn: 'root'
})

export class SchoolZoomService {
  public students!: any[];
  private studentObservable: Observable<any[]>;
  private coursesObservable: Observable<any[]>;
  private student!: AngularFirestoreDocument<any>;
  private user!: any;


  constructor(public firestore: AngularFirestore,) {
    this.studentObservable = firestore.collection('students').snapshotChanges();
    this.coursesObservable = firestore.collection('courses').snapshotChanges();
  }

  obtenerStudents() {
    return this.studentObservable;
  }

  deleteSelectedStudent(studentId: string) {
    this.firestore.collection('students').doc(studentId).delete()
  }

  createNewStudent(newStudentData: any) {
    delete newStudentData.id
    this.firestore.collection('students').add(newStudentData)
  }

  updateStudent(studentData: any) {
    var studentId = studentData.id;
    delete studentData.id
    console.log('ESTES ES: ', studentData);
    this.firestore.collection('students').doc(studentId).update(studentData)
  }

  // COURSES Services
  getCourses() {
    return this.coursesObservable
  }

  createNewCourse(data: any) {
    this.firestore.collection('courses').add(data)
  }

  deleteSelectedCourse(id: string) {
    this.firestore.collection('courses').doc(id).delete()
  }

  updateSelectedCourse(courseData: any) {
    var courseId = courseData.id;
    delete courseData.id
    this.firestore.collection('courses').doc(courseId).update(courseData)
  }

  //INSCRIPTION Services
  newRegister(courseId: string, studentId: string, course: string[]) {
    //var coursesArray = [...course, courseId];

    this.firestore.collection('courses').doc(courseId).update({
      enrolledStudents: [studentId]
    })
    this.firestore.collection('students').doc(studentId).update({ courses: [courseId] });
  }


  //Perfil Usuario LLama a data x su Id
  obtenerStudentsFiltered(data: any) {
    var student = this.firestore.collection('students').doc(data).valueChanges()
    return student;
  }

  //LOGIN
  login(user: string, password: any) {
  }

}
