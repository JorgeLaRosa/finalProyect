import { Courses } from './courses';

export interface CoursesState {
    courses: Courses[],
    loading: boolean
};