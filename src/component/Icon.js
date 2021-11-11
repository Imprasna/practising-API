import React from 'react';

const Icon = (props) => {
    return (
        <div>
            <img alt={(props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.condition.text != null && props.CName.current.condition.text ? props.CName.current.condition.text : undefined )} src={(props != null && props.CName.current != null && props.CName.current!= null && props.CName.current.condition.icon != null && props.CName.current.condition.icon ? props.CName.current.condition.icon : undefined )}/>
        </div>
    )
}

export default Icon;
