"use strict";
/**
 * Created by chenyiqin on 2017/6/28.
 */
// bool
let isDone = false;
isDone = true;
// number
let decLiteral = 6;
decLiteral = 10;
// string
let nameX = 'text';
nameX = `text-${isDone}`;
// T[]
let list = [1, 2, 3];
list = [4, 5, 6];
// let list1: Array = [1, '2', {a: 1}];
// list1 = [{b: 1}, 3, 4]
// Array<T> => T[]
let list2 = [3, 2, 1];
list2 = [6, 5, 4];
// [T]
let list3 = ['1', '2', '3'];
list3[3] = '4';
// [T1, T2, ...]
let list4 = ['1', 2, '1', 2];
list4[4] = 3;
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let color2 = Color2.Red;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
    Color3[Color3["Yellow"] = 5] = "Yellow";
})(Color3 || (Color3 = {}));
let color3 = Color3.Yellow;
let colorName = Color[2];
// any
let notSure = 4;
notSure = 'a string';
notSure = false;
let ugly = 4;
ugly.toFixed(2);
let pretty = 4;
// pretty.toFixed(1); // error
let list5 = [1, 'string', false];
list5[1] = 100;
// void
const warnUser = () => {
    alert('warning...');
};
// null | undefined
let nullVar = null;
let undefinedVar = undefined;
let a;
// never
const error = () => {
    throw new Error('error');
};
// type assert
let someValue = 'string';
let strLength = someValue.length;
