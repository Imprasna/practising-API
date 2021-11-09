import React from 'react'

const Icon = (props) => {
    return (
        <div>
            <img src={(props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.condition.icon != null && props.CName.current.condition.icon ? props.CName.current.condition.icon : undefined )}/>
        </div>
    )
}

export default Icon;
