import React from 'react'

const Longitude = (props) => {
    return (
        <div>
            <p>Longitude : { (props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.lon != null && props.CName.location.lon ? props.CName.location.lon : undefined )}</p>
        </div>
    )
}

export default Longitude;
