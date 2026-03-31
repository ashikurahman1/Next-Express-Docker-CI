import { create } from 'zustand';

interface AppState {
  data: string;
  setData: (newData: string) => void;
}

export const useStore = create<AppState>(set => ({
  data: 'Loading...',
  setData: newData => set({ data: newData }),
}));
