import React, {Component} from 'react';
// a component name must begin with uppercase
// named export
export function User(props) {
    return (<div>
        <h3>User component, {props.fullname}</h3>
    </div>)
}
function Hello(props) {
    let title = props.title;
    return (<div>
        <h2>Hello {title}</h2>
    </div>)
}
export class Demo extends React.Component {
    render() {
        return (<div>
            <h3>Demo component created from class</h3>
        </div>)
    }
}

export default Hello;