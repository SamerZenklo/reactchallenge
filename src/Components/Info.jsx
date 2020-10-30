import React from 'react'
import InfoItem from "./InfoItem";

export default function Info(props) {
    return (
        <div className="content">
        <InfoItem text="Fullname" value={props.user.name} />
        <InfoItem text="Username" value={props.user.login} />
        <InfoItem text="Location" value={props.user.location} />
        <InfoItem text="Email" value={props.user.email} />
    </div>
    )
}
