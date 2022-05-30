import { createAction, props } from "@ngrx/store";
import { Courses } from "src/app/models/courses";



export const loadCourses = createAction(
    "[Course] Load Courses"
);

export const loadedCourses = createAction(
    '[Courses] Loaded Courses',
    props<{ courses: Courses[] }>()
);


