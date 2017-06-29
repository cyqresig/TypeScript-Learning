/**
 * Created by chenyiqin on 2017/6/28.
 */

// bool
let isDone: boolean = false;
isDone = true;

// number
let decLiteral: number = 6;
decLiteral = 10;

// string
let nameX: string = 'text';
nameX = `text-${isDone}`;

// T[]
let list: number[] = [1, 2, 3];
list = [4, 5, 6];

// let list1: Array = [1, '2', {a: 1}];
// list1 = [{b: 1}, 3, 4]

// Array<T> => T[]
let list2: Array<number> = [3, 2, 1];
list2 = [6, 5, 4];

// [T]
let list3: [string] = ['1', '2', '3'];
list3[3] = '4';

// [T1, T2, ...]
let list4: [string, number] = ['1', 2, '1', 2];
list4[4] = 3;

// enum

enum Color {
    Red,
    Green,
    Blue,
}
let color: Color = Color.Green;

enum Color2 {
    Red = 1,
    Green,
    Blue,
}
let color2: Color2 = Color2.Red;

enum Color3 {
    Red = 1,
    Green = 2,
    Blue = 4,
    Yellow,
}
let color3: Color3 = Color3.Yellow;
let colorName: string = Color[2];

// any
let notSure: any = 4;
notSure = 'a string';
notSure = false;

let ugly: any = 4;
ugly.toFixed(2);

let pretty: Object = 4;
// pretty.toFixed(1); // error

let list5: any[] = [1, 'string', false];
list5[1] = 100;

// void
const warnUser = (): void => {
    alert('warning...');
}

// null | undefined
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let a;

// never

const error = (): never => {
    throw new Error('error');
}

// type assert

let someValue: any = 'string';
let strLength: number = (someValue as string).length;