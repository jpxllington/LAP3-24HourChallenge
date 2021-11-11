// import {  UserProfile } from '.';
// import { screen } from '@testing-library/react';

// describe('Profile', () => {

//     it('correctly renders the UserProfile', () => {
//         const initState = {
//             result: {
//                 user: {
//                         login: 'testLogin',
//                         name: 'testName',
//                         avatar_url: 'testUrl',
//                         bio: ''
//                     },
//             },
//             error: null
//         };

//         renderWithReduxAndRouter(<UserProfile />, { initState });
//         const img = screen.getByRole('img');
//         const bio = screen.getByRole('user-bio');
//         const userName = screen.getByRole('userName');
//         const login = screen.getByRole('userLogin');
//         const errorMsg = screen.queryByRole('alert');

//         expect(errorMsg).not.toBeInTheDocument();
//         expect(img.src).toBe('http://localhost/testUrl');
//         expect(bio.textContent).toBe('');
//         expect(userName.textContent).toBe('testName');
//         expect(login.textContent).toBe('testLogin');
//     });


// })
