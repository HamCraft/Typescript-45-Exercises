"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userNames = ['admin', 'Ahmed', 'Muhammad', 'Alex', 'Andrew Tate'];
function greetUsers() {
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
greetUsers();
