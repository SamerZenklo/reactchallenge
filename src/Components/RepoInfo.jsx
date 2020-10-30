import React from 'react'

export default function RepoInfo({cssClass, value, link=null}) {
    return (
        <>
            <span className={cssClass}><a href={link}>{value}</a></span>
        </>
    )
}