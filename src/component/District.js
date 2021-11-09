import React from 'react'

const District = (props) => {
    return (
        <div>
            <p>{(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.name != null && props.CName.location.name ? props.CName.location.name : undefined ) }</p>
        </div>
    )
}

export default District;
