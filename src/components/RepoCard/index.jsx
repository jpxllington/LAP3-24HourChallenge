import React, {useState} from "react";
import "./style.css"
import gitLogo from "./Assets/github-alt.svg"
export const RepoCard = (repo) => {

    const[ expanded, setExpanded] = useState(false)

    const expand = () => {
        setExpanded(!expanded)
    }


    return(
        <>  
            {!expanded && (
                <div className="RepoCard card-sm">
                    <h1>{repo.repo.name}</h1>
                    <div className="buttonHolderMore">
                        <a className="gitButton" href={repo.repo.html_url} target="_blank"><img src={gitLogo} /></a>
                        <button className="moreDetails" onClick={expand}>View Details</button>
                    </div>
                </div>)}
            {expanded && (
                <div className="RepoCard card-lg">
                    <h1>{repo.repo.name}</h1>
                    <p>{repo.repo.description}</p>
                    <p>Owner: {repo.repo.owner.login}</p>
                    <p>Number of forks: {repo.repo.forks_count}</p>
                    <p>Number of stargazers {repo.repo.stargazers_count}</p>
                    <div className="buttonHolderLess">
                        <a className="gitButton" href={repo.repo.html_url} target="_blank"><img src={gitLogo} /></a>
                        <button className="lessDetails" onClick={expand}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}