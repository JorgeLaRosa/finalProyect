import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.interface";

export const createSession = createAction(
    '[Auth Login] CreateSession',
    props<{ currentUser: User }>()
)

export const closeSession = createAction(
    '[Auth Login] CloseSession'
)