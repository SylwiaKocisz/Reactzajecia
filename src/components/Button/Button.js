import React from "react";
var classNames = require('classnames');

class Button extends React.Component {
    // ...
    render() {
        var btnClass = classNames({
            btn: true,
            'btn-pressed': this.state.isPressed,
            'btn-over': !this.state.isPressed && this.state.isHovered
        });
        return <button className={btnClass}>{this.props.label}</button>;
    }
}

export default Button;

const Button = ({ size, dark, children }) => {
    const className = classNames({
        [styles.button]: true,
        [styeles.dark]: dark,
        [styles.sizeSmall]: size === 'small',
        // ...
    })
    return <button className={className}>{childred}</button>
}