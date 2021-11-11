import React from 'react';

const WindDirection = (props) => {
    return (
        <div>
            <p> { (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.wind_dir != null && props.CName.current.wind_dir ? props.CName.current.wind_dir : undefined )}</p>
        </div>
    )
}

export default WindDirection;
