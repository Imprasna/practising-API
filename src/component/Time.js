import React from 'react';
import moment from 'moment';

const Time = (props) => {
    return (
        <div>
            <p> { (props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.localtime != null && props.CName.location.localtime ? moment(props.CName.location.localtime).format('LLLL') : undefined ) }</p>
            {/* {console.log(props != null && props.CName.location != null && props.CName.location!= null && props.CName.location.localtime != null && props.CName.location.localtime ? props.CName.location.localtime : undefined )} */}
        </div>
    )
}

export default Time;
