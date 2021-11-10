import React from 'react';
import { useSelector } from 'react-redux';
import { RepoCard } from "../../components"

export const RepoPage = () => {

    let repoData = useSelector(store => store.result)
    console.log(repoData);

    return(
        <>
            <h1>hi</h1>
            {
                repoData.map(repo =>(
                    <RepoCard  repo={repo}/>
                ))
            }
        </>
    )
}