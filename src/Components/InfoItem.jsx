import React from 'react'

export default function InfoItem(props) {
    return (
        <>
            <h3>{props.text}: <span className="info">{props.value}</span></h3>
        </>
    )
}
