"use strict";
class User {
    constructor(email, name) {
        this.city = "Jaipur";
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const pragati = new User("pragati@gmail.com", "pragati");
class NewUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const newpragati = new User("pragati@gmail.com", "pragati");
