import React from 'react';

const Continent = (props) => {
    return (
        <div>
            <p>{(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.tz_id != null && props.CName.location.tz_id ? props.CName.location.tz_id : undefined )}</p>
        </div>
    )
}

export default Continent;
