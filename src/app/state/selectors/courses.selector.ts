import { createSelector } from "@ngrx/store";
import { CoursesState } from "src/app/models/courses.state";
import { AppState } from "../app.state";


export const coursesSelector = (state: AppState) => state.courses;

export const coursesListSelector = createSelector(
    coursesSelector,
    (state: CoursesState) => state

);