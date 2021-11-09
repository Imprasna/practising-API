import React from 'react'

const Cloud = (props) => {
    return (
        <div>
            <p>{(props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.cloud != null && props.CName.current.cloud ? props.CName.current.cloud : undefined ) } % Clouds</p>
        </div>
    )
}

export default Cloud;
