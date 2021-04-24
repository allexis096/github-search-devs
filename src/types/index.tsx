export type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  updated_at: Date;
  html_url: string;
};

export type User = {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  company: string;
  location: string;
  email: string | null;
  blog: string | null;
  twitter_username: string | null;
  starred: number;
  repos: Repo[];
};

export type GithubUser = {
  user: User;
};
