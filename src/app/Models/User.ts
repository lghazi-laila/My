export class User{
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    userName : string;
    creationDate : string;
    lastLogin : string;
    lastUpdate : string;
    active : string;

    constructor(id: string, firstName: string, lastName: string, email: string, userName: string, creationDate: string, lastLogin: string, lastUpdate: string, active: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.creationDate = creationDate;
        this.lastLogin = lastLogin;
        this.lastUpdate = lastUpdate;
        this.active = active;
    }
}