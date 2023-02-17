import types from './types';
// Images
import imagePromise from '@/assets/images/screenshot_promise.png';
import imageMetaverse from '@/assets/images/screenshot_metaverse.png';

const work = [
  {
    type: types[0],
    title: 'Promise',
    description: (
      <div>
        A blockchain-based platform that provides transparency and
        accountability in digital relationships, allowing users to keep track of
        the reliability of a person or a team. Essentially, it's a way to ensure
        that founders can be held accountable for their promises, by allowing
        them to make a genuine commitment that cannot be altered.
      </div>
    ),
    context: (
      <div>
        Built during the Chainlink Fall 2022 Hackathon. QuickNode 1st Prize &
        Chainlink Top 40 Quality Projects.
      </div>
    ),
    link: 'https://usepromise.xyz',
    image: imagePromise,
    date: '2020-01-01',
  },
  {
    type: types[1],
    title: 'Immersive Audio',
    description: (
      <div>
        An example of 3D audio integration in a virtual world on the Web, to
        showcase the major benefits of immersive audio in such environments
      </div>
    ),
    context: <div>Built using the Atmoky Web audio engine.</div>,
    link: 'https://immersiveaudio.polarzero.xyz',
    image: imageMetaverse,
    date: '2020-01-01',
  },
];

export default work;
