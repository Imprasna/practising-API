import React from 'react';

const Celcius = (props) => {
    return (
        <div>
            <p>{ (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.temp_c != null && props.CName.current.temp_c ? props.CName.current.temp_c : undefined )} Celcius</p>
        </div>
    )
}

export default Celcius
