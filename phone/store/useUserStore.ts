import { IndexUserResponse } from '@/lib/api/user';
import { create } from 'zustand';

type UserStore = {
  user: IndexUserResponse | null;
  setUser: (user: IndexUserResponse) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
