//whether the user is logged in or not and provides the role of user(admin,user,etc)
import React from 'react';

export default React.createContext({isLoggedIn: true, username: '', role: ''});
