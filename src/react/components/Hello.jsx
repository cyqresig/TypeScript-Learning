"use strict";
/**
 * Created by cyqresig on 17/6/27.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class Hello extends react_1.Component {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (<div className="hello">
                <div className="greeting">
                    Hello
                </div>
            </div>);
    }
}
exports.default = Hello;
