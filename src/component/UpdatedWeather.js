import React from 'react';
import moment from 'moment';

const UpdatedWeather = (props) => {
    return (
        <div>
            <p>Updated on : {(props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.last_updated != null && props.CName.current.last_updated ? moment(props.CName.current.last_updated).format('LLLL') : undefined ) }</p>
        </div>
    )
}

export default UpdatedWeather;
