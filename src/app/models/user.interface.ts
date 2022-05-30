export interface User {
    id: string,
    name: string,
    lastName: string,
    dni: string,
    courses: string[],
    mail: string,
    password: string,
    isAdmin: boolean,
    edit: boolean;
}