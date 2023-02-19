import workEN from './work/work-en';
import workFR from './work/work-fr';
import educationEn from './education/education-en';
import educationFr from './education/education-fr';
import about from './about';
import nav from './nav';

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
  education: {
    en: educationEn,
    fr: educationFr,
  },
  about,
  nav,
  audio,
};

export default config;
