"use strict";
/**
 * Created by chenyiqin on 2017/6/28.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Hello_1 = require("./Hello");
const react_1 = require("react");
class Hi extends react_1.Component {
    render() {
        return (<Hello_1.default name={'1'} enthusiasmLevel={2}/>);
    }
}
exports.default = Hi;
