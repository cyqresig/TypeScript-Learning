"use strict";
/**
 * Created by cyqresig on 17/6/27.
 */
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}
function greeter3(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
var student = new Student('cyq', 'h', 'resig');
greeter3(student);
