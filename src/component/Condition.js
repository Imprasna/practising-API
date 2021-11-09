import React from 'react'

const Condition = (props) => {
    return (
        <div>
            <p>{ (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.condition.text != null && props.CName.current.condition.text ? props.CName.current.condition.text : undefined )}</p>
        </div>
    )
}

export default Condition;
