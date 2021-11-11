import React from 'react';

const Country = (props) => {


    return (
        <div>
            <p>{(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.country != null && props.CName.location.country ? props.CName.location.country : undefined ) }</p>
        </div>
    )
}

export default Country;
