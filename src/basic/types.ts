/**
 * Created by cyqresig on 17/6/27.
 */

function greeter(person: string) {
    return "Hello, " + person;
}

// var user = 123;
var user = "Jane User";

document.body.innerHTML = greeter(user);
