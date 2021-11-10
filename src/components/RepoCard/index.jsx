import React, {useState} from "react";

export const RepoCard = (repo) => {

    const[ expanded, setExpanded] = useState(false)

    const expand = () => {
        setExpanded(!expanded)
    }

    return(
        <>  
            {!expanded && (
                <div className="RepoCard card-sm">
                    <h1>{repo.name}</h1>
                    <p>Owner: {repo.owner.login}</p>
                    <div className="buttonHolder">
                        <a className="gitButton" href={repo.html_url} target="_blank">GitHubLogoHere</a>
                        <button className="moreDetails" onClick={expand}>View Details</button>
                    </div>
                </div>)}
            {expanded && (
                <div className="RepoCard card-lg">
                    <h1>{repo.name}</h1>
                    <p>Owner: {repo.owner.login}</p>
                    <p>Number of forks: {repo.forks_count}</p>
                    <p>Number of stargazers {repo.stargazers_count}</p>
                    <div className="buttonHolder">
                        <a className="gitButton" href={repo.html_url} target="_blank">GitHubLogoHere</a>
                        <button className="lessDetails" onClick={expand}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}