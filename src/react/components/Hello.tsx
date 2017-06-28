/**
 * Created by cyqresig on 17/6/27.
 */

import React, { Component } from 'react';

export interface Props {
    name: string,
    enthusiasmLevel?: number
}

export default class Hello extends Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello
                </div>
            </div>
        );
    }
}


