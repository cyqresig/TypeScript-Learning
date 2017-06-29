/**
 * Created by chenyiqin on 2017/6/29.
 */

// destructure
function test([a, b]: [number, number]) {
    console.log(a + b);
}
const rest: [number, number] = [1, 2];
test(rest);

let {aa, bb}: { aa: number, bb: string } = {aa: 1, bb: 'string'};

// default value
function test2(wholeObject: { a: string, b?: number }) {
    let { a, b = 100,} = wholeObject;
}
test2({
    a: 'sss',
})

type C = {
    a: string,
    b?: number
}

function test3({a, b}: C):void {

}

// auto type
function test4({a, b} = {a: "", b: 0}):void {

}
test4();
test4({
    a: 'str',
    b: 10
});