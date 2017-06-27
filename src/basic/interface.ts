/**
 * Created by cyqresig on 17/6/27.
 */

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return 'Hello, ' + person.firstName + " " + person.lastName;
}

var user2 = {
    firstName: 'cyq',
    lastName: 'resig',
    // abc: '1'
};

greeter2(user2);
