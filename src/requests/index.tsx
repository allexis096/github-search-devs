import { FormEvent } from 'react';
import { api } from '../services/api';
import { User, Repo, GithubUser } from '../types';
import { History } from 'history';

type SearchUserData = {
  event: FormEvent;
  setLoading: (value: boolean) => void;
  setError: ({ error: boolean, message: string }) => void;
  setGithubUser: (value: GithubUser) => void;
  setDone: (value: boolean) => void;
  history: History;
};

export async function searchUser({
  event,
  setLoading,
  setError,
  setGithubUser,
  setDone,
  history,
}: SearchUserData) {
  event.preventDefault();
  setLoading(true);
  setError({
    error: false,
    message: '',
  });

  try {
    const UNIQUE_FORM = 0;
    const form = document.forms[UNIQUE_FORM];
    const { user } = form;

    const { data: dataUser } = await api.get<User>(`${user.value}`);
    const { data: starred } = await api.get(`${user.value}/starred`);
    const { data: repos } = await api.get<Repo[]>(`${user.value}/repos`);

    const newUser: GithubUser = {
      user: {
        id: dataUser.id,
        avatar_url: dataUser.avatar_url,
        name: dataUser.name,
        login: dataUser.login,
        html_url: dataUser.html_url,
        bio: dataUser.bio,
        followers: dataUser.followers,
        following: dataUser.following,
        company: dataUser?.company,
        location: dataUser?.location,
        email: dataUser?.email,
        blog: dataUser?.blog,
        twitter_username: dataUser?.twitter_username,
        starred: starred.length,
        repos: repos.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo?.description,
          stargazers_count: repo.stargazers_count,
          updated_at: repo.updated_at,
          html_url: repo.html_url,
        })),
      },
    };

    setGithubUser(newUser);
    setLoading(false);
    setDone(true);

    localStorage.removeItem('@github-search-devs');
    localStorage.setItem('@github-search-devs', JSON.stringify(newUser));

    setTimeout(() => {
      history.push('/profile');
    }, 1000);
  } catch {
    setLoading(false);
    setError({
      error: true,
      message: 'Usuário não encontrado!',
    });
  }
}
