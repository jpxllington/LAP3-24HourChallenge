import React from 'react';
import { UserCont } from '../../components/UserProfile/index';
import { useSelector } from 'react-redux';
import { RepoCard } from "../../components"

export const User = () => {
    let repoData = useSelector(store => store.result)
    return (
        <>

            <div className="userPage">
                <UserCont />
                {
                repoData.map(repo =>(
                    <RepoCard  repo={repo}/>
                ))
            }
            </div>

        </>
    )
}