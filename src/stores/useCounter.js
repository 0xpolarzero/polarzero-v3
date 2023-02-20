import { create } from 'zustand';
import useConfig from './useConfig';
import config from '@/data';

export default create((set, get) => ({
  // Scroll
  scrollPos: 0,
  setScrollPos: (scrollPos) => set({ scrollPos }),

  // Visible project
  visibleProject: null,
  setVisibleProject: (project) => set({ visibleProject: project }),

  // Active page
  activePage: config.nav[useConfig.getState().language][0],
  setActivePage: (page) => set({ activePage: page }),

  // Reading mode
  readingMode: false,
  setReadingMode: (readingMode) => set({ readingMode }),
  toggleReadingMode: () => {
    const { readingMode, setScrollPos } = get();

    if (readingMode) setScrollPos(0);
    set({ readingMode: !readingMode });
  },
}));
