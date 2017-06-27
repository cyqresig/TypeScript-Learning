/**
 * Created by cyqresig on 17/6/27.
 */

class Student {

    fullName: string;

    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }

}

interface Person {
    firstName: string,
    lastName: string
}

function greeter3(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

var student = new Student('cyq', 'h', 'resig');

greeter3(student);
