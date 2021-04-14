import { atom } from 'jotai';

export const currUserID = atom('');
export const loggedIn = atom(false);
export const uData = atom({});
export const posts = atom([]);
export const individualPost = atom({});
export const postReplies = atom([]);
