import React from 'react'

const Latitude = (props) => {
    return (
        <div>
            <p>Latitude : {(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.lat != null && props.CName.location.lat ? props.CName.location.lat : undefined ) }</p>
        </div>
    )
}

export default Latitude;
