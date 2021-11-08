import React, {useEffect} from 'react';

const Country = (props) => {

    React.useEffect = (() => {

    }, [])

    return (
        <div>
            {console.log(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.country != null && props.CName.location.country ? props.CName.location.country : undefined )}
        </div>
    )
}

export default Country;
