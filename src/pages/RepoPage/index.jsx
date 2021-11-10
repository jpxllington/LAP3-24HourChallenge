import React from 'react';
import { useSelector } from 'react-redux';
import { RepoCard } from "../../components"

export const RepoPage = () => {

     repoData = useSelector(store => store)


    return(
        <>
            {
                repoData.map(repo =>(
                    <RepoCard  repo={repo}/>
                ))
            }
        </>
    )
}