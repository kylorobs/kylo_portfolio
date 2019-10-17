import React from 'react';

const FlexContainer = (props) => {
    let styles = {
        display: props.display || 'flex',
        justifyContent: props.justify || 'center',
        alignItems: props.align || 'center',
        flexDirection: props.direction || 'row',
        flexWrap: props.wrap || 'wrap',
        width: '100%'
    }

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default FlexContainer;