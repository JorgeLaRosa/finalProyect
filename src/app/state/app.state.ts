import { ActionReducerMap } from "@ngrx/store";
import { CoursesState } from "../models/courses.state";
import { SessionState } from "../models/session.state";
import { CoursesReducer } from "./reducers/courses.reducer";
import { loginReducer } from "./reducers/login.reducer";

export interface AppState {
    courses: CoursesState,
    session: SessionState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    courses: CoursesReducer,
    session: loginReducer,
}