"use strict";
/**
 * Created by cyqresig on 17/6/27.
 */
function greeter2(person) {
    return 'Hello, ' + person.firstName + " " + person.lastName;
}
var user2 = {
    firstName: 'cyq',
    lastName: 'resig',
};
greeter2(user2);
