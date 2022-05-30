import { User } from "./user.interface";

export interface SessionState {
    isActive: boolean,
    currentUser: User
}