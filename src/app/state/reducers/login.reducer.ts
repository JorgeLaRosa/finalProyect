import { createReducer, on } from "@ngrx/store";
import { SessionState } from "src/app/models/session.state";
import { createSession } from "../actions/login.action";


export const initialSessionState: SessionState = {
    isActive: false,
    currentUser: {
        id: '',
        name: '',
        lastName: '',
        dni: '',
        courses: [],
        mail: '',
        password: '',
        isAdmin: false,
        edit: false
    }
}

export const loginReducer = createReducer(
    initialSessionState,
    on(createSession, (state, { currentUser }) => {

        return {
            ...state, isActive: true, currentUser
        }
    }
    ));