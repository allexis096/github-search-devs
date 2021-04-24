import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GithubUser } from '../types';

type UserProviderProps = {
  children: ReactNode;
};

type UserContextData = {
  githubUser: GithubUser;
  setGithubUser: React.Dispatch<React.SetStateAction<GithubUser>>;
};

const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [githubUser, setGithubUser] = useState<GithubUser>();

  return (
    <UserContext.Provider value={{ githubUser, setGithubUser }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
