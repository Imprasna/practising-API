import React from 'react'

const WindSpeed = (props) => {
    return (
        <div>
            <p>{ (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.wind_kph != null && props.CName.current.wind_kph ? props.CName.current.wind_kph : undefined )} </p>
        </div>
    )
}

export default WindSpeed;
