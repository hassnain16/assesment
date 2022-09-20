import React from 'react'
import './styles.css'
function Button(props) {
    return (
        <button
            id={props.id}
            name={props.name}
            onClick={props.onClick}
        >{props.title}</button>
    )
}

export default Button