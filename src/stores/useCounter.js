import { create } from 'zustand';

export default create((set) => ({
  visibleProject: null,
  setVisibleProject: (project) => set({ visibleProject: project }),
}));
