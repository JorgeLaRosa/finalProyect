import { createSelector } from "@ngrx/store";
import { SessionState } from "src/app/models/session.state";
import { AppState } from "../app.state";

export const sessionSelector = (state: AppState) => state.session;

export const activeSessionSelector = createSelector(
    sessionSelector,
    (state: SessionState) => state
)
