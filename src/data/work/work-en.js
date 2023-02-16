import types from './types';
// Images
import imagePromise from '@/assets/images/screenshot_promise.png';
import imageMetaverse from '@/assets/images/screenshot_metaverse.png';

const work = [
  {
    type: types[0],
    title: 'Name of project',
    description: 'Description of project, some details, etc.',
    link: 'https://usepromise.xyz',
    image: imagePromise,
    date: '2020-01-01',
  },
  {
    type: types[1],
    title: 'Name of project',
    description: 'Description of project, some details, etc.',
    link: 'https://immersiveaudio.polarzero.xyz',
    image: imageMetaverse,
    date: '2020-01-01',
  },
];

export default work;
