import React, {useEffect} from 'react';

const Region = (props) => {

    React.useEffect = (() => {

    }, [])

    return (
        <div>
            {console.log(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.region != null && props.CName.location.region ? props.CName.location.region : undefined )}
        </div>
    )
}

export default Region;
