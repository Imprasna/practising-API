import React from 'react'

const Farenheit = (props) => {
    return (
        <div>
            <p>{ (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.temp_f != null && props.CName.current.temp_f ? props.CName.current.temp_f : undefined )} Farenheit</p>
        </div>
    )
}

export default Farenheit;
