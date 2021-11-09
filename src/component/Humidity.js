import React from 'react'

const Humidity = (props) => {
    return (
        <div>
            <p>{ (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.humidity != null && props.CName.current.humidity ? props.CName.current.humidity : undefined )} <sup>g.m-3</sup></p>
        </div>
    )
}

export default Humidity;
