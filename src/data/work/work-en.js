import types from './types';
import tech from './tech';

const work = [
  {
    type: types[0],
    title: 'Promise',
    description: (
      <div>
        A blockchain-based platform that provides{' '}
        <b>transparency and accountability in digital relationships</b>,
        allowing users to keep track of the reliability of a person or a team.
        Essentially, it&apos;s a way to ensure that founders can be{' '}
        <b>held accountable for their promises</b>, by allowing them to make a
        genuine commitment <b>that cannot be altered</b>.
      </div>
    ),
    context: (
      <div>
        Built during the Chainlink Fall 2022 Hackathon. QuickNode 1st Prize &
        Chainlink Top 40 Quality Projects.
      </div>
    ),
    links: (
      <>
        <a href='https://usepromise.xyz' target='_blank' rel='noreferrer'>
          Website
        </a>{' '}
        |{' '}
        <a href='https://docs.usepromise.xyz' target='_blank' rel='noreferrer'>
          Documentation
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/chainlink-fall-2022-hackathon'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
      </>
    ),
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.chainlink,
      tech.ipfs,
      tech.arweave,
      tech.bundlr,
      tech.theGraph,
      tech.apollographql,
      tech.nodejs,
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.antd,
    ],
    image: { url: '/images/screenshots/promise.png', x: 4112, y: 2400 },
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
    links: 'https://immersiveaudio.polarzero.xyz',
    tech: [tech.ipfs],
    image: { url: '/images/screenshots/immersiveaudio.png', x: 4112, y: 2412 },
    date: '2020-01-01',
  },
];

export default work;
