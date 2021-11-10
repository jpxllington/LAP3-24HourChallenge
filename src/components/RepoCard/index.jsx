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

                <div className="RepoCard card-sm" role="repoCardSmall">
                    <h1 id="RepoName">{repo.repo.name}</h1>
                    {/*<p id="RepoDescription">{repo.repo.description}</p>*/}
                    <div id="buttonHolder">
                        <a className="gitButton" href={repo.repo.html_url} target="_blank"><img src={gitLogo} /></a>
                        <button className="moreDetails" role="expand" onClick={expand}>View Details</button>
                    </div>
                </div>)}
            {expanded && (
                <div className="RepoCard card-lg" role="repoCardLarge">
                    <h1 id="RepoName">{repo.repo.name}</h1>
                    <p id="RepoDescription">{repo.repo.description}</p>
                    <p id="RepoOwner">Owner: {repo.repo.owner.login}</p>
                    <p id="RepoForks">Number of forks: {repo.repo.forks_count}</p>
                    <p id="RepoStargazers">Number of stargazers {repo.repo.stargazers_count}</p>
                    <div id="buttonHolder">
                        <a className="gitButton" href={repo.repo.html_url} target="_blank"><img src={gitLogo} /></a>
                        <button className="lessDetails" onClick={expand}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}