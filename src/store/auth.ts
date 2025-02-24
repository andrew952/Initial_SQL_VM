import { atom } from 'jotai';
import type { User } from '../types/auth';

export const userAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);