import React from 'react'
import RepoInfo from "./RepoInfo";

export default function Repo({ repo }) {
    return (
        <div className="repos-item" key={repo.id}>
            <RepoInfo value={repo.name} cssClass="item-name" link={repo.html_url} />
            <RepoInfo value={repo.description} cssClass="item-desc" />
        </div>
    )
}
