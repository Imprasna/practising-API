import React from 'react';

const Uv = (props) => {
    return (
        <div>
            <p> { (props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.uv != null && props.CName.current.uv ? props.CName.current.uv : undefined )} </p>
        </div>
    )
}

export default Uv;