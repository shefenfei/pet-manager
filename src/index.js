/**
 * Created by shefenfei on 2017/10/19.
 */
import _ from 'lodash';

import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello' , 'webpack'] , '');

    var buttonView = document.createElement('button');
    buttonView.innerHTML = 'Click me and check consle';
    buttonView.onclick = printMe;
    element.appendChild(buttonView);

    return element;
}

document.body.appendChild(component());
