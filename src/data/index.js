import workEN from './work/work-en';
import workFR from './work/work-fr';
import nav from './nav';

// Audio
import soundscape from '@/assets/audio/soundscape.mp3';

const audio = {
  files: [
    {
      name: 'soundscape',
      src: soundscape,
    },
  ],
};

const config = {
  work: {
    en: workEN,
    fr: workFR,
  },
  nav,
  audio,
};

export default config;
