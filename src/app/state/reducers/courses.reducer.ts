import { createReducer, on } from "@ngrx/store";
import { CoursesState } from "src/app/models/courses.state";
import { loadCourses, loadedCourses } from "../actions/courses.action";

export const CourseInitialState: CoursesState = {
    loading: false,
    courses: []
}

export const CoursesReducer = createReducer(
    CourseInitialState,
    on(loadCourses, (state) => {
        return { ...state, loading: true }
    }),

    on(loadedCourses, (state, { courses }) => {
        return { ...state, loading: false, courses }
    })
);