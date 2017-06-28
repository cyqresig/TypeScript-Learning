/**
 * Created by chenyiqin on 2017/6/28.
 */

import Hello from './Hello';

import React, {Component} from 'react';

export default class Hi extends Component<any, any> {
    render() {
        return (
            <Hello name={'1'} enthusiasmLevel={2}/>
        );
    }
}