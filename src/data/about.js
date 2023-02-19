import { AiOutlineBook } from 'react-icons/ai';
import { SiHashnode, SiTwitter } from 'react-icons/si';

const about = {
  articles: [
    {
      title: 'Immersive Audio in the Metaverse',
      caption:
        'Why immersive audio matters in virtual worlds, and how to implement it.',
      lang: 'en',
      link: 'https://blog.polarzero.xyz/immersive-audio-in-the-metaverse/',
      icon: <SiHashnode size={20} />,
      date: {
        en: '2022-09-21',
        fr: '21/09/2022',
      },
    },
    {
      title: `Mémoire: L'audio immersif dans les mondes virtuels`,
      caption: `Mémoire de fin d'études, Master en Production Musicale au SAE Institute. Une place pour l'audio immersif dans le Web 3.0: intégration dans le métavers.`,
      lang: 'fr',
      link: 'https://memoire.polarzero.xyz/',
      icon: <AiOutlineBook size={20} />,
      date: {
        en: '2022-07-07',
        fr: '07/07/2022',
      },
    },
    {
      title: 'What is the Metaverse Anyway?',
      caption: `Hashnode Epic Writeathon - Honorable Mention`,
      lang: 'en',
      link: 'https://blog.polarzero.xyz/what-is-the-metaverse-anyway/',
      icon: <SiHashnode size={20} />,
      date: {
        en: '2022-05-14',
        fr: '14/05/2022',
      },
    },
    {
      title: 'NFTs, accessibility and mass adoption',
      caption:
        'A short Twitter thread on the paradox between mass adoption and price/accessibility.',
      lang: 'en',
      link: 'https://twitter.com/0xpolarzero/status/1522930572498145281',
      icon: <SiTwitter size={20} />,
      date: {
        en: '2022-05-07',
        fr: '07/05/2022',
      },
    },
  ],
};

export default about;
