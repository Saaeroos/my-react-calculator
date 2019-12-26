import React from 'react'
import './Button.css'

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "="
}

const Button = props => {
    return(
        <div className={
            `button-wrapper
            ${isOperator(props.children) ? null : "operator"}`
        } onClick={() => props.addVal(props.children)}>
            {props.children}
        </div>
    )
}

export default Button