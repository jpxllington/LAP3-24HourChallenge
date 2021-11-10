import React from 'react';
import { UserCont } from '../../components/UserProfile/index';
import { RepoCard } from '../../components/RepoCard/index'

export const User = () => {
    return (
        <>
            <main className="userPage">
            <UserCont />
            <RepoCard />
            
            </main>
        </>
    )
}